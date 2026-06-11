import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API endpoint to fetch live product image URLs from 193igusa.com
  app.get("/api/igusa-data", async (req, res) => {
    try {
      console.log("Fetching live images from 193igusa.com...");
      
      const headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
      };

      // Fetch homepage, all-collections page, specific high-priority product pages, and full products catalog JSON
      const [homeRes, collRes, melodyRes, bishoujoRes, roseRes, productsRes] = await Promise.allSettled([
        fetch("https://193igusa.com/", { headers }),
        fetch("https://193igusa.com/collections/all", { headers }),
        fetch("https://193igusa.com/products/melody-shoulder-bag", { headers }),
        fetch("https://193igusa.com/products/%E7%BE%8E%E5%B0%91%E5%A5%B3-t-shirt", { headers }),
        fetch("https://193igusa.com/products/rose-skirt-1", { headers }),
        fetch("https://193igusa.com/ko-kr/products.json?limit=150", { headers })
      ]);

      let html = "";
      if (homeRes.status === "fulfilled" && homeRes.value.ok) {
        html += await homeRes.value.text();
      }
      if (collRes.status === "fulfilled" && collRes.value.ok) {
        html += await collRes.value.text();
      }
      if (melodyRes.status === "fulfilled" && melodyRes.value.ok) {
        html += await melodyRes.value.text();
      }
      if (bishoujoRes.status === "fulfilled" && bishoujoRes.value.ok) {
        html += await bishoujoRes.value.text();
      }
      if (roseRes.status === "fulfilled" && roseRes.value.ok) {
        html += await roseRes.value.text();
      }
      if (productsRes.status === "fulfilled" && productsRes.value.ok) {
        html += await productsRes.value.text();
      }

      const FALLBACK_IGUSA_IMAGES = [
        "https://193igusa.com/cdn/shop/files/I_1_f74ab495-0af0-40b0-90bc-12daf3b9174b.png",
        "https://cdn.shopify.com/s/files/1/0825/4491/8821/files/G_1_895dcb77-e857-40dd-b49f-1d251f65470a.png",
        "https://cdn.shopify.com/s/files/1/0825/4491/8821/files/D_1_2f9ab1eb-11cd-4f58-8c96-4f3b16d3b6db.png",
        "https://cdn.shopify.com/s/files/1/0825/4491/8821/files/A_1_21b839aa-8402-4322-aae6-c533a040f6e9.png",
        "https://cdn.shopify.com/s/files/1/0825/4491/8821/files/R_1_ab3cbe68-0f4a-4aa5-a96f-f94581e24d37.png",
        "https://cdn.shopify.com/s/files/1/0825/4491/8821/files/motka2_Colorway_A_copy-Photoroom_copy.png",
        "https://cdn.shopify.com/s/files/1/0825/4491/8821/files/E_1_copy.png",
        "https://cdn.shopify.com/s/files/1/0825/4491/8821/files/Photoroom_002_20251125_001304copy.png",
        "https://cdn.shopify.com/s/files/1/0825/4491/8821/files/Photoroom_000_20251125_001304copy.png",
        "https://193igusa.com/cdn/shop/files/1-Photoroom_4_8ebb518d-912f-4f79-bf8c-7c150160a911.png",
        "https://193igusa.com/cdn/shop/files/1-Photoroom_2_46c76fde-b623-4107-af76-f8037a6d1679.png",
        "https://193igusa.com/cdn/shop/files/5_copy-Photoroom_2025d069-9c56-4949-9ae5-775bb3ef89e1.png",
        "https://193igusa.com/cdn/shop/files/5-Photoroom_4_03183315-ae94-4256-8879-d063ce64be95.png",
        "https://193igusa.com/cdn/shop/files/4-Photoroom_10_3b54a9a6-2333-4ccd-8f58-8f0ba4c7320b.png",
        "https://193igusa.com/cdn/shop/files/7-Photoroom_157bc4b2-26e7-484d-ab32-9beca0615b37.png",
        "https://193igusa.com/cdn/shop/files/3-Photoroom_b4b6637f-c09b-4599-b091-dce8e8679488.png"
      ];

      let images: string[] = [];

      if (!html) {
        console.warn("Could not fetch page contents from 193igusa.com. Using preloaded high-quality fallback images.");
        images = FALLBACK_IGUSA_IMAGES;
      } else {
        // Regexes to extract CDN and internal shopify image URLs
        const imgRegex = /https:\/\/cdn\.shopify\.com\/s\/files\/[^\s"']+\.(?:jpg|jpeg|png|webp|gif)/g;
        const internalImgRegex = /\/\/193igusa\.com\/cdn\/shop\/[^\s"']+\.(?:jpg|jpeg|png|webp|gif)/g;
        
        let match;
        
        while ((match = imgRegex.exec(html)) !== null) {
          images.push(match[0]);
        }
        while ((match = internalImgRegex.exec(html)) !== null) {
          images.push("https:" + match[0]);
        }

        // Clean, filter, and deduplicate
        images = Array.from(new Set(images)).map(url => {
          // Strip out Shopify size scaling parameters like _110x110, _360x, etc., and query params
          let clean = url.split("?")[0];
          // Replace typical thumbnail dimensions to get high-res images
          clean = clean.replace(/_(?:[0-9]+x[0-9]*|[0-9]*x[0-9]+|small|medium|large|grande)(?=\.[a-z]+)/gi, "");
          return clean;
        });

        // Filter out files that are clearly small elements, icons, payment badges, or theme indicators
        const filterKeywords = [
          "payment", "icon", "badge", "logo", "avatar", "gift-card", 
          "trust", "star", "loading", "arrow", "checkbox", "cart"
        ];
        images = images.filter(url => {
          const lower = url.toLowerCase();
          return !filterKeywords.some(keyword => lower.includes(keyword));
        });

        if (images.length === 0) {
          images = FALLBACK_IGUSA_IMAGES;
        }
      }

      res.json({
        success: true,
        images: images
      });
    } catch (error: any) {
      console.error("Error scraping 193igusa:", error.message);
      res.json({
        success: false,
        error: error.message,
        images: []
      });
    }
  });

  // Vite dev or production server routing
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Express custom server running on http://localhost:${PORT}`);
  });
}

startServer();
