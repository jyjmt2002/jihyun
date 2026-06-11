/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { 
  motion, 
  AnimatePresence 
} from "motion/react";
const logoImage = "https://193igusa.com/cdn/shop/files/nelogo_828ff3f3-8acf-431c-a30b-5c6b46acd0f8.png?v=1777452430&width=800";
//const heroImage = "https://193igusa.com/cdn/shop/files/web_c7e31053-3e5c-4a6a-8fdd-e5eb1efe278a.jpg?v=1777533500";
const [heroImage, setHeroImage] = useState("https://193igusa.com/cdn/shop/files/web_c7e31053-3e5c-4a6a-8fdd-e5eb1efe278a.jpg?v=1777533500");
import { 
  Heart, 
  ShoppingBag, 
  Menu, 
  X, 
  ChevronDown, 
  Plus, 
  Minus, 
  Trash2, 
  Send, 
  Instagram, 
  Globe, 
  Sparkle, 
  Check, 
  Truck, 
  RefreshCw, 
  Lock, 
  MessageSquare,
  Twitter,
  Mail,
  User
} from "lucide-react";
import { Product, CartItem } from "./types";
import { INITIAL_PRODUCTS, CURATED_ITEMS, LOOKBOOK_IMAGES, SOCIAL_GRID, MARQUEE_IMAGES } from "./data";
import { SparkleTrail } from "./components/SparkleTrail";

const translations: Record<string, Record<string, string>> = {
  KO: {
    "nav_all": "전체",
    "nav_tops": "의류",
    "nav_outer": "아웃웨어",
    "nav_acc": "액세서리",
    "nav_etc": "잡화",
    "marquee_msg": "⚡ TOO CUTE TOO COOL ⚡ FREE SHIPPING OVER ₩100,000 ⚡ NEW SEASON ARRIVALS ONLY AT IGUSA ⚡",
    "checkout": "체크아웃 주문하기",
    "cart": "장바구니 🛒",
    "cart_empty": "장바구니가 텅 비어 있습니다. 너무 귀여운 옷들을 담아보세요! ˊᵕˋ",
    "add_to_cart": "장바구니 담기",
    "quick_view": "퀵뷰 상세",
    "description": "상세 설명",
    "size": "사이즈",
    "curated_title": "♥ IGUSA CURATED 핫 아이템 ✧",
    "all_products": "♥ IGUSA WEB SHOP CATALOG 🛒",
    "lookbook_title": "♥ LOOKBOOK HARMONIES",
    "lookbook_badge": "TOO CUTE!",
    "lookbook_subtitle": "⚡ INFINITE HARMONY LOOP ⚡",
    "newsletter_title": "뉴스레터 구독하기",
    "newsletter_sub": "이메일을 입력하고 IGUSA 신상 드롭 소식을 가장 빠르게 받아보세요!",
    "newsletter_placeholder": "이메일 입력",
    "newsletter_btn": "구독",
    "brand_story": "IGUSA BRAND STORY",
    "brand_desc": "IGUSA는 도쿄 하라주쿠의 레트로 사이버 데코라 스트리트 컬처와 서울의 미니멀 무드를 융합하여 'TOO CUTE TOO COOL' 한 에너지를 불어넣는 인디펜던트 디자이너 브랜드 레이블입니다. 어둡고 삭막한 도심 속에서 본인만을 위한 레이어드 팔레트를 찾아보세요.",
    "shipping_notice": "국제 배송 안내",
    "shipping_desc": "전 세계 배송",
    "gift_notice": "선물 에디션 패키지",
    "gift_desc": "귀여운 스티커 팩 & 리본 패킹 서비스",
    "secure_payment": "보안 결제 안내",
    "secure_desc": "3D 암호화 결제",
    "about_us": "ABOUT US",
    "customer_care": "고객지원 (CUSTOMER CARE)",
    "insta_title": "♥ IGUSA INSTAGRAM 24/7",
    "follow": "팔로우",
    "following": "팔로잉 ✓",
    "toast_add_cart": "장바구니에 추가되었습니다!",
    "toast_liked": "💖 위시리스트에 추가되었습니다!",
    "toast_unliked": "위시리스트에서 제거되었습니다.",
    "newsletter_joined": "구독 감사합니다!",
    "newsletter_joined_msg": "입력하신 이메일로 10% 웰컴 쿠폰 코드가 발송될 예정입니다! 이그사와 함께해 주셔서 고마워요. ʚ(•”̮•)ɞ",
    "close": "닫기",
    "free_shipping": "무료 배송",
    
    // New localization keys
    "policy_info": "정책 · 안내",
    "terms_of_service": "이용약관",
    "privacy_policy": "개인정보처리방침",
    "shipping_policy": "배송정책",
    "refund_policy": "환불정책",
    "customer_care_title": "고객지원",
    "faq": "FAQ",
    "contact_us": "CONTACT US",
    "my_account": "MY ACCOUNT",
    "order_tracking": "ORDER TRACKING",
    "shop_now": "SHOP NOW",
    "follow_us": "FOLLOW US",
    "narrative_msg": "어이 거기 아기천사... 깜찍함과 시크함이 완벽히 뒤섞인 이그사 'TOO CUTE TOO COOL' 컬렉션을 봐줘... 어째서인지 완전 너한테 딱이라는 느낌이 들어서 새벽 3시까지 잠도 못 자고 생각했잖아 ㅋㅋㅋ 하라주쿠의 에너지가 넘치면서도 우리가 예전에 미쳐있었던 엉뚱하고 귀여운 사이버틱 카오스 무드랄까?? 온 세상이 반짝이로 덮인 것처럼 약간 기괴하게 귀엽고, 살짝 제정신이 아니지만 그 자체가 너무 예쁜 느낌... 아무 이유 없이 엄청 차려입은 날처럼 모든 순간이 하나하나 소중하고 영화의 한 장면처럼 드라마틱하게 느껴지는 그런 무드야...",
    "club_joined_title": "CLUB IGUSA 가입 성공! ♥",
    "club_joined_desc": "축하합니다! 뉴스레터 이메일 정기 구독자로 등록되셨습니다. 온라인몰 전용 시크릿 할인 쿠폰 코드를 메일로 보내드릴게요! IGUSA의 소식을 인스타그램에서 더 빠르게 확인해보세요!",
    "view_more_insta": "인스타그램에서 더보기",
    "returns_notice": "반품 · 교환 안내",
    "returns_desc": "안심 반품·교환",
    "line_notice": "LINE 고객지원",
    "line_desc": "궁금한 점이 있다면 언제든지 문의해주세요🖤",
    "demo_cart_title": "-- 데모 장바구니 리스트 --",
    "demo_cart_tip": "💡 마음에 드는 상품의 '담기'버튼을 누르시면 실시간으로 추가됩니다 ,,⁃ ⩊ ⁃,,",
    "total_amount": "결제 예정 총금액",
    "quick_view_desc": "이 아이템은 Harajuku Y2K Decora 감성으로 디자인되어, 톡톡 튀는 네온 컬러 코디에 마법 같은 특별함을 더해줍니다. 100% 프리미엄 코튼 소재로 부드럽고 톡톡 튀는 핏을 선사합니다.",
    "account_email": "이메일 주소",
    "account_password": "비밀번호",
    "account_welcome_msg": "오늘도 특별하고 사랑스러운 하루를 보내시길 바라요! 💖",
    "account_cart_empty": "장바구니가 비어있습니다.",
    "account_wish_empty_title": "등록된 관심상품이 없습니다. ♡",
    "account_wish_empty_desc": "마음에 드는 상품의 하트를 누르면 목록에 실시간 기록됩니다.",
    "chk_title": "CHECK OUT / 체크아웃",
    "chk_payment_method": "결제수단",
    "chk_shipping_title": "배송 정보",
    "chk_last_name_label": "성",
    "chk_first_name_label": "이름",
    "chk_phone_label": "연락처",
    "chk_zip_label": "우편번호",
    "chk_address_label": "주소",
    "chk_detail_label": "상세 주소",
    "chk_shipping_method": "배송 방법",
    "chk_shipping_address_prompt": "사용 가능한 배송 방법을 보려면 배송 주소를 입력하세요.",
    "chk_save_info": "보다 빠른 결제를 위해 내 정보 저장",
    "chk_agree_disclaimer": "(결제하면 Shop의 약관 및 개인정보처리방침에 따라 Shop 계정 생성에 동의하게 됩니다)",
    "chk_coupon_label": "쿠폰 및 할인코드 입력 항목",
    "chk_coupon_apply": "적용",
    "chk_coupon_invalid": "유효하지 않은 쿠폰 코드입니다! ㅠㅠ",
    "chk_coupon_success": "10% 할인 쿠폰이 적용되었습니다! ʚ(•”̮•)ɞ",
    "chk_order_total": "총 결제 금액",
    "chk_subtotal": "상품 합계 금액",
    "chk_discount": "할인 금액",
    "chk_shipping_fee_label": "배송비",
    "chk_shipping_rule": "💡 FREE SHIPPING OVER 100,000\n해외 배송비는 배송 주소에 따라 달라지며 이후 따로 청구됩니다.",
    "chk_shipping_free": "무료 배송 적용완료! (10만원 이상 구매) 🚚",
    "chk_shipping_paid": "전국 배송비 부과 (10만원 미만 구매)",
    "chk_missing_fields": "배송 정보를 모두 입력해주세요! 🖤",
    "chk_pay_now": "결제하기",
    "chk_success_msg": "결제 처리가 완료되었습니다! 즐거운 쇼핑 되세요! ♥",
    "chk_method_card": "신용카드 / Credit Card",
    "chk_method_linepay": "라인페이 / LINE Pay",
    "chk_method_paypay": "페이페이 / PayPay",
    "chk_method_konbini": "편의점 결제 / コンビニ決済",
    "chk_method_paypal": "페이팔 / PayPal",
    "chk_card_number": "카드 번호 입력",
    "chk_card_expiry": "만료일 (MM/YY)",
    "chk_card_cvv": "보안코드 (CVC/CVV)",
    "chk_card_name": "카드이름 입력항목",
    "chk_missing_card_fields": "신용 카드 정보를 모두 입력해주세요! 🖤"
  },
  EN: {
    "nav_all": "All",
    "nav_tops": "Clothing",
    "nav_outer": "Outerwear",
    "nav_acc": "Accessories",
    "nav_etc": "Goods",
    "marquee_msg": "⚡ TOO CUTE TOO COOL ⚡ FREE SHIPPING OVER $70 ⚡ NEW SEASON ARRIVALS ONLY AT IGUSA ⚡",
    "checkout": "Proceed to Checkout",
    "cart": "Shopping Cart 🛒",
    "cart_empty": "Your cart is empty. Pack some super cute gear! ˊᵕˋ",
    "add_to_cart": "Add to Cart",
    "quick_view": "Quick View",
    "description": "Description",
    "size": "Size",
    "curated_title": "♥ IGUSA CURATED HOT PICKS ✧",
    "all_products": "♥ IGUSA WEB SHOP CATALOG 🛒",
    "lookbook_title": "♥ LOOKBOOK HARMONIES",
    "lookbook_badge": "TOO CUTE!",
    "lookbook_subtitle": "⚡ INFINITE HARMONY LOOP ⚡",
    "newsletter_title": "Subscribe Newsletter",
    "newsletter_sub": "Enter your email to receive first-access alerts for IGUSA new season drops!",
    "newsletter_placeholder": "Your lovely email address...",
    "newsletter_btn": "Subscribe",
    "brand_story": "IGUSA BRAND STORY",
    "brand_desc": "IGUSA fuses Tokyo Harajuku's retro cyber decora street culture with Seoul's minimal mood, projecting 'TOO CUTE TOO COOL' energetic independent designer vibes. Find your layered playful palette in a dark urban landscape.",
    "shipping_notice": "Global Shipping Info",
    "shipping_desc": "Premium delivery guaranteed",
    "gift_notice": "Gift Edition Packaging",
    "gift_desc": "Includes cute sticker packs & ribbon wrap service",
    "secure_payment": "Secure Checkout Guaranteed",
    "secure_desc": "3D encryption payment system",
    "about_us": "ABOUT US",
    "customer_care": "CUSTOMER CARE",
    "insta_title": "♥ IGUSA INSTAGRAM 24/7",
    "follow": "Follow",
    "following": "Following ✓",
    "toast_add_cart": "Added to cart!",
    "toast_liked": "💖 Added to wishlist!",
    "toast_unliked": "Removed from wishlist.",
    "newsletter_joined": "Thank you for subscribing!",
    "newsletter_joined_msg": "A 10% welcome discount code is on its way to your lovely inbox! Thanks for joining IGUSA! ʚ(•”̮•)ɞ",
    "close": "Close",
    "free_shipping": "Free Shipping",
    
    // New localization keys
    "policy_info": "Policies & Info",
    "terms_of_service": "Terms of Service",
    "privacy_policy": "Privacy Policy",
    "shipping_policy": "Shipping Policy",
    "refund_policy": "Refund Policy",
    "customer_care_title": "Customer Care",
    "faq": "FAQ",
    "contact_us": "CONTACT US",
    "my_account": "MY ACCOUNT",
    "order_tracking": "ORDER TRACKING",
    "shop_now": "SHOP NOW",
    "follow_us": "FOLLOW US",
    "narrative_msg": "Heyyy angel... u NEED to discover the perfect blend of cute and cool with the IGUSA TOO CUTE TOO COOL collection. idk why but i feel like this is sooo u... like i literally couldn't stop thinking about it at 3am lol... it's giving harajuku energy but also that messy internet chaos vibe we used to be obsessed with?? like glitter everywhere, weird cute things, slightly unhinged but in a pretty way... idk it just feels like that moment when ur overdressed for no reason and everything feels a little magical and a little dramatic at the same time...",
    "club_joined_title": "CLUB IGUSA Welcome! ♥",
    "club_joined_desc": "Congratulations! You are officially registered as a newsletter subscriber. We've sent a secret online-only discount code to your email! Don't miss out and follow @igusa_official for first-access drops!",
    "view_more_insta": "View more on Instagram",
    "returns_notice": "Return & Exchange Info",
    "returns_desc": "Peace of mind guaranteed",
    "line_notice": "LINE Support Center",
    "line_desc": "24/7 Decora customer service",
    "demo_cart_title": "-- Demo Shopping Cart --",
    "demo_cart_tip": "💡 These are demo preloaded items. Click 'Add to Cart' on any item to add real-time customized items to your cart!",
    "total_amount": "Estimated Total",
    "quick_view_desc": "Designed with Harajuku Y2K Decora sensibilities, adding magical uniqueness to bright neon decora coordination. 100% premium cotton provides ultra-comfortable and cute fit.",
    "account_email": "Email Address",
    "account_password": "Password",
    "account_welcome_msg": "Wishing you a super special and lovely day! 💖",
    "account_cart_empty": "Your cart is empty.",
    "account_wish_empty_title": "No products in wishlist. ♡",
    "account_wish_empty_desc": "Tap the heart on items you love to save them here in real-time.",
    "chk_title": "CHECK OUT",
    "chk_payment_method": "Payment Method",
    "chk_shipping_title": "Shipping Info",
    "chk_last_name_label": "Last Name",
    "chk_first_name_label": "First Name",
    "chk_phone_label": "Contact Info",
    "chk_zip_label": "Zip Code",
    "chk_address_label": "Address",
    "chk_detail_label": "Apartment, suite, unit etc.",
    "chk_shipping_method": "Shipping Method",
    "chk_shipping_address_prompt": "Please enter your shipping address to see available methods.",
    "chk_save_info": "Save my information for faster checkout",
    "chk_agree_disclaimer": "(By checking out, you agree to create a Shop account in accordance with Shop's Terms of Service and Privacy Policy)",
    "chk_coupon_label": "Enter Coupon or Discount Code",
    "chk_coupon_apply": "Apply",
    "chk_coupon_invalid": "Invalid promo code! Please check again.",
    "chk_coupon_success": "10% promo discount applied! ʚ(•”̮•)ɞ",
    "chk_order_total": "Total Amount",
    "chk_subtotal": "Subtotal",
    "chk_discount": "Discount",
    "chk_shipping_fee_label": "Shipping Fee",
    "chk_shipping_rule": "💡 FREE SHIPPING OVER 100,000\nInternational shipping fees vary depending on the shipping address and will be billed separately afterwards.",
    "chk_shipping_free": "Free Shipping Applied! 🚚",
    "chk_shipping_paid": "Standard Shipping Applied",
    "chk_missing_fields": "Please enter all shipping details correctly! 🖤",
    "chk_pay_now": "Complete Checkout",
    "chk_success_msg": "Your payment has been successfully processed! Hope you love your new Decora items! ♥",
    "chk_method_card": "Credit Card",
    "chk_method_linepay": "LINE Pay",
    "chk_method_paypay": "PayPay",
    "chk_method_konbini": "CVS Payment (Conbini)",
    "chk_method_paypal": "PayPal",
    "chk_card_number": "Card Number",
    "chk_card_expiry": "Expiration Date (MM/YY)",
    "chk_card_cvv": "Security Code (CVC/CVV)",
    "chk_card_name": "Cardholder Name",
    "chk_missing_card_fields": "Please fill in all credit card fields! 🖤"
  },
  JA: {
    "nav_all": "すべて",
    "nav_tops": "衣類",
    "nav_outer": "アウター",
    "nav_acc": "アクセサリー",
    "nav_etc": "雑貨",
    "marquee_msg": "⚡ TOO CUTE TOO COOL ⚡ 10,000円以上で送料無料 ⚡ NEW SEASON ARRIVALS ONLY AT IGUSA ⚡",
    "checkout": "チェックアウトする",
    "cart": "ショッピングカート 🛒",
    "cart_empty": "カートは空です。とっても可愛いお洋服を追加してみましょう！ ˊᵕˋ",
    "add_to_cart": "カートに入れる",
    "quick_view": "クイックビュー詳細",
    "description": "商品説明",
    "size": "サイズ",
    "curated_title": "♥ IGUSAキュレート注目アイテム ✧",
    "all_products": "♥ IGUSAウェブショップカタログ 🛒",
    "lookbook_title": "♥ LOOKBOOK HARMONIES",
    "lookbook_badge": "TOO CUTE!",
    "lookbook_subtitle": "⚡ 無限ハーモニーループ ⚡",
    "newsletter_title": "メルマガ購読",
    "newsletter_sub": "メールアドレスを入力して、IGUSAの新作ドロップ情報を一番早く受け取ろう！",
    "newsletter_placeholder": "あなたの愛らしいメールアドレス...",
    "newsletter_btn": "購読する",
    "brand_story": "IGUSAブランドストーリー",
    "brand_desc": "IGUSAは東京原宿のレトロサイバーデコラ・ストリートカルチャーとソウルのミニマルムードを融合させ、「TOO CUTE TOO COOL」なエネルギーを吹き込むインディペンデントデザイナーブランドレーベルです。暗い都会の中で、あなただけのレイヤードパレットを見つけてください。",
    "shipping_notice": "国際配送のご案内",
    "shipping_desc": "ハイクオリティスピード配送",
    "gift_notice": "ギフトパッケージ",
    "gift_desc": "可愛いステッカーパック＆リボンラッピング",
    "secure_payment": "セキュリティ決済",
    "secure_desc": "3D暗号化決済システム",
    "about_us": "ABOUT US",
    "customer_care": "カスタマーケア",
    "insta_title": "♥ IGUSA インスタ 24/7",
    "follow": "フォローする",
    "following": "フォロー中 ✓",
    "toast_add_cart": "カートに追加されました！",
    "toast_liked": "💖 お気に入りに追加されました！",
    "toast_unliked": "お気に入りから削除されました。",
    "newsletter_joined": "ご講読ありがとうございます！",
    "newsletter_joined_msg": "ご入力いただいたメールアドレスに10%ウェルカムクーポンコードをお送りします！IGUSAと一緒に過ごしていただき感謝です。 ʚ(•”̮•)ɞ",
    "close": "閉じる",
    "free_shipping": "送料無料",
    
    // New localization keys
    "policy_info": "各種ポリシー",
    "terms_of_service": "利用規約",
    "privacy_policy": "個人情報保護方針",
    "shipping_policy": "配送ポリシー",
    "refund_policy": "返金ポリシー",
    "customer_care_title": "カスタマーケア",
    "faq": "よくある質問 FAQ",
    "contact_us": "お問い合せ Contact",
    "my_account": "マイアカウント My Account",
    "order_tracking": "注文追跡 Tracking",
    "shop_now": "ショップに移動",
    "follow_us": "フォローする",
    "narrative_msg": "ねえ、アメジストのエンジェルちゃん… カワイイとクールが完ペキにミックスされたIGUSAの『TOO CUTE TOO COOL』コレクションはもうチェックした？なぜかこれが超あなたに似合う気がして、夜中の3時までずっと考えてたんだよね（笑） 原宿のエネルギーを感じさせつつ、私たちが昔ハマってた、あの少し混沌としたサイバーカワイイ感情を呼び起こす感じ？ あちこちキラキラしていて、ちょっと変わったカワイイ雑貨とか、少し不気味なほど愛らしい… みたいな？ 何の理由もなく特別に着飾った瞬間のように、すべての時間がちょっと魔法のようで、ちょっとドラマチックに感じられるそんな特別なムードだよ…",
    "club_joined_title": "CLUB IGUSA おめでとう！♥",
    "club_joined_desc": "おめでとうございます！正式にニュースレターの読者になりました。ご入力いただいたアドレスへ、シークレットオンライン限定クーポンコードをお送りします！インラインの最新情報をインスタで最速でチェックしてください！",
    "view_more_insta": "インスタグラムでもっと見る",
    "returns_notice": "返品・交換について",
    "returns_desc": "安心の交換対応保証",
    "line_notice": "LINE公式サポート",
    "line_desc": "24/7 デコラカスタマー対応",
    "demo_cart_title": "-- デモショッピングカート --",
    "demo_cart_tip": "💡 こちらはデモ用のプリロード商品です。お気に入りの商品の『カートに入れる』ボタンを押すだけで、リアルタイムで商品が追加されます！",
    "total_amount": "お支払い予定総額",
    "quick_view_desc": "原宿Y2Kデコラ感性でデザインされ、弾けるネオンカラーコーディネートに魔法のような特別さを加えます。100%プレミアムコットン素材で、柔らかく存在感のあるシルエットをお届けします。",
    "account_email": "メールアドレス",
    "account_password": "パスワード",
    "account_welcome_msg": "今日も特別で愛らしい一日を過ごせますように！ 💖",
    "account_cart_empty": "カートは空です。",
    "account_wish_empty_title": "お気に入りに追加された商品がありません。 ♡",
    "account_wish_empty_desc": "お気に入りの商品のハートをタップすると、ここにリアルタイムで記録されます。",
    "chk_title": "CHECK OUT / 注文決済",
    "chk_payment_method": "お支払い方法",
    "chk_shipping_title": "配送先情報",
    "chk_last_name_label": "姓",
    "chk_first_name_label": "名",
    "chk_phone_label": "連絡先",
    "chk_zip_label": "郵便番号",
    "chk_address_label": "お届先住所",
    "chk_detail_label": "建物名・部屋番号",
    "chk_shipping_method": "配送方法",
    "chk_shipping_address_prompt": "使用可能な配送方法を表示するには、配送先住所を入力してください。",
    "chk_save_info": "次回以降の手続きを迅速にするために情報を保存する",
    "chk_agree_disclaimer": "(支払いを完了すると、ショップ規約および個人情報保護方針に従って、ショップアカウント作成に同意したものとみなされます)",
    "chk_coupon_label": "クーポン及び割引コードの入力項目",
    "chk_coupon_apply": "適用",
    "chk_coupon_invalid": "無効なクーポンコードです！申し訳ありません。",
    "chk_coupon_success": "10%割引クーポンが正しく適用されました！ ʚ(•”̮•)ɞ",
    "chk_order_total": "合計支払額",
    "chk_subtotal": "商品の小計金額",
    "chk_discount": "割引額",
    "chk_shipping_fee_label": "配送料",
    "chk_shipping_rule": "💡 FREE SHIPPING OVER 100,000\n海外配送料は配送先住所によって異なり、後日別途請求されます。",
    "chk_shipping_free": "配送料無料が適用されました！ 🚚",
    "chk_shipping_paid": "一般運送配送料加算（1万円未満）",
    "chk_missing_fields": "正しい配送先情報をすべて入力してください！ 🖤",
    "chk_pay_now": "決済を完了する",
    "chk_success_msg": "決済処理が完了しました！ハッピーなお買い物をお楽しみください！ ♥",
    "chk_method_card": "クレジットカード",
    "chk_method_linepay": "LINE Pay",
    "chk_method_paypay": "PayPay",
    "chk_method_konbini": "コンビニ決済 (Conbini)",
    "chk_method_paypal": "PayPal",
    "chk_card_number": "カード番号入力",
    "chk_card_expiry": "有効期限 (MM/YY)",
    "chk_card_cvv": "セキュリティコード (CVC/CVV)",
    "chk_card_name": "カード名義入力",
    "chk_missing_card_fields": "クレジットカード情報をすべて入力してください！ 🖤"
  }
};

export default function App() {
  // Products catalogs with fallback and dynamic live parsed images
  const [products, setProducts] = useState<Product[]>(INITIAL_PRODUCTS);
  const [curatedItems, setCuratedItems] = useState<Product[]>(CURATED_ITEMS);
  const [lookbookImages, setLookbookImages] = useState<string[]>(LOOKBOOK_IMAGES);
  const [instagramPosts, setInstagramPosts] = useState<{ url: string }[]>(SOCIAL_GRID);

  // Currency & Language settings
  const [currency, setCurrency] = useState<"KRW" | "USD" | "JPY">("KRW");
  const [language, setLanguage] = useState<"KO" | "EN" | "JA">("KO");
  const [isCurrencyDropdownOpen, setIsCurrencyDropdownOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  // Translation helpers
  const t = (key: string) => {
    return translations[language][key] || translations["KO"][key] || key;
  };

  // Pricing format converting based on currency
  const formatPrice = (priceInKrw: number | undefined) => {
    if (!priceInKrw) return "";
    if (currency === "USD") {
      // 1 USD = 1400 KRW
      const usdPrice = priceInKrw / 1400;
      return `$${usdPrice.toFixed(2)}`;
    } else if (currency === "JPY") {
      // 100 JPY = 900 KRW => 1 JPY = 9 KRW
      const jpyPrice = Math.round(priceInKrw / 9);
      return `¥${jpyPrice.toLocaleString()}`;
    } else {
      return `₩ ${priceInKrw.toLocaleString("ko-KR")}`;
    }
  };

  // States
  const [liveImages, setLiveImages] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [likedProducts, setLikedProducts] = useState<Record<string, boolean>>({});
  const [showNewsletterModal, setShowNewsletterModal] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isFollowed, setIsFollowed] = useState(false);
  const [followersCount, setFollowersCount] = useState(37000);
  const [quickViewSize, setQuickViewSize] = useState<string>("M");
  const [catalogExpanded, setCatalogExpanded] = useState(false);
  const [sparkles, setSparkles] = useState<{ id: number; x: number; y: number }[]>([]);
  const [successToast, setSuccessToast] = useState<string | null>(null);

  // Checkout modal states
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [checkoutLastName, setCheckoutLastName] = useState("");
  const [checkoutFirstName, setCheckoutFirstName] = useState("");
  const [checkoutPhone, setCheckoutPhone] = useState("");
  const [checkoutZip, setCheckoutZip] = useState("");
  const [checkoutAddress, setCheckoutAddress] = useState("");
  const [checkoutDetail, setCheckoutDetail] = useState("");
  const [checkoutPayment, setCheckoutPayment] = useState<"card" | "linepay" | "paypay" | "konbini" | "paypal">("card");
  const [checkoutCardNum, setCheckoutCardNum] = useState("");
  const [checkoutCardExpiry, setCheckoutCardExpiry] = useState("");
  const [checkoutCardCvv, setCheckoutCardCvv] = useState("");
  const [checkoutCardHolderName, setCheckoutCardHolderName] = useState("");
  const [checkoutSave, setCheckoutSave] = useState(false);
  const [checkoutCoupon, setCheckoutCoupon] = useState("");
  const [checkoutDiscount, setCheckoutDiscount] = useState(0); // discount percent like 10
  const [checkoutCouponApplied, setCheckoutCouponApplied] = useState(false);

  // Automatically update currency when language changes
  useEffect(() => {
    if (language === "JA") {
      setCurrency("JPY");
    } else if (language === "EN") {
      setCurrency("USD");
    } else if (language === "KO") {
      setCurrency("KRW");
    }
  }, [language]);

  // Scraper Connection
  useEffect(() => {
    fetch("/api/igusa-data")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.images && data.images.length > 0) {
          console.log("Successfully connected to live 193igusa images via API:", data.images);
          setLiveImages(data.images);
          
          // Match dynamic Shopify CDN images if available
          const rawImages = data.images;
          
          // Helper to check if string contains keywords
          const findImage = (keywords: string[], fallback: string) => {
            const matched = rawImages.find((img: string) => 
              keywords.some(kw => img.toLowerCase().includes(kw))
            );
            return matched || fallback;
          };

          // Map to INITIAL_PRODUCTS
          const updated = INITIAL_PRODUCTS.map((prod, idx) => {
            let img = prod.image;
            if (prod.id === "candy-shop-tee") {
              img = findImage(["i_1_", "ame", "baby", "t-shirt"], rawImages[idx % rawImages.length]);
            } else if (prod.id === "cool-gal-outer") {
              img = findImage(["g_1_", "rabbit-t-shirt-コピー", "cream", "rabbit"], rawImages[(idx + 1) % rawImages.length]);
            } else if (prod.id === "messy-internet-tee") {
              img = findImage(["d_1_", "chakra-lace", "lococo", "lace-rib"], rawImages[(idx + 2) % rawImages.length]);
            } else if (prod.id === "starboy-knit") {
              img = findImage(["a_1_", "patch-zip-hoodie", "bear-zip", "sugar-patch"], rawImages[(idx + 3) % rawImages.length]);
            } else if (prod.id === "harajuku-dream-shorts") {
              img = findImage(["r_1_", "rose-skirt", "rose-mesh", "mesh-midi"], rawImages[(idx + 4) % rawImages.length]);
            } else if (prod.id === "y2k-layered-socks") {
              img = findImage(["motka2_colorway_a_copy", "love-song-knee-high", "courage", "high"], rawImages[(idx + 5) % rawImages.length]);
            }
            return { ...prod, image: img };
          });
          setProducts(updated);

          // Map to CURATED_ITEMS
          const updatedCurated = CURATED_ITEMS.map((prod, idx) => {
            let img = prod.image;
            if (prod.id === "candy-shop-top-curated") {
              img = findImage(["e_1_copy", "bishoujo", "美少女"], rawImages[idx % rawImages.length]);
            } else if (prod.id === "melody-bag-curated") {
              img = findImage(["photoroom_002", "melody", "bag", "tote"], rawImages[(idx + 1) % rawImages.length]);
            }
            return { ...prod, image: img };
          });
          setCuratedItems(updatedCurated);

          // Map lookbook slides
          const premiumLookbook = rawImages.slice(0, 7);
          if (premiumLookbook.length >= 4) {
            setLookbookImages(premiumLookbook);
          }

          // Map Instagram previews
          const mappedSocial = rawImages.slice(10, 18).map((img: string) => ({ url: img }));
          if (mappedSocial.length >= 8) {
            setInstagramPosts(mappedSocial);
          } else if (rawImages.length >= 8) {
            setInstagramPosts(rawImages.slice(0, 8).map((img: string) => ({ url: img })));
          }
        }
      })
      .catch((err) => console.log("CORS or Endpoint error. Falling back to static catalog assets:", err));
  }, []);

  // Filtered products list
  const filteredProducts = selectedCategory === "all" 
    ? products 
    : selectedCategory === "sale"
      ? products.filter(p => !!p.originalPrice || p.badge?.text?.toUpperCase() === "SALE")
      : products.filter(p => p.category === selectedCategory);

  // Sparkle generator clicking interaction
  const triggerSparkles = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();
    setSparkles(prev => [...prev, { id, x, y }]);
    setTimeout(() => {
      setSparkles(prev => prev.filter(s => s.id !== id));
    }, 1000);
  };

  // Toast notifier helper
  const showToast = (message: string) => {
    setSuccessToast(message);
    setTimeout(() => setSuccessToast(null), 3000);
  };

  // Add Item to Cart
  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        showToast(`${product.name} ${language === "KO" ? "수량이 추가되었습니다! 🛍️" : language === "EN" ? "quantity updated! 🛍️" : "数量が追加されました！ 🛍️"}`);
        return prev.map(item => 
          item.product.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
      showToast(`${product.name} ${language === "KO" ? "장바구니에 담겼습니다! ✨" : language === "EN" ? "added to cart! ✨" : "カートに登録されました！ ✨"}`);
      return [...prev, { id: product.id, product, quantity: 1 }];
    });
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = item.quantity + delta;
        return newQty > 0 ? { ...item, quantity: newQty } : item;
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
    showToast(language === "KO" ? "장바구니에서 상품이 삭제되었습니다." : language === "EN" ? "Item removed from cart." : "カートから商品が削除されました。");
  };

  const toggleLike = (id: string) => {
    setLikedProducts(prev => {
      const current = !!prev[id];
      if (!current) {
        showToast(language === "KO" ? "관심 상품에 등록되었습니다! ♡" : language === "EN" ? "Added to wishlist! ♡" : "お気に入りに追加されました！ ♡");
      }
      return { ...prev, [id]: !current };
    });
  };

  const handleFollowClick = () => {
    if (!isFollowed) {
      setIsFollowed(true);
      setFollowersCount(prev => prev + 1);
      showToast(language === "KO" ? "팔로우해주셔서 감사합니다! ♥" : language === "EN" ? "Thank you for following! ♥" : "フォローいただきありがとうございます！ ♥");
    } else {
      setIsFollowed(false);
      setFollowersCount(prev => prev - 1);
    }
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes("@")) {
      showToast(language === "KO" ? "올바른 이메일 주소를 입력해 주세요!" : language === "EN" ? "Please enter a valid email address!" : "正しいメールアドレスを入力してください！");
      return;
    }
    setShowNewsletterModal(true);
    setNewsletterEmail("");
  };

  // Calculate cart states
  const totalAmount = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-soft-bg relative overflow-x-hidden p-0 m-0 select-none">
      {/* Dreamy mouse move particle sparkle trail */}
      <SparkleTrail />
      
      
      {/* Toast Notification Banner */}
      <AnimatePresence>
        {successToast && (
          <motion.div 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 16 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-neutral-dark text-white px-6 py-3 rounded-lg border-2 border-brand-magenta flex items-center gap-2 font-mono text-sm y2k-shadow"
          >
            <Sparkle className="w-4 height-4 text-cyber-yellow animate-spin" />
            <span>{successToast}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Rainbow Stars Decoration */}
      <div className="absolute top-12 left-6 pointer-events-none w-10 h-10 text-brand-magenta select-none hover:rotate-12 transition">
        <Sparkle className="w-8 h-8 opacity-70" />
      </div>
      <div className="absolute top-1/4 right-[5%] pointer-events-none w-10 h-10 text-[#FF5C00] select-none scale-105">
        <Sparkle className="w-6 h-6 opacity-60" />
      </div>
      <div className="absolute top-3/4 left-[3%] pointer-events-none w-10 h-10 text-slime-green select-none">
        <Sparkle className="w-10 h-10 opacity-70" />
      </div>

      {/* Top Banner Ribbon - Marquee */}
      <div className="w-full bg-[#121212] py-2 text-white overflow-hidden border-b-3 border-black select-none z-30 relative">
        <div className="flex whitespace-nowrap animate-marquee">
          <span className="font-mono text-xs font-bold uppercase tracking-widest flex items-center mx-4 select-none">
            {t("marquee_msg")}
          </span>
          <span className="font-mono text-xs font-bold uppercase tracking-widest flex items-center mx-4 select-none">
            {t("marquee_msg")}
          </span>
        </div>
      </div>

      {/* Main Header Bar */}
      <header className="sticky top-0 z-40 bg-white border-b-3 border-black shadow-[0_4px_0_0_#121212] px-4 md:px-8 py-3 select-none">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Menu Hamburger */}
          <button 
            id="mobile-drawer-button"
            className="p-2 border-2 border-black rounded-lg y2k-shadow bg-white hover:bg-slate-50 y2k-btn-push block cursor-pointer"
            onClick={() => setIsDrawerOpen(true)}
          >
            <Menu className="w-6 h-6 text-black" />
          </button>

          {/* Central Logo */}
          <h1 className="flex items-center gap-1 select-none">
            <div className="transform -rotate-1 hover:rotate-0 transition duration-300">
              <img 
                src={logoImage} 
                alt="iG3 Logo" 
                className="h-10 md:h-12 object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
          </h1>

          {/* Cart Icon trigger */}
          <button 
            id="cart-trigger-button"
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 border-2 border-black rounded-lg y2k-shadow bg-white hover:bg-slate-50 y2k-btn-push cursor-pointer"
          >
            <ShoppingBag className="w-6 h-6 text-black" />
            <span className="absolute -top-2 -right-2 bg-brand-magenta text-white font-sans text-xs font-black min-w-[20px] h-[20px] rounded-full flex items-center justify-center border-2 border-black shadow-[1px_1px_0_0_#000] scale-105">
              {cartItemCount || 3}
            </span>
          </button>

        </div>
      </header>

      {/* Core Page Scope Container */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-8 select-none">
        
        {/* Banner Hero Photo Frame */}
        <section className="mb-12 relative flex flex-col items-center">
          
          {/* New Drop Sticker overlay */}
          <div className="absolute top-0 right-4 md:right-[15%] z-20 transform rotate-12 bg-cyber-yellow text-black border-3 border-black p-2 px-4 shadow-[4px_4px_0_0_#000] font-mono text-sm font-black tracking-wider hover:scale-110 active:scale-95 duration-100 animate-pulse">
            ★ NEW DROP! ★
          </div>

          <div className="w-full max-w-2xl bg-white border-3 border-black p-3 md:p-4 y2k-shadow-lg flex flex-col items-center relative">
            <div className="w-full h-[320px] md:h-[480px] overflow-hidden border-2 border-black bg-purple-50 flex justify-center items-center relative">
              <img 
                src={lookbookImages[4] || "https://cdn.shopify.com/s/files/1/0825/4491/8821/files/DSC04884.jpg?v=1765523103"}
                alt="26 SS Collection Main Model" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              {/* Cute heart outline watermarked */}
              <div className="absolute inset-x-2 bottom-2 bg-white/80 backdrop-blur-xs border-2 border-black p-2 flex items-center justify-between">
                <span className="font-mono text-xs md:text-sm font-black text-brand-magenta">♥ DIGITAL COUTURE DECORA</span>
                <span className="bg-[#93000a] text-white text-[10px] px-1.5 py-0.5 rounded border border-black font-mono">LIVE MATCHED</span>
              </div>
            </div>

            {/* Collection Sticker Box overlay */}
            <div className="absolute bottom-6 left-4 md:left-8 bg-white border-3 border-black p-3 md:p-4 y2k-shadow max-w-[200px] md:max-w-[260px] transform rotate-[-2deg] flex flex-col gap-2 hover:rotate-0 duration-200">
              <h2 className="font-display font-extrabold text-[16px] md:text-lg leading-tight tracking-tight text-black border-b-2 border-black pb-1 uppercase">
                26 S/S COLLECTION<br/>TOO CUTE TOO COOL
              </h2>
              <button 
                id="shop-collection-button"
                className="w-full bg-[#121212] hover:bg-brand-magenta text-white font-mono text-xs font-black py-2 rounded-sm border-2 border-black y2k-shadow y2k-btn-push uppercase cursor-pointer"
                onClick={() => {
                  showToast("컬렉션을 둘러보세요! ✨");
                  const element = document.getElementById("catalog-section");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
              >
                SHOP NOW
              </button>
            </div>

          </div>
        </section>

        {/* Brand Narrative Green Board Chat Box */}
        <section className="mb-12 max-w-2xl mx-auto">
          <div className="bg-slime-green border-3 border-black p-5 relative y2k-shadow transform rotate-[0.5deg]">
            {/* Hard retro border highlight pin */}
            <div className="absolute top-2 left-2 w-3 h-3 bg-red-500 rounded-full border border-black"></div>
            <div className="absolute top-2 right-2 w-3 h-3 bg-blue-500 rounded-full border border-black"></div>
            
            <p className="font-sans text-xs md:text-sm leading-relaxed text-[#161e00] font-medium pt-2 select-text">
              Heyyy angel... u NEED to discover the perfect blend of cute and cool with the <span className="font-bold underline text-brand-magenta">IGUSA TOO CUTE TOO COOL collection</span>. idk why but i feel like this is sooo u... like i literally couldn't stop thinking about it at 3am lol... it's giving harajuku energy but also that messy internet chaos vibe we used to be obsessed with?? like glitter everywhere, weird cute things, slightly unhinged but in a pretty way... idk it just feels like that moment when ur overdressed for no reason and everything feels a little magical and a little dramatic at the same time...
            </p>
          </div>
        </section>

        {/* Category Navigation Filter Menu */}
        <section id="catalog-section" className="mb-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              { id: "all", label: "ALL" },
              { id: "outer", label: "OUTER" },
              { id: "tops", label: "TOPS" },
              { id: "bottoms", label: "BOTTOMS" },
              { id: "bag", label: "BAG" },
              { id: "acc", label: "ACCESSORIES" },
              { id: "sale", label: "SALE" }
            ].map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  id={`cat-button-${cat.id}`}
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    showToast(`${cat.label} 둘러보기 💫`);
                  }}
                  className={`px-4 py-1.5 font-mono text-xs font-extrabold tracking-widest border-2 border-black rounded transition duration-150 y2k-btn-push transform ${
                    active 
                      ? "bg-brand-magenta text-white shadow-[2px_2px_0_0_#121212] -translate-x-[1px] -translate-y-[1px]" 
                      : "bg-white text-black y2k-shadow hover:bg-slate-50"
                  } cursor-pointer`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </section>

        {/* 6 Products Grid Layout */}
        <section className="mb-12">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {filteredProducts.map((p) => {
              const isLiked = !!likedProducts[p.id];
              return (
                <article 
                  key={p.id}
                  className="bg-white border-3 border-black p-2 md:p-3 y2k-shadow flex flex-col justify-between group hover:-translate-y-1 transition duration-200"
                >
                  {/* Photo Box */}
                  <div className={`w-full aspect-[4/5] border-2 border-black relative ${p.bgColor || "bg-pink-50"} overflow-hidden`}>
                    
                    {/* Floating stickers tag if present */}
                    {p.badge && (
                      <span className={`absolute top-2 left-2 z-10 text-[9px] md:text-xs font-mono font-black border-2 border-black px-2 py-0.5 rounded shadow-[1px_1px_0_0_#121212] transform -rotate-3 ${p.badge.bgColor}`}>
                        {p.badge.text}
                      </span>
                    )}

                    <img 
                      src={p.image} 
                      alt={p.name}
                      onClick={() => setSelectedProduct(p)}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300 cursor-pointer"
                      referrerPolicy="no-referrer"
                    />

                    {/* Quick overlay indicator */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition flex items-center justify-center">
                      <button 
                        onClick={() => setSelectedProduct(p)}
                        className="opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition duration-200 bg-white border-2 border-black px-3 py-1 text-[11px] font-mono font-black y2k-shadow uppercase"
                      >
                        ⚡ QUICK VIEW
                      </button>
                    </div>

                  </div>

                  {/* Pricing and Action row */}
                  <div className="mt-3 flex flex-col gap-2">
                    
                    {/* product meta */}
                    <div className="border-b-2 border-dashed border-black pb-1">
                      <h3 className="font-display font-extrabold text-[13px] md:text-[15px] text-black tracking-tight line-clamp-1">
                        {p.name}
                      </h3>
                      <p className="font-mono text-xs md:text-sm font-black text-brand-magenta mt-0.5">
                        {p.originalPrice ? (
                          <>
                            <span className="line-through text-gray-400 mr-2">{formatPrice(p.originalPrice)}</span>
                            <span>{formatPrice(p.price)}</span>
                          </>
                        ) : (
                          formatPrice(p.price)
                        )}
                      </p>
                    </div>

                    {/* Action buttons boxes */}
                    <div className="grid grid-cols-5 gap-2">
                      
                      {/* Left: Add to cart */}
                      <button 
                        id={`btn-add-${p.id}`}
                        onClick={() => addToCart(p)}
                        className="col-span-3 bg-slime-green hover:bg-[#bce6aa] font-mono text-[10px] md:text-[11px] font-black py-2 rounded-sm border-2 border-black y2k-shadow y2k-btn-push text-black flex items-center justify-center gap-1 cursor-pointer"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        {t("add_to_cart")}
                      </button>

                      {/* Right: Heart Like icon */}
                      <button 
                        id={`btn-like-${p.id}`}
                        onClick={() => toggleLike(p.id)}
                        className={`col-span-2 py-2 rounded-sm border-2 border-black y2k-shadow y2k-btn-push flex items-center justify-center transition duration-150 cursor-pointer ${
                          isLiked 
                            ? "bg-[#ff96e0] text-black" 
                            : "bg-white hover:bg-rose-50 text-black"
                        }`}
                      >
                        <Heart className={`w-4 h-4 ${isLiked ? "fill-rose-600 stroke-rose-600" : ""}`} />
                      </button>

                    </div>

                  </div>
                </article>
              );
            })}
          </div>

          {/* VIEW ALL Toggler Ribbon */}
          <div className="w-full flex justify-center mt-8">
            <button
              id="catalog-toggle-more-button"
              onClick={() => {
                setCatalogExpanded(!catalogExpanded);
                showToast(catalogExpanded ? "기본 상품 보기" : "추가 상품을 로드했습니다! 💖");
                if (!catalogExpanded) {
                  // Add more look items dynamically
                  setProducts(prev => {
                    if (prev.length > 6) return INITIAL_PRODUCTS;
                    return [
                      ...prev,
                      {
                        id: "princess-tee",
                        name: "Life is Magical Sailor Dress Mint",
                        price: 169000,
                        image: "https://cdn.shopify.com/s/files/1/0825/4491/8821/files/P_1_4ec4557c-f354-4ed7-b74d-c55a4ab65d39.png?v=1777611678",
                        bgColor: "bg-fuchsia-100",
                        category: "tops"
                      },
                      {
                        id: "loose-decora-arm",
                        name: "Star Panty Layered Shorts",
                        price: 106000,
                        image: "https://cdn.shopify.com/s/files/1/0825/4491/8821/files/S_1_ef85d204-0866-4817-a1f4-733b7823f899.png?v=1777612185",
                        badge: { text: "Y2K", bgColor: "bg-emerald-300" },
                        bgColor: "bg-indigo-100",
                        category: "bottoms"
                      },
                      {
                        id: "cargo-cyber-skirt",
                        name: "Love Studded Leather Belt (Purple)",
                        price: 87000,
                        image: "https://cdn.shopify.com/s/files/1/0825/4491/8821/files/Photoroom_001_20251110_014246.png?v=1764003711",
                        bgColor: "bg-amber-100",
                        category: "acc"
                      }
                    ];
                  });
                } else {
                  setProducts(INITIAL_PRODUCTS);
                }
              }}
              className="px-6 py-2 border-3 border-black y2k-shadow bg-white text-black font-mono text-xs md:text-sm font-black tracking-widest hover:bg-slate-50 y2k-btn-push flex items-center gap-1 cursor-pointer"
            >
              <span>{catalogExpanded ? "VIEW LESS" : "VIEW ALL"}</span>
              <ChevronDown className={`w-4 h-4 transition duration-200 ${catalogExpanded ? "rotate-180" : ""}`} />
            </button>
          </div>

        </section>

        {/* Curated Spotlight Banner Header */}
        <section className="mb-12">
          <div className="w-full flex items-center justify-between border-b-3 border-dashed border-black pb-2 mb-6">
            <h2 className="font-display font-extrabold text-lg md:text-2xl text-black flex items-center gap-1 leading-none uppercase">
              <span className="inline-block w-4 h-4 rounded-full bg-brand-magenta animate-ping"></span>
              CURATED ITEMS
            </h2>
            <span className="font-mono text-xs font-black text-brand-magenta bg-white border-2 border-black p-1 px-2 y2k-shadow-primary rotate-2">
              BEST PICKS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {curatedItems.map((cur) => (
              <div 
                key={cur.id}
                className="bg-white border-3 border-black p-3 y2k-shadow flex items-center gap-4 group hover:-translate-y-0.5 transition duration-200"
              >
                {/* Square thumbnail left */}
                <div className={`w-[120px] h-[150px] shrink-0 border-2 border-black overflow-hidden relative ${cur.bgColor || "bg-emerald-50"}`}>
                  <img 
                    src={cur.image} 
                    alt={cur.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* description right */}
                <div className="flex flex-col flex-1 justify-between h-[150px] py-1 select-none">
                  <div>
                    <span className="font-mono text-[9px] font-black tracking-wider text-black bg-[#A5FF6C] px-2 py-0.5 rounded-sm border border-black max-w-max uppercase">
                      Spotlight
                    </span>
                    <h3 className="font-display font-extrabold text-sm md:text-base text-black mt-2 leading-snug">
                      {cur.name}
                    </h3>
                    <p className="font-mono text-xs font-semibold text-gray-500 mt-1 uppercase">
                      Category: {cur.category}
                    </p>
                  </div>

                  <div className="flex items-center justify-between border-t-2 border-dashed border-black pt-2">
                    <span className="font-mono text-[13px] md:text-sm font-black text-brand-magenta">
                      {formatPrice(cur?.price)}
                    </span>
                    
                    <button 
                      id={`btn-curated-add-${cur.id}`}
                      onClick={() => addToCart(cur)}
                      className="bg-slime-green hover:bg-[#bce6aa] font-mono text-[10px] md:text-xs font-black p-1 px-3 rounded border-2 border-black shadow-[2px_2px_0_0_#121212] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0_0_#121212] cursor-pointer"
                    >
                      {t("add_to_cart")} +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Infinite Looping Lookbook Marquee Section */}
        <section className="mb-12 overflow-hidden">
          <div className="w-full flex items-center justify-between pb-2 mb-4 select-none">
            <h2 className="font-display font-extrabold text-base md:text-lg text-black uppercase flex items-center gap-1.5">
              {t("lookbook_title")} <span className="text-[10px] bg-brand-magenta text-white px-1.5 py-0.5 font-mono animate-pulse">{t("lookbook_badge")}</span>
            </h2>
            <span className="font-mono text-[11px] text-gray-400">{t("lookbook_subtitle")}</span>
          </div>
          
          <div className="w-full bg-[#7B2CBF] py-6 overflow-hidden border-3 border-black select-none relative y2k-shadow-lg flex">
            {/* The infinite scrolling wrapper */}
            <div className="flex w-max gap-4 animate-marquee hover:[animation-play-state:paused] cursor-grab">
              {/* First Track of 7 Images */}
              {MARQUEE_IMAGES.map((src, i) => (
                <div 
                  key={`marquee-track1-${i}`}
                  className="w-[180px] md:w-[234px] shrink-0 aspect-square border-2 border-black bg-white hover:bg-candy-pink relative rounded-lg overflow-hidden shadow-[2px_2px_0_0_#FFF000] flex items-center justify-center p-4 hover:scale-105 transition duration-200 cursor-pointer"
                  onClick={() => {
                    showToast(`Harajuku Cutie Look #${i+1} 💝`);
                  }}
                >
                  <img 
                    src={src} 
                    alt={`Lookbook model cutout ${i+1}`} 
                    className="w-full h-full object-contain filter drop-shadow-[2px_2px_0px_rgba(173,0,156,0.25)]"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute bottom-1 right-1 bg-[#121212] text-white text-[8px] font-mono font-bold px-1 py-0.5 rounded border border-white">
                    LOOK_0{i+1}
                  </span>
                </div>
              ))}
              {/* Second Track of 7 Images for Seamless Hand-off */}
              {MARQUEE_IMAGES.map((src, i) => (
                <div 
                  key={`marquee-track2-${i}`}
                  className="w-[180px] md:w-[234px] shrink-0 aspect-square border-2 border-black bg-white hover:bg-candy-pink relative rounded-lg overflow-hidden shadow-[2px_2px_0_0_#FFF000] flex items-center justify-center p-4 hover:scale-105 transition duration-200 cursor-pointer"
                  onClick={() => {
                    showToast(`Harajuku Cutie Look #${i+1} 💝`);
                  }}
                >
                  <img 
                    src={src} 
                    alt={`Lookbook model cutout duplicate ${i+1}`} 
                    className="w-full h-full object-contain filter drop-shadow-[2px_2px_0px_rgba(173,0,156,0.25)]"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute bottom-1 right-1 bg-[#121212] text-white text-[8px] font-mono font-bold px-1 py-0.5 rounded border border-white">
                    LOOK_0{i+1}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Custom IG/Instagram Embed Frame Block */}
        <section className="mb-12">
          
          {/* Header Profile Info banner */}
          <div className="bg-white border-3 border-black p-4 y2k-shadow flex items-center justify-between select-none max-w-xl mx-auto">
            <div className="flex items-center gap-3">
              {/* Profile avatar circles */}
              <div className="w-12 h-12 rounded-full overflow-hidden bg-[#FFBB00] border-2 border-black flex items-center justify-center p-0.5 shadow-[1px_1px_0_#000] shrink-0">
                <div className="w-full h-full rounded-full border border-black bg-[#FFDFF2] overflow-hidden flex items-center justify-center">
                  <img 
                    src="https://cdn.shopify.com/s/files/1/0825/4491/8821/files/heartigusa.png?v=1776963053" 
                    alt="igusa_official" 
                    className="w-full h-full object-contain p-0.5"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              
              {/* Profile metrics */}
              <div className="flex flex-col">
                <h4 className="font-sans font-bold text-sm md:text-base text-black flex items-center gap-1 select-text">
                  @igusa_official 
                  <Check className="w-3.5 h-3.5 text-blue-500 fill-blue-500 rounded-full bg-white scale-110" />
                </h4>
                <p className="font-mono text-xs text-gray-500">
                  {followersCount.toLocaleString("ko-KR")} followers • 109 posts
                </p>
              </div>
            </div>

            {/* Follow/Following Button */}
            <button 
              id="insta-follow-button"
              onClick={handleFollowClick}
              className={`px-4 py-1.5 font-mono text-[11px] md:text-sm font-extrabold border-2 border-black rounded transition duration-150 y2k-btn-push cursor-pointer ${
                isFollowed 
                  ? "bg-slate-200 text-slate-700" 
                  : "bg-slime-green text-black y2k-shadow hover:bg-[#bce6aa]"
              }`}
            >
              {isFollowed ? t("following") : t("follow")}
            </button>
          </div>

          {/* Post square layouts (4 columns scroll/grid) */}
          <div className="max-w-xl mx-auto grid grid-cols-4 gap-2 mt-4">
            {instagramPosts.slice(0, 8).map((post, idx) => (
              <div 
                key={idx}
                className="aspect-square border-2 border-black bg-slate-50 shadow-[2px_2px_0_0_#000] overflow-hidden group relative hover:scale-105 transition cursor-pointer"
                onClick={() => showToast(`인스타그램 이미지 #${idx+1} 💖`)}
              >
                <img 
                  src={post.url} 
                  alt={`Instagram Post ${idx+1}`} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 text-white font-mono text-[10px] items-center justify-center flex opacity-0 group-hover:opacity-100 transition duration-150">
                  ♥ LIKE
                </div>
              </div>
            ))}
          </div>

          {/* Social landing see-more button */}
          <div className="w-full max-w-xl mx-auto mt-4 px-0 flex">
            <a 
              href="https://www.instagram.com/igusa_official/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full text-center bg-candy-pink hover:bg-[#ffb0e7] font-mono text-xs md:text-sm font-black py-3 rounded-sm border-2 border-black y2k-shadow y2k-btn-push text-black flex items-center justify-center gap-2 cursor-pointer"
            >
              <Instagram className="w-4 h-4 text-brand-magenta" />
              {t("view_more_insta")}
            </a>
          </div>

        </section>

        {/* Benefits Trust Badges Ribbon Row */}
        <section className="mb-12 py-4 border-t-3 border-b-3 border-black border-dashed">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: t("shipping_notice"), desc: t("shipping_desc"), icon: Truck, bg: "bg-amber-100" },
              { title: t("returns_notice"), desc: t("returns_desc"), icon: RefreshCw, bg: "bg-sky-100" },
              { title: t("secure_payment"), desc: t("secure_desc"), icon: Lock, bg: "bg-purple-100" },
              { title: t("line_notice"), desc: t("line_desc"), icon: MessageSquare, bg: "bg-[#7DF4FF]" }
            ].map((b, i) => (
              <div 
                key={i}
                className="bg-white border-2 border-black p-3 hover:-translate-y-0.5 transition duration-200 shadow-[3px_3px_0_0_#121212] flex items-center gap-3 cursor-pointer"
                onClick={() => showToast(language === "KO" ? `${b.title} 페이지 💫` : language === "EN" ? `${b.title} page details 💫` : `${b.title}の案内ページ 💫`)}
              >
                <div className={`w-10 h-10 rounded-full border border-black ${b.bg} flex items-center justify-center shrink-0 shadow-[1px_1px_0_#000]`}>
                  <b.icon className="w-5 h-5 text-black" />
                </div>
                <div className="flex flex-col select-none">
                  <h4 className="font-sans font-bold text-xs md:text-sm text-black">{b.title}</h4>
                  <p className="font-mono text-[10px] text-gray-500">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Ribbon Newsletter Form Column banner */}
        <section className="mb-12 max-w-2xl mx-auto">
          <div className="bg-[#E5D5FF] border-3 border-black p-6 y2k-shadow flex flex-col md:flex-row items-center justify-between gap-4 select-none transform rotate-[-0.5deg]">
            
            <div className="flex items-center gap-3 shrink-0">
              <div className="p-2 border border-black bg-white rounded-full">
                <Mail className="w-5 h-5 text-brand-magenta" />
              </div>
              <h3 className="font-sans font-black text-sm md:text-base text-black max-w-[240px]">
                {t("newsletter_sub")}
              </h3>
            </div>

            <form onSubmit={handleNewsletterSubmit} className="flex w-full md:w-auto items-center gap-2">
              <input 
                type="email" 
                placeholder={t("newsletter_placeholder")} 
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                required
                className="bg-white border-2 border-black p-2 px-3 text-xs md:text-sm font-mono flex-1 md:w-[220px] rounded-xs shadow-[2px_2px_0_0_#000] focus:shadow-primary"
              />
              <button 
                type="submit"
                className="bg-black hover:bg-neutral-800 text-white font-mono text-xs font-black p-2.5 px-4 rounded-xs border-2 border-black shadow-[2px_2px_0_0_#121212] y2k-btn-push shrink-0 flex items-center gap-1 cursor-pointer"
              >
                <span>{t("newsletter_btn")}</span>
                <Send className="w-3 h-3 text-white" />
              </button>
            </form>

          </div>
        </section>

      </main>

      {/* Structured Footer Column Index */}
      <footer className="bg-white border-t-3 border-black pt-12 pb-6 px-4 md:px-8 select-none">
        <div className="max-w-7xl mx-auto">
          
          {/* Column structure definitions */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            
            {/* Shop nav */}
            <div className="flex flex-col gap-3">
              <h3 className="font-display font-extrabold text-[#121212] tracking-wider text-sm select-text uppercase border-b-2 border-black pb-1 max-w-[80px]">
                SHOP
              </h3>
              <ul className="font-mono text-xs flex flex-col gap-2 font-medium text-gray-700">
                <li><a onClick={() => setSelectedCategory("all")} className="hover:text-brand-magenta hover:underline cursor-pointer">ALL ITEMS</a></li>
                <li><a onClick={() => setSelectedCategory("tops")} className="hover:text-brand-magenta hover:underline cursor-pointer">NEW ARRIVALS</a></li>
                <li><a onClick={() => setSelectedCategory("tops")} className="hover:text-brand-magenta hover:underline cursor-pointer">BEST SELLERS</a></li>
                <li><a onClick={() => { setSelectedCategory("all"); setCatalogExpanded(true); }} className="hover:text-brand-magenta hover:underline cursor-pointer">SALE COLLECTIONS</a></li>
              </ul>
            </div>

            {/* Policy info */}
            <div className="flex flex-col gap-3">
              <h3 className="font-display font-extrabold text-[#121212] tracking-wider text-sm select-text uppercase border-b-2 border-black pb-1 max-w-[110px]">
                {t("policy_info")}
              </h3>
              <ul className="font-sans text-xs flex flex-col gap-2 font-medium text-gray-700">
                <li><a onClick={() => showToast(`${t("terms_of_service")} 💫`)} className="hover:text-brand-magenta hover:underline cursor-pointer">{t("terms_of_service")}</a></li>
                <li><a onClick={() => showToast(`${t("privacy_policy")} 💫`)} className="hover:text-brand-magenta hover:underline cursor-pointer">{t("privacy_policy")}</a></li>
                <li><a onClick={() => showToast(`${t("shipping_policy")} 💫`)} className="hover:text-brand-magenta hover:underline cursor-pointer">{t("shipping_policy")}</a></li>
                <li><a onClick={() => showToast(`${t("refund_policy")} 💫`)} className="hover:text-brand-magenta hover:underline cursor-pointer">{t("refund_policy")}</a></li>
              </ul>
            </div>

            {/* Help desk */}
            <div className="flex flex-col gap-3">
              <h3 className="font-display font-extrabold text-[#121212] tracking-wider text-sm select-text uppercase border-b-2 border-black pb-1 max-w-[124px]">
                {t("customer_care_title")}
              </h3>
              <ul className="font-mono text-xs flex flex-col gap-2 font-medium text-gray-700">
                <li><a onClick={() => showToast(`${t("faq")} 💫`)} className="hover:text-brand-magenta hover:underline cursor-pointer">{t("faq")}</a></li>
                <li><a onClick={() => showToast(`${t("contact_us")} 💫`)} className="hover:text-brand-magenta hover:underline cursor-pointer">{t("contact_us")}</a></li>
                <li><a onClick={() => setIsAccountOpen(true)} className="hover:text-brand-magenta hover:underline cursor-pointer">{t("my_account")}</a></li>
                <li><a onClick={() => showToast(`${t("order_tracking")} 💫`)} className="hover:text-brand-magenta hover:underline cursor-pointer">{t("order_tracking")}</a></li>
              </ul>
            </div>

            {/* Social channels */}
            <div className="flex flex-col gap-3">
              <h3 className="font-display font-extrabold text-[#121212] tracking-wider text-sm select-text uppercase border-b-2 border-black pb-1 max-w-[110px]">
                FOLLOW US
              </h3>
              
              <div className="flex items-center gap-2 mt-1">
                {/* LINE channel wrapper */}
                <button 
                  onClick={() => showToast("라인 계정에 가입하여 exclusive 데코라 소식을 받으세요!")}
                  className="w-10 h-10 bg-lime-200 hover:bg-[#A5FF6C] border-2 border-black rounded-lg y2k-shadow y2k-btn-push text-black flex items-center justify-center cursor-pointer"
                >
                  <MessageSquare className="w-5 h-5 fill-slate-800" />
                </button>
                
                {/* IG channel wrapper */}
                <a 
                  href="https://www.instagram.com/igusa_official/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-rose-200 hover:bg-rose-300 border-2 border-black rounded-lg y2k-shadow y2k-btn-push text-black flex items-center justify-center cursor-pointer"
                >
                  <Instagram className="w-5 h-5 text-brand-magenta" />
                </a>

                {/* Twitter X channel wrapper */}
                <button 
                  onClick={() => showToast("트위터 @igusa_official 팔로우! 🪐")}
                  className="w-10 h-10 bg-slate-100 hover:bg-neutral-50 border-2 border-black rounded-lg y2k-shadow y2k-btn-push text-black flex items-center justify-center cursor-pointer"
                >
                  <Twitter className="w-5 h-5 font-black text-black" />
                </button>
              </div>

            </div>

          </div>

          {/* Localization Dropdowns selection */}
          <div className="border-t-2 border-black pt-6 flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Lang Dropdowns selectors row */}
            <div className="flex flex-wrap gap-4 items-center">
              {/* Currency Dropdown */}
              <div className="relative">
                <div 
                  id="currency-dropdown-trigger"
                  onClick={() => {
                    setIsCurrencyDropdownOpen(!isCurrencyDropdownOpen);
                    setIsLanguageDropdownOpen(false);
                  }}
                  className="border-2 border-black bg-white rounded shadow-[2px_2px_0_0_#000] p-1 px-3 flex items-center gap-1.5 hover:bg-slate-50 scale-95 md:scale-100 cursor-pointer select-none"
                >
                  <Globe className="w-3.5 h-3.5 text-gray-500" />
                  <span className="font-sans text-xs font-bold text-gray-800">
                    {currency === "KRW" ? `${language === "KO" ? "대한민국" : language === "EN" ? "South Korea" : "韓国"} | KRW ₩` : currency === "USD" ? `${language === "KO" ? "미국" : language === "EN" ? "United States" : "米国"} | USD $` : `${language === "KO" ? "일본" : language === "EN" ? "Japan" : "日本"} | JPY ¥`}
                  </span>
                  <ChevronDown className={`w-3.5 h-3.5 text-gray-500 transition-transform ${isCurrencyDropdownOpen ? "rotate-180" : ""}`} />
                </div>
                
                {isCurrencyDropdownOpen && (
                  <div className="absolute bottom-full left-0 mb-2 w-48 bg-white border-2 border-black rounded shadow-[4px_4px_0_0_#000] z-50 divide-y-2 divide-black overflow-hidden select-none">
                    <div 
                      onClick={() => {
                        setCurrency("KRW");
                        setIsCurrencyDropdownOpen(false);
                        showToast(language === "KO" ? "통화가 대한민국 원화(₩)로 변경되었습니다! 🇰🇷" : language === "EN" ? "Currency changed to Korean Won (₩)! 🇰🇷" : "通貨が大韓民国ウォン(₩)に変更されました！ 🇰🇷");
                      }}
                      className={`p-2 px-3 text-xs font-bold cursor-pointer hover:bg-slime-green flex items-center justify-between ${currency === "KRW" ? "bg-[#DFD3E3]" : "bg-white"}`}
                    >
                      <span>{language === "KO" ? "대한민국" : language === "EN" ? "South Korea" : "韓国"} (KRW ₩)</span>
                      {currency === "KRW" && <Check className="w-3 h-3 text-black font-black" />}
                    </div>
                    <div 
                      onClick={() => {
                        setCurrency("USD");
                        setIsCurrencyDropdownOpen(false);
                        showToast(language === "KO" ? "통화가 미국 달러($)로 변경되었습니다! 🇺🇸" : language === "EN" ? "Currency changed to US Dollar ($)! 🇺🇸" : "通貨がアメリカドル($)に変更されました！ 🇺🇸");
                      }}
                      className={`p-2 px-3 text-xs font-bold cursor-pointer hover:bg-slime-green flex items-center justify-between ${currency === "USD" ? "bg-[#DFD3E3]" : "bg-white"}`}
                    >
                      <span>{language === "KO" ? "미국" : language === "EN" ? "United States" : "米国"} (USD $)</span>
                      {currency === "USD" && <Check className="w-3 h-3 text-black font-black" />}
                    </div>
                    <div 
                      onClick={() => {
                        setCurrency("JPY");
                        setIsCurrencyDropdownOpen(false);
                        showToast(language === "KO" ? "통화가 일본 엔화(¥)로 변경되었습니다! 🇯🇵" : language === "EN" ? "Currency changed to Japanese Yen (¥)! 🇯🇵" : "通貨が日本円(¥)に変更されました！ 🇯🇵");
                      }}
                      className={`p-2 px-3 text-xs font-bold cursor-pointer hover:bg-slime-green flex items-center justify-between ${currency === "JPY" ? "bg-[#DFD3E3]" : "bg-white"}`}
                    >
                      <span>{language === "KO" ? "일본" : language === "EN" ? "Japan" : "日本"} (JPY ¥)</span>
                      {currency === "JPY" && <Check className="w-3 h-3 text-black font-black" />}
                    </div>
                  </div>
                )}
              </div>

              {/* Language Dropdown */}
              <div className="relative">
                <div 
                  id="language-dropdown-trigger"
                  onClick={() => {
                    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
                    setIsCurrencyDropdownOpen(false);
                  }}
                  className="border-2 border-black bg-white rounded shadow-[2px_2px_0_0_#000] p-1 px-3 flex items-center gap-1.5 hover:bg-slate-50 scale-95 md:scale-100 cursor-pointer select-none"
                >
                  <span className="font-sans text-xs font-bold text-gray-800">
                    {language === "KO" ? "한국어" : language === "EN" ? "English" : "日本語"}
                  </span>
                  <ChevronDown className={`w-3.5 h-3.5 text-gray-500 transition-transform ${isLanguageDropdownOpen ? "rotate-180" : ""}`} />
                </div>

                {isLanguageDropdownOpen && (
                  <div className="absolute bottom-full left-0 mb-2 w-36 bg-white border-2 border-black rounded shadow-[4px_4px_0_0_#000] z-50 divide-y-2 divide-black overflow-hidden select-none">
                    <div 
                      onClick={() => {
                        setLanguage("KO");
                        setIsLanguageDropdownOpen(false);
                        showToast("언어가 한국어로 설정되었습니다! 🇰🇷");
                      }}
                      className={`p-2 px-3 text-xs font-bold cursor-pointer hover:bg-slime-green flex items-center justify-between ${language === "KO" ? "bg-[#DFD3E3]" : "bg-white"}`}
                    >
                      <span>{language === "KO" ? "한국어" : language === "EN" ? "Korean" : "韓国語"}</span>
                      {language === "KO" && <Check className="w-3 h-3 text-black font-black" />}
                    </div>
                    <div 
                      onClick={() => {
                        setLanguage("EN");
                        setIsLanguageDropdownOpen(false);
                        showToast("Language set to English! 🇺🇸");
                      }}
                      className={`p-2 px-3 text-xs font-bold cursor-pointer hover:bg-slime-green flex items-center justify-between ${language === "EN" ? "bg-[#DFD3E3]" : "bg-white"}`}
                    >
                      <span>{language === "KO" ? "영어" : language === "EN" ? "English" : "英語"}</span>
                      {language === "EN" && <Check className="w-3 h-3 text-black font-black" />}
                    </div>
                    <div 
                      onClick={() => {
                        setLanguage("JA");
                        setIsLanguageDropdownOpen(false);
                        showToast("言語が日本語に設定されました！ 🇯🇵");
                      }}
                      className={`p-2 px-3 text-xs font-bold cursor-pointer hover:bg-slime-green flex items-center justify-between ${language === "JA" ? "bg-[#DFD3E3]" : "bg-white"}`}
                    >
                      <span>{language === "KO" ? "일본어" : language === "EN" ? "Japanese" : "日本語"}</span>
                      {language === "JA" && <Check className="w-3 h-3 text-black font-black" />}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Quick action maps */}
            <div className="flex items-center gap-4 text-xs font-mono font-bold text-gray-500 select-text">
              <a onClick={() => showToast("FAQ")} className="hover:text-brand-magenta hover:underline cursor-pointer">FAQ</a>
              <span>•</span>
              <a onClick={() => showToast("CONTACT US")} className="hover:text-brand-magenta hover:underline cursor-pointer">CONTACT US</a>
            </div>

          </div>

          {/* Accepted Stripe Credit Cards icons layout */}
          <div className="mt-8 border-t border-dashed border-gray-300 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Logos listings */}
            <div className="flex items-center gap-2">
              {[
                { name: "AMEX", bg: "bg-slate-800 text-white font-serif" },
                { name: "APPLE PAY", bg: "bg-black text-white font-sans" },
                { name: "GPAY", bg: "bg-gray-100 text-blue-600 font-bold font-sans" },
                { name: "VISA", bg: "bg-blue-900 text-yellow-400 font-bold font-serif" },
                { name: "MC", bg: "bg-amber-600 text-white font-extrabold" }
              ].map((c) => (
                <div 
                  key={c.name}
                  className={`border border-black rounded-xs text-[9px] md:text-[10px] p-1 px-2 uppercase font-black select-none tracking-tight shadow-[1px_1px_0_#000] scale-95 ${c.bg}`}
                >
                  {c.name}
                </div>
              ))}
            </div>

            {/* Powered credit line */}
            <div className="text-center md:text-right font-sans text-[10px] md:text-xs text-gray-500 select-text">
              <p>© 2026 Igusa • Powered by Shopify</p>
              <p className="mt-1 flex flex-wrap gap-2 justify-center md:justify-end text-gray-400 font-medium">
                <a onClick={() => showToast("환불 정책")} className="hover:underline cursor-pointer">환불 정책</a>
                <a onClick={() => showToast("개인정보처리방침")} className="hover:underline cursor-pointer">개인정보처리방침</a>
                <a onClick={() => showToast("서비스 약관")} className="hover:underline cursor-pointer">서비스 약관</a>
                <a onClick={() => showToast("배송 정책")} className="hover:underline cursor-pointer">배송 정책</a>
              </p>
            </div>

          </div>

        </div>
      </footer>


      {/* 💚 SLIDING NAVIGATION DRAWER OVERLAY */}
      <AnimatePresence>
        {isDrawerOpen && (
          <div className="fixed inset-0 z-50 overflow-hidden select-none">
            {/* Dark backdrop mask */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-xs cursor-pointer"
              onClick={() => setIsDrawerOpen(false)}
            />

            {/* Navigation panel */}
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute top-0 left-0 w-full max-w-xs md:max-w-sm h-full bg-white border-r-4 border-black flex flex-col justify-between z-10 shadow-[10px_0_0_0_#121212] select-none"
            >
              {/* Header block with retro Y2K line */}
              <div className="p-4 border-b-3 border-black bg-candy-pink flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sparkle className="w-5 h-5 text-black animate-spin" />
                  <h3 className="font-display font-extrabold text-lg text-black uppercase tracking-wider">
                    IGUSA MENU
                  </h3>
                </div>
                <button 
                  onClick={() => setIsDrawerOpen(false)}
                  className="p-1 border-2 border-black rounded bg-white hover:bg-slate-50 y2k-btn-push cursor-pointer"
                >
                  <X className="w-5 h-5 text-black" />
                </button>
              </div>

              {/* Navigation items list */}
              <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-3 bg-white">
                {[
                  { id: "all", label: "ALL" },
                  { id: "outer", label: "OUTER" },
                  { id: "tops", label: "TOPS" },
                  { id: "bottoms", label: "BOTTOMS" },
                  { id: "bag", label: "BAG" },
                  { id: "acc", label: "ACCESSORIES" },
                  { id: "sale", label: "SALE" }
                ].map((menu) => {
                  const active = selectedCategory === menu.id;
                  return (
                    <button
                      key={menu.id}
                      onClick={() => {
                        setSelectedCategory(menu.id);
                        setIsDrawerOpen(false);
                        showToast(`${menu.label} ${language === "KO" ? "카테고리로 이동했습니다! ⚡" : language === "EN" ? "category loaded! ⚡" : "カテゴリーに移動しました！ ⚡"}`);
                        setTimeout(() => {
                          const element = document.getElementById("catalog-section");
                          if (element) {
                            element.scrollIntoView({ behavior: "smooth" });
                          }
                        }, 250);
                      }}
                      className={`w-full px-4 py-3 text-left transition-all duration-200 cursor-pointer rounded-lg border-2 ${
                        active 
                          ? "bg-transparent text-brand-magenta border-transparent" 
                          : "bg-transparent text-black border-transparent"
                      } hover:bg-slime-green hover:text-black hover:border-black hover:shadow-[3px_3px_0_0_#000000]`}
                    >
                      <span className="font-display font-extrabold text-lg uppercase tracking-wider block">
                        {menu.label}
                      </span>
                    </button>
                  );
                })}

                {/* MY ACCOUNT Action button */}
                <button
                  onClick={() => {
                    setIsDrawerOpen(false);
                    setIsAccountOpen(true);
                  }}
                  className="w-full px-4 py-3 text-left transition-all duration-200 cursor-pointer rounded-lg border-2 bg-transparent text-black border-transparent hover:bg-slime-green hover:text-black hover:border-black hover:shadow-[3px_3px_0_0_#000000]"
                >
                  <span className="font-display font-extrabold text-lg uppercase tracking-wider block">
                    MY ACCOUNT
                  </span>
                </button>
              </div>

              {/* Drawer footer with brand identity */}
              <div className="p-4 border-t-3 border-black bg-white flex flex-col gap-2 items-center justify-center">
                <img 
                  src={logoImage} 
                  alt="Logo" 
                  className="h-8 object-contain" 
                  referrerPolicy="no-referrer"
                />
                <p className="font-mono text-[9px] text-gray-500 tracking-widest text-center uppercase">
                  ⭐ TOO CUTE TOO COOL ⭐
                </p>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>


      {/* 🔴 SLIDING CART DRAWER OVERLAY */}
      <AnimatePresence>
        {isCartOpen && (
          <div className="fixed inset-0 z-50 overflow-hidden select-none">
            {/* dark backdrop mask */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-xs cursor-pointer"
              onClick={() => setIsCartOpen(false)}
            />

            {/* cart panel */}
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 w-full max-w-md h-full bg-white border-l-4 border-black flex flex-col justify-between z-10 shadow-[-10px_0_0_0_#121212] select-none"
            >
              
              {/* Header block with hard line */}
              <div className="p-4 border-b-3 border-black bg-[#FFD6F9] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-black" />
                  <h3 className="font-display font-extrabold text-lg text-black uppercase">
                    장바구니 리스트 ({cartItemCount || 3})
                  </h3>
                </div>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="p-1 border-2 border-black rounded bg-white hover:bg-slate-50 y2k-btn-push cursor-pointer"
                >
                  <X className="w-5 h-5 text-black" />
                </button>
              </div>

              {/* Shopping items list view */}
              <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
                {cart.length === 0 ? (
                  /* Demo Default Preloaded shopping Items if cart is completely empty initially */
                  <div className="flex flex-col gap-3">
                    {/* Add a friendly placeholder header */}
                    <p className="font-mono text-xs text-center text-gray-400 py-2">{t("demo_cart_title")}</p>
                    {[
                      { id: "demo-1", name: "Candy Shop Baby Top", price: 45000, quantity: 2, image: products[0]?.image || "https://193igusa.com/cdn/shop/files/I_1_f74ab495-0af0-40b0-90bc-12daf3b9174b.png?v=1777613741&width=150", bg: "bg-candy-pink" },
                      { id: "demo-2", name: "i-rabbit T-shirt cream", price: 66000, quantity: 1, image: products[1]?.image || "https://cdn.shopify.com/s/files/1/0825/4491/8821/files/G_1_895dcb77-e857-40dd-b49f-1d251f65470a.png?v=1777613824&width=150", bg: "bg-slime-green" }
                    ].map((item) => (
                      <div 
                        key={item.id}
                        className="bg-white border-2 border-black p-2 flex items-center gap-3 relative shadow-[2px_2px_0_0_#121212]"
                      >
                        <div className={`w-16 h-20 border border-black overflow-hidden shrink-0 ${item.bg}`}>
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-display font-extrabold text-xs text-black line-clamp-1">{item.name}</h4>
                          <p className="font-mono text-xs text-brand-magenta font-black mt-1">
                            {formatPrice(item.price)}
                          </p>
                          <div className="flex items-center gap-1.5 mt-2">
                            <span className="font-mono text-[10px] bg-slate-100 border border-black p-0.5 px-2 font-bold select-none">
                              {language === "KO" ? "수량" : language === "EN" ? "Qty" : "数量"}: {item.quantity}
                            </span>
                          </div>
                        </div>
                        <button 
                          onClick={() => showToast(language === "KO" ? "장바구니 리포트는 데모입니다." : language === "EN" ? "Cart report is a demo model." : "ショッピングカートレポートはデモ用です。")}
                          className="p-1.5 text-gray-400 hover:text-black absolute top-2 right-2 cursor-pointer"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                    <div className="border border-dashed border-brand-magenta/30 p-2 text-center rounded bg-brand-magenta/5 mt-4">
                      <p className="font-mono text-[10px] text-brand-magenta font-black">
                        {t("demo_cart_tip")}
                      </p>
                    </div>
                  </div>
                ) : (
                  cart.map((item) => (
                    <div 
                      key={item.id}
                      className="bg-white border-2 border-black p-2 flex items-center gap-3 relative shadow-[2px_2px_0_0_#121212]"
                    >
                      {/* Image block left */}
                      <div className={`w-16 h-20 border border-black overflow-hidden shrink-0 ${item.product.bgColor || "bg-pink-50"}`}>
                        <img 
                          src={item.product.image} 
                          alt={item.product.name} 
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>

                      {/* item description right */}
                      <div className="flex-1 min-w-0">
                        <h4 className="font-display font-extrabold text-xs text-black line-clamp-1">
                          {item.product.name}
                        </h4>
                        <p className="font-mono text-xs text-brand-magenta font-black mt-1">
                          {formatPrice(item.product.price)}
                        </p>
                        
                        {/* Quantity triggers block */}
                        <div className="flex items-center gap-1 mt-2">
                          <button 
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-0.5 border border-black bg-white hover:bg-slate-55 rounded cursor-pointer"
                          >
                            <Minus className="w-3 h-3 text-black" />
                          </button>
                          
                          <span className="font-mono text-center min-w-[24px] text-xs font-black">
                            {item.quantity}
                          </span>

                          <button 
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-0.5 border border-black bg-white hover:bg-slate-55 rounded cursor-pointer"
                          >
                            <Plus className="w-3 h-3 text-black" />
                          </button>
                        </div>
                      </div>

                      {/* Delete trash button absolute right corner */}
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="p-1.5 hover:text-red-500 absolute top-2 right-2 cursor-pointer"
                      >
                        <Trash2 className="w-4 h-4 text-black" />
                      </button>

                    </div>
                  ))
                )}
              </div>

              {/* Calculations footer */}
              <div className="p-4 border-t-3 border-black bg-slate-50 flex flex-col gap-4">
                
                {/* Total amount lines info */}
                <div className="flex items-center justify-between border-b-2 border-dashed border-black pb-2">
                  <span className="font-mono text-xs font-black text-gray-500">결제 예정 총금액</span>
                  <span className="font-mono text-lg font-black text-brand-magenta">
                    {formatPrice(cart.length === 0 ? 210000 : totalAmount)}
                  </span>
                </div>

                {/* Hard push place checkout buttons */}
                <button 
                  onClick={() => {
                    setIsCartOpen(false);
                    // Open the sweet checkout flow
                    setIsCheckoutOpen(true);
                  }}
                  className="w-full bg-slime-green hover:bg-[#bce6aa] font-mono text-sm font-black py-3 rounded border-3 border-black shadow-[4px_4px_0_0_#121212] y2k-btn-push text-black flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkle className="w-4 h-4 text-black animate-spin" />
                  <span>CHECK OUT</span>
                </button>

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>


      {/* 🔮 MULTI-LINGUAL Y2K CHECKOUT MODAL */}
      <AnimatePresence>
        {isCheckoutOpen && (
          <div className="fixed inset-0 z-50 overflow-y-auto overflow-x-hidden flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-xs cursor-pointer"
              onClick={() => setIsCheckoutOpen(false)}
            />

            {/* Modal Box */}
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-4xl bg-white border-4 border-black shadow-[8px_8px_0_0_#121212] flex flex-col z-10 relative overflow-hidden my-8"
            >
              {/* Header */}
              <div className="p-3 border-b-3 border-black bg-slime-green flex items-center justify-between select-none">
                <div className="flex items-center gap-2">
                  <Lock className="w-5 h-5 text-black animate-bounce" />
                  <span className="font-display font-extrabold text-sm md:text-base text-black uppercase tracking-wider">
                    {t("chk_title")} ✦
                  </span>
                </div>
                <button 
                  onClick={() => setIsCheckoutOpen(false)}
                  className="p-1 border-2 border-black rounded bg-white hover:bg-slate-55 y2k-btn-push cursor-pointer lg:px-2"
                >
                  <X className="w-4 h-4 text-black inline" />
                </button>
              </div>

              {/* Body */}
              <div className="p-4 md:p-6 bg-rose-50/55 flex flex-col lg:flex-row gap-6 max-h-[80vh] overflow-y-auto">
                
                {/* Left Side: Forms */}
                <div className="flex-1 flex flex-col gap-5">
                  
                  {/* 1. SHIPPING INFO SECTION */}
                  <div className="bg-white border-3 border-black p-4 md:p-5 shadow-[4px_4px_0_0_#000] flex flex-col gap-4">
                    <h3 className="font-display font-black text-black text-xs md:text-sm border-b-2 border-black pb-1 uppercase tracking-wider flex items-center gap-2">
                      <Truck className="w-4.5 h-4.5 text-black" />
                      {t("chk_shipping_title")}
                    </h3>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      <div className="flex flex-col gap-1">
                        <label className="font-mono text-[11px] font-extrabold text-gray-700 uppercase">
                          {t("chk_last_name_label")} *
                        </label>
                        <input 
                          type="text"
                          required
                          value={checkoutLastName}
                          onChange={(e) => setCheckoutLastName(e.target.value)}
                          placeholder="LAST NAME"
                          className="w-full bg-slate-50 border-2 border-black p-2 font-mono text-xs focus:bg-white focus:outline-none focus:ring-0"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="font-mono text-[11px] font-extrabold text-gray-700 uppercase">
                          {t("chk_first_name_label")} *
                        </label>
                        <input 
                          type="text"
                          required
                          value={checkoutFirstName}
                          onChange={(e) => setCheckoutFirstName(e.target.value)}
                          placeholder="FIRST NAME"
                          className="w-full bg-slate-50 border-2 border-black p-2 font-mono text-xs focus:bg-white focus:outline-none focus:ring-0"
                        />
                      </div>
                      <div className="flex flex-col gap-1 col-span-2 md:col-span-1">
                        <label className="font-mono text-[11px] font-extrabold text-gray-700 uppercase">
                          {t("chk_phone_label")} *
                        </label>
                        <input 
                          type="text"
                          required
                          value={checkoutPhone}
                          onChange={(e) => setCheckoutPhone(e.target.value)}
                          placeholder={language === "KO" ? "이메일 혹은 휴대폰 번호" : language === "EN" ? "Email or mobile number" : "メールまたは携帯番号"}
                          className="w-full bg-slate-50 border-2 border-black p-2 font-mono text-xs focus:bg-white focus:outline-none focus:ring-0"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="font-mono text-[11px] font-extrabold text-gray-700 uppercase">
                        {t("chk_zip_label")} *
                      </label>
                      <div className="flex gap-2">
                        <input 
                          type="text"
                          required
                          value={checkoutZip}
                          onChange={(e) => setCheckoutZip(e.target.value)}
                          placeholder="04012"
                          className="w-24 bg-slate-50 border-2 border-black p-2 font-mono text-xs focus:bg-white focus:outline-none"
                        />
                        <button 
                          type="button"
                          onClick={() => {
                            setCheckoutZip("12345");
                            setCheckoutAddress("서울특별시 마포구 하라주쿠길 193");
                            setCheckoutDetail("이그사 빌딩 2층");
                            showToast("임시 주소가 자동 입력되었습니다! 💫");
                          }}
                          className="px-3 border-2 border-black rounded bg-[#FFD6F9] hover:bg-candy-pink text-[10px] font-mono font-bold y2k-btn-push cursor-pointer text-black shadow-[2px_2px_0_0_#000]"
                        >
                          Find Address
                        </button>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="font-mono text-[11px] font-extrabold text-gray-700 uppercase">
                        {t("chk_address_label")} *
                      </label>
                      <input 
                        type="text"
                        required
                        value={checkoutAddress}
                        onChange={(e) => setCheckoutAddress(e.target.value)}
                        placeholder="서울특별시 마포구 ..."
                        className="w-full bg-slate-50 border-2 border-black p-2 font-sans text-xs focus:bg-white focus:outline-none"
                      />
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="font-mono text-[11px] font-extrabold text-gray-700 uppercase">
                        {t("chk_detail_label")} *
                      </label>
                      <input 
                        type="text"
                        required
                        value={checkoutDetail}
                        onChange={(e) => setCheckoutDetail(e.target.value)}
                        placeholder="101동 202호 (상세주소)"
                        className="w-full bg-slate-50 border-2 border-black p-2 font-sans text-xs focus:bg-white focus:outline-none"
                      />
                    </div>

                    {/* 2. SHIPPING METHOD DYNAMIC CRITERIA */}
                    <div className="mt-2 p-3 border-2 border-dashed border-black bg-yellow-50 rounded">
                      <p className="font-display font-extrabold text-[11px] text-black uppercase block mb-1">
                        🚀 {t("chk_shipping_method")}
                      </p>
                      {(!checkoutAddress.trim() || !checkoutLastName.trim() || !checkoutFirstName.trim()) ? (
                        <p className="font-sans text-[10px] text-gray-500 font-semibold select-none leading-relaxed">
                          ⚠️ {t("chk_shipping_address_prompt")}
                        </p>
                      ) : (
                        <div className="flex flex-col gap-2">
                          <div className="flex items-center justify-between p-2 rounded bg-slime-green/10 border border-black">
                            <div className="flex items-center gap-2">
                              <span className="w-2.5 h-2.5 rounded-full bg-slime-green block border border-black animate-pulse"></span>
                              <span className="font-mono text-xs font-black text-black">Standard Carrier (우체국택배)</span>
                            </div>
                            <span className="font-mono text-xs font-black text-brand-magenta">
                              {(cart.length === 0 ? 111000 : totalAmount) >= 100000 ? t("free_shipping") : formatPrice(3000)}
                            </span>
                          </div>
                          <p className="font-sans text-[9px] text-gray-500 font-bold leading-relaxed">
                            {(cart.length === 0 ? 111000 : totalAmount) >= 100000 ? t("chk_shipping_free") : t("chk_shipping_paid")}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* 3. SAVE INFO & DISCLAIMER CHECKBOX */}
                    <div className="flex flex-col gap-2 mt-2">
                      <div className="flex items-center gap-2">
                        <input 
                          type="checkbox"
                          id="chk-save-info"
                          checked={checkoutSave}
                          onChange={(e) => setCheckoutSave(e.target.checked)}
                          className="w-4 h-4 accent-brand-magenta cursor-pointer border-2 border-black rounded"
                        />
                        <label htmlFor="chk-save-info" className="font-mono text-[11px] font-black text-gray-700 cursor-pointer select-none">
                          {t("chk_save_info")}
                        </label>
                      </div>
                      <p className="font-sans text-[10px] leading-relaxed text-gray-400">
                        {t("chk_agree_disclaimer")}
                      </p>
                    </div>
                  </div>

                  {/* 4. PAYMENT METHOD CARDS */}
                  <div className="bg-white border-3 border-black p-4 md:p-5 shadow-[4px_4px_0_0_#000] flex flex-col gap-3">
                    <h3 className="font-display font-black text-black text-xs md:text-sm border-b-2 border-black pb-1 uppercase tracking-wider">
                      💳 {t("chk_payment_method")}
                    </h3>

                    <div className="grid grid-cols-2 gap-2 mt-1">
                      {[
                        { id: "card", label: t("chk_method_card") },
                        { id: "linepay", label: t("chk_method_linepay") },
                        { id: "paypay", label: t("chk_method_paypay") },
                        { id: "konbini", label: t("chk_method_konbini") },
                        { id: "paypal", label: t("chk_method_paypal") }
                      ].map((item) => (
                        <button 
                          key={item.id}
                          type="button"
                          onClick={() => setCheckoutPayment(item.id as any)}
                          className={`p-3 border-2 text-left transition-all duration-200 cursor-pointer rounded-lg font-mono text-xs font-bold leading-tight flex items-center justify-between ${
                            checkoutPayment === item.id 
                              ? "bg-slime-green border-black text-black shadow-[2px_2px_0_0_#000]" 
                              : "bg-slate-50 border-gray-300 text-gray-500 hover:border-black hover:text-black"
                          }`}
                        >
                          <span>{item.label}</span>
                          {checkoutPayment === item.id && <Check className="w-3.5 h-3.5 text-black shrink-0" />}
                        </button>
                      ))}
                    </div>

                    {/* Credit Card inputs rendered when 'card' is selected */}
                    {checkoutPayment === "card" && (
                      <motion.div 
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-3 p-4 border-2 border-dashed border-black bg-purple-50/50 rounded-lg flex flex-col gap-3"
                      >
                        <div className="flex flex-col gap-1">
                          <label className="font-mono text-[11px] font-extrabold text-gray-700 uppercase">
                            {t("chk_card_number")} *
                          </label>
                          <input 
                            type="text"
                            required
                            maxLength={19}
                            value={checkoutCardNum}
                            onChange={(e) => {
                              const val = e.target.value.replace(/\s?/g, '').replace(/(\d{4})/g, '$1 ').trim();
                              setCheckoutCardNum(val);
                            }}
                            placeholder="0000 0000 0000 0000"
                            className="w-full bg-white border-2 border-black p-2 font-mono text-xs focus:bg-white focus:outline-none"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <div className="flex flex-col gap-1">
                            <label className="font-mono text-[11px] font-extrabold text-gray-700 uppercase">
                              {t("chk_card_expiry")} *
                            </label>
                            <input 
                              type="text"
                              required
                              maxLength={5}
                              value={checkoutCardExpiry}
                              onChange={(e) => {
                                let val = e.target.value.replace(/\D/g, '');
                                if (val.length > 2) {
                                  val = val.substring(0, 2) + '/' + val.substring(2, 4);
                                }
                                setCheckoutCardExpiry(val);
                              }}
                              placeholder="MM/YY"
                              className="w-full bg-white border-2 border-black p-2 font-mono text-xs focus:bg-white focus:outline-none"
                            />
                          </div>

                          <div className="flex flex-col gap-1">
                            <label className="font-mono text-[11px] font-extrabold text-gray-700 uppercase">
                              {t("chk_card_cvv")} *
                            </label>
                            <input 
                              type="password"
                              required
                              maxLength={4}
                              value={checkoutCardCvv}
                              onChange={(e) => setCheckoutCardCvv(e.target.value.replace(/\D/g, ''))}
                              placeholder="CVV"
                              className="w-full bg-white border-2 border-black p-2 font-mono text-xs focus:bg-white focus:outline-none"
                            />
                          </div>
                        </div>

                        <div className="flex flex-col gap-1">
                          <label className="font-mono text-[11px] font-extrabold text-gray-700 uppercase">
                            {t("chk_card_name")} *
                          </label>
                          <input 
                            type="text"
                            required
                            value={checkoutCardHolderName}
                            onChange={(e) => setCheckoutCardHolderName(e.target.value)}
                            placeholder="EX) KOR SUBARU"
                            className="w-full bg-white border-2 border-black p-2 font-sans text-xs focus:bg-white focus:outline-none"
                          />
                        </div>
                      </motion.div>
                    )}
                  </div>

                </div>

                {/* Right Side: Order summary & Action buttons */}
                <div className="w-full lg:w-[360px] flex flex-col gap-4">
                  
                  {/* COUPON SECTION */}
                  <div className="bg-white border-3 border-black p-4 shadow-[4px_4px_0_0_#000] flex flex-col gap-2">
                    <label className="font-display font-black text-[11px] text-black uppercase tracking-wider">
                      🎫 {t("chk_coupon_label")}
                    </label>
                    <div className="flex gap-2">
                      <input 
                        type="text"
                        value={checkoutCoupon}
                        onChange={(e) => setCheckoutCoupon(e.target.value)}
                        placeholder="EX) WELCOME10, CLUB10"
                        className="flex-1 bg-slate-50 border-2 border-black p-2 font-mono text-xs uppercase focus:bg-white focus:outline-none"
                        disabled={checkoutCouponApplied}
                      />
                      <button 
                        type="button"
                        onClick={() => {
                          const code = checkoutCoupon.trim().toUpperCase();
                          if (code === "WELCOME10" || code === "CLUB10" || code === "IGUSA" || code === "CUTECOOL") {
                            setCheckoutDiscount(10);
                            setCheckoutCouponApplied(true);
                            showToast(t("chk_coupon_success"));
                          } else {
                            showToast(t("chk_coupon_invalid"));
                          }
                        }}
                        disabled={checkoutCouponApplied}
                        className={`px-3 border-2 border-black rounded font-mono text-xs font-bold y2k-btn-push cursor-pointer text-black ${
                          checkoutCouponApplied ? "bg-gray-200 cursor-not-allowed opacity-60" : "bg-slime-green hover:bg-[#bce6aa]"
                        }`}
                      >
                        {t("chk_coupon_apply")}
                      </button>
                    </div>
                    {checkoutCouponApplied && (
                      <p className="font-mono text-[10px] text-green-600 font-bold">
                        ✓ Promo Code {checkoutCoupon.toUpperCase()} Applied (10% OFF!)
                      </p>
                    )}
                  </div>

                  {/* CALCULATIONS AND BILLING */}
                  <div className="bg-white border-3 border-black p-4 shadow-[4px_4px_0_0_#000] flex flex-col gap-3">
                    <h3 className="font-display font-black text-black text-xs border-b-2 border-black pb-1 uppercase tracking-wider">
                      🛍️ ORDER BRIEF
                    </h3>

                    <div className="flex flex-col gap-2 max-h-[140px] overflow-y-auto border-b border-dashed border-gray-300 pb-2">
                      {cart.length === 0 ? (
                        <div className="flex justify-between items-center font-mono text-[10px] text-gray-500 py-1">
                          <span>Demo Preloads (Candy Shop + i-rabbit)</span>
                          <span>{formatPrice(111000)}</span>
                        </div>
                      ) : (
                        cart.map((item) => (
                          <div key={item.id} className="flex justify-between items-start font-mono text-[11px] text-gray-75 gap-1">
                            <span className="line-clamp-1 flex-1">{item.product.name} (x{item.quantity})</span>
                            <span className="shrink-0 font-bold text-black">{formatPrice(item.product.price * item.quantity)}</span>
                          </div>
                        ))
                      )}
                    </div>

                    {/* Breakdown details */}
                    <div className="flex flex-col gap-1.5 font-mono text-xs select-none border-b border-black pb-2">
                      <div className="flex justify-between text-gray-500">
                        <span>{t("chk_subtotal")}</span>
                        <span>{formatPrice(cart.length === 0 ? 111000 : totalAmount)}</span>
                      </div>
                      
                      {checkoutCouponApplied && (
                        <div className="flex justify-between text-green-600 font-bold">
                          <span>{t("chk_discount")}</span>
                          <span>-{formatPrice(((cart.length === 0 ? 111000 : totalAmount) * checkoutDiscount) / 100)}</span>
                        </div>
                      )}

                      <div className="flex justify-between text-gray-500">
                        <span>{t("chk_shipping_fee_label")}</span>
                        <span>
                          {(cart.length === 0 ? 111000 : totalAmount) >= 100000 ? "FREE" : formatPrice(3000)}
                        </span>
                      </div>
                    </div>

                    {/* Dynamic criterion string requested: 
                        "총 가격(+총 가격이 10만원이 넘었으면 배송비 무료, 안넘었으면 배송비가 든다는 메시지 써줘)" */}
                    <div className="p-2 border border-black rounded bg-mono bg-purple-50 text-[10px] leading-relaxed text-purple-700 font-semibold">
                      {t("chk_shipping_rule")}
                    </div>

                    {/* Grand Total */}
                    <div className="flex items-center justify-between font-display font-black text-black">
                      <span className="text-xs uppercase">{t("chk_order_total")}</span>
                      <span className="text-xl text-brand-magenta font-black">
                        {(() => {
                          const base = cart.length === 0 ? 111000 : totalAmount;
                          const discount = (base * checkoutDiscount) / 100;
                          const shipping = base >= 100000 ? 0 : 3000;
                          return formatPrice(base - discount + shipping);
                        })()}
                      </span>
                    </div>

                    {/* Submission button */}
                    <button 
                      onClick={() => {
                        if (!checkoutLastName.trim() || !checkoutFirstName.trim() || !checkoutPhone.trim() || !checkoutAddress.trim() || !checkoutDetail.trim()) {
                          showToast(t("chk_missing_fields"));
                          return;
                        }

                        if (checkoutPayment === "card") {
                          if (!checkoutCardNum.trim() || !checkoutCardExpiry.trim() || !checkoutCardCvv.trim() || !checkoutCardHolderName.trim()) {
                            showToast(t("chk_missing_card_fields"));
                            return;
                          }
                        }

                        // Success Actions
                        showToast(t("chk_success_msg"));
                        setCart([]);
                        setIsCheckoutOpen(false);
                        
                        // Clear checkout states
                        setCheckoutLastName("");
                        setCheckoutFirstName("");
                        setCheckoutPhone("");
                        setCheckoutZip("");
                        setCheckoutAddress("");
                        setCheckoutDetail("");
                        setCheckoutCoupon("");
                        setCheckoutCouponApplied(false);
                        setCheckoutDiscount(0);
                        setCheckoutCardNum("");
                        setCheckoutCardExpiry("");
                        setCheckoutCardCvv("");
                        setCheckoutCardHolderName("");
                      }}
                      className="w-full mt-2 bg-brand-magenta text-white hover:bg-opacity-90 font-mono text-sm font-black py-3 rounded border-3 border-black shadow-[4px_4px_0_0_#121212] y2k-btn-push flex items-center justify-center gap-2 cursor-pointer text-center"
                    >
                      <Sparkle className="w-4 h-4 text-white animate-spin shrink-0" />
                      <span>{t("chk_pay_now")} ʚ(•”̮•)ɞ</span>
                    </button>

                  </div>

                </div>

              </div>
              
              {/* Footer decorative */}
              <div className="p-3 border-t-2 border-black bg-white flex justify-center items-center font-mono text-[9px] text-gray-400 tracking-wider uppercase select-none">
                🔒 IGUSA SECURE 256-BIT SSL ENCRYPTED GATEWAY
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>


      {/* 🖤 REAL-TIME ACCOUNT & CYBER PORTAL MODAL */}
      <AnimatePresence>
        {isAccountOpen && (
          <div className="fixed inset-0 z-50 overflow-y-auto overflow-x-hidden flex items-center justify-center p-4">
            {/* dark backdrop mask */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-xs cursor-pointer"
              onClick={() => setIsAccountOpen(false)}
            />

            {/* account modal panel */}
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-2xl bg-white border-4 border-black shadow-[8px_8px_0_0_#121212] flex flex-col z-10 relative overflow-hidden"
            >
              {/* Header bar */}
              <div className="p-3 border-b-3 border-black bg-candy-pink flex items-center justify-between select-none">
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5 text-black animate-pulse" />
                  <span className="font-display font-extrabold text-sm md:text-base text-black uppercase tracking-wider">
                    IGUSA PORTAL 🖤
                  </span>
                </div>
                <button 
                  onClick={() => setIsAccountOpen(false)}
                  className="p-1 border-2 border-black rounded bg-white hover:bg-slate-50 y2k-btn-push cursor-pointer lg:px-2"
                >
                  <X className="w-4 h-4 text-black inline" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-5 md:p-6 bg-purple-50 flex flex-col gap-6 max-h-[75vh] overflow-y-auto">
                {!isLoggedIn ? (
                  /* LOGIN VIEW */
                  <div className="flex flex-col gap-4">
                    <div className="text-center mb-2">
                      <h2 className="font-display font-extrabold text-2xl text-black uppercase tracking-widest">
                        SIGN IN / ログイン
                      </h2>
                      <p className="font-sans text-xs text-gray-500 mt-1">
                        WELCOME TO IGUSA! Discover the New Collection TOO CUTE TOO COOL ₍｡ ' ꒳ ' ｡₎
                      </p>
                    </div>

                    {/* Form block */}
                    <form 
                      onSubmit={(e) => {
                        e.preventDefault();
                        if (!loginEmail.trim()) {
                          showToast("이메일 주소를 입력해주세요! 🖤");
                          return;
                        }
                        setIsLoggedIn(true);
                        showToast(`성공적으로 로그인되었습니다! 환영합니다 ʚ(•”̮•)ɞ`);
                      }}
                      className="bg-white border-3 border-black p-5 shadow-[4px_4px_0_0_#121212] flex flex-col gap-4"
                    >
                      <div className="flex flex-col gap-1">
                        <label className="font-mono text-xs font-bold text-gray-700 uppercase">
                          Email Address ({t("account_email")})
                        </label>
                        <input 
                          type="email"
                          required
                          value={loginEmail}
                          onChange={(e) => setLoginEmail(e.target.value)}
                          placeholder="subaru0401daisuki@gmail.com"
                          className="w-full bg-slate-50 border-2 border-black p-2.5 font-mono text-sm focus:bg-white focus:outline-none focus:ring-0"
                        />
                      </div>

                      <div className="flex flex-col gap-1">
                        <label className="font-mono text-xs font-bold text-gray-700 uppercase">
                          Password ({t("account_password")})
                        </label>
                        <input 
                          type="password"
                          required
                          placeholder="••••••••"
                          defaultValue="subaru1234"
                          className="w-full bg-slate-50 border-2 border-black p-2.5 font-mono text-sm focus:bg-white focus:outline-none focus:ring-0"
                        />
                      </div>

                      <div className="flex items-center gap-2 my-1">
                        <input 
                          type="checkbox" 
                          id="remember-me" 
                          className="w-4 h-4 accent-brand-magenta cursor-pointer"
                          defaultChecked
                        />
                        <label htmlFor="remember-me" className="font-mono text-xs text-gray-500 cursor-pointer select-none">
                          Remember me
                        </label>
                      </div>

                      <button 
                        type="submit"
                        className="w-full mt-2 bg-slime-green hover:bg-[#A5FF6C] font-mono text-sm font-black py-3 rounded border-3 border-black shadow-[4px_4px_0_0_#121212] y2k-btn-push text-black flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <Sparkle className="w-4 h-4 text-black animate-spin" />
                        <span>ENTER</span>
                      </button>
                    </form>

                    <div className="flex justify-between items-center px-1 font-mono text-[10px] text-gray-400">
                      <span>SECURE PORT LIMIT: 3000</span>
                      <span>SYSTEM VERSION 1.02_ALIVE</span>
                    </div>
                  </div>
                ) : (
                  /* DASHBOARD VIEW (CART & WISHLIST) */
                  <div className="flex flex-col gap-6">
                    {/* Welcome Banner */}
                    <div className="bg-white border-3 border-black p-4 shadow-[4px_4px_0_0_#121212] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 bg-slime-green rounded-full inline-block border border-black animate-ping"></span>
                          <span className="font-mono text-[10px] font-bold text-gray-500 uppercase tracking-widest">ONLINE</span>
                        </div>
                        <h2 className="font-display font-extrabold text-base md:text-lg text-black mt-1 break-all line-clamp-1">
                          HI, {loginEmail}! ʚ(•”̮•)ɞ
                        </h2>
                        <p className="font-sans text-xs text-brand-magenta font-semibold mt-1">
                          {t("account_welcome_msg")}
                        </p>
                      </div>

                      <button 
                        onClick={() => {
                          setIsLoggedIn(false);
                          showToast("로그아웃 되었습니다. 다음에 또 봐서 놀아요! 💫");
                        }}
                        className="py-1.5 px-3 border-2 border-black rounded bg-white hover:bg-slate-50 font-mono text-xs font-bold y2k-btn-push cursor-pointer shadow-[2px_2px_0_0_#000]"
                      >
                        LOGOUT
                      </button>
                    </div>

                    {/* Bottom Split: Cart & Wishlist */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Left Side: Cart items */}
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center justify-between border-b-2 border-black pb-1.5">
                          <h3 className="font-display font-black text-black text-sm flex items-center gap-1.5 uppercase tracking-wider">
                            <ShoppingBag className="w-4.5 h-4.5 text-black" />
                            MY CART ({cart.length})
                          </h3>
                        </div>

                        <div className="flex flex-col gap-3 max-h-[300px] overflow-y-auto py-1 pr-1">
                          {cart.length === 0 ? (
                            <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-6 text-center select-none">
                              <p className="font-mono text-xs text-gray-400">
                                {t("account_cart_empty")}
                              </p>
                              <button 
                                onClick={() => {
                                  setIsAccountOpen(false);
                                  setTimeout(() => {
                                    const el = document.getElementById("catalog-section");
                                    if (el) el.scrollIntoView({ behavior: "smooth" });
                                  }, 150);
                                }}
                                className="mt-3 py-1 px-3 border-2 border-black rounded text-[10px] font-mono font-black bg-slime-green hover:bg-[#bce6aa] y2k-btn-push text-black cursor-pointer shadow-[2px_2px_0_0_#000]"
                              >
                                SHOP NEW ITEMS ⚡
                              </button>
                            </div>
                          ) : (
                            cart.map((item) => (
                              <div 
                                key={item.id}
                                className="bg-white border-2 border-black p-2 flex items-center gap-3 relative shadow-[2px_2px_0_0_#121212]"
                              >
                                <div className="w-12 h-16 border border-black overflow-hidden bg-slate-100 shrink-0">
                                  <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <h4 className="font-display font-extrabold text-[11px] text-black line-clamp-1 leading-snug">{item.product.name}</h4>
                                  <p className="font-mono text-[10px] text-gray-400 mt-0.5">QTY: {item.quantity}</p>
                                  <p className="font-mono text-xs text-brand-magenta font-black mt-0.5">
                                    {formatPrice(item.product.price * item.quantity)}
                                  </p>
                                </div>
                                <div className="flex flex-col gap-1 shrink-0">
                                  <div className="flex items-center gap-1">
                                    <button 
                                      onClick={() => updateQuantity(item.id, -1)}
                                      className="p-0.5 border border-black bg-white hover:bg-slate-50 rounded cursor-pointer"
                                    >
                                      <Minus className="w-2.5 h-2.5 text-black" />
                                    </button>
                                    <button 
                                      onClick={() => updateQuantity(item.id, 1)}
                                      className="p-0.5 border border-black bg-white hover:bg-slate-50 rounded cursor-pointer"
                                    >
                                      <Plus className="w-2.5 h-2.5 text-black" />
                                    </button>
                                  </div>
                                  <button 
                                    onClick={() => removeFromCart(item.id)}
                                    className="p-1 border border-black bg-white hover:bg-rose-50 text-[10px] font-mono font-bold rounded cursor-pointer text-center text-red-500"
                                  >
                                    DELETE
                                  </button>
                                </div>
                              </div>
                            ))
                          )}
                        </div>
                      </div>

                      {/* Right Side: Wishlist items */}
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center justify-between border-b-2 border-black pb-1.5">
                          <h3 className="font-display font-black text-black text-sm flex items-center gap-1.5 uppercase tracking-wider">
                            <Heart className="w-4.5 h-4.5 text-rose-500 fill-rose-500" />
                            MY WISHLIST ({products.filter(p => likedProducts[p.id]).length})
                          </h3>
                        </div>

                        <div className="flex flex-col gap-3 max-h-[300px] overflow-y-auto py-1 pr-1">
                          {products.filter(p => likedProducts[p.id]).length === 0 ? (
                            <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-6 text-center select-none">
                              <p className="font-mono text-xs text-gray-400">
                                {t("account_wish_empty_title")}
                              </p>
                              <p className="font-sans text-[10px] text-gray-400 mt-1 leading-relaxed">
                                {t("account_wish_empty_desc")}
                              </p>
                            </div>
                          ) : (
                            products.filter(p => likedProducts[p.id]).map((item) => (
                              <div 
                                key={item.id}
                                className="bg-white border-2 border-black p-2 flex items-center gap-3 relative shadow-[2px_2px_0_0_#121212]"
                              >
                                <div className="w-12 h-16 border border-black overflow-hidden bg-slate-100 shrink-0">
                                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <h4 className="font-display font-extrabold text-[11px] text-black line-clamp-1 leading-snug">{item.name}</h4>
                                  <p className="font-mono text-xs text-brand-magenta font-black mt-1">
                                    {formatPrice(item.price)}
                                  </p>
                                </div>
                                <div className="flex flex-col gap-1 shrink-0">
                                  <button 
                                    onClick={() => {
                                      setSelectedProduct(item);
                                      setIsAccountOpen(false);
                                    }}
                                    className="py-1 px-2 border border-black bg-white hover:bg-slate-50 text-[10px] font-mono font-bold rounded cursor-pointer text-center text-black"
                                  >
                                    VIEW
                                  </button>
                                  <button 
                                    onClick={() => toggleLike(item.id)}
                                    className="p-1 border border-black bg-rose-50 hover:bg-rose-100 rounded flex items-center justify-center cursor-pointer"
                                  >
                                    <Heart className="w-3 h-3 text-rose-500 fill-rose-500" />
                                  </button>
                                </div>
                              </div>
                            ))
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Modal footer decoration */}
              <div className="p-3 border-t-2 border-black bg-white flex justify-center items-center font-mono text-[9px] text-gray-400 tracking-wider uppercase select-none">
                ⚡ HARAJUKU • SEOUL • GLOBAL CONNECTED ⚡
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>


      {/* 🔴 QUICK VIEW POLAROID DIALOG POPUP */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Dark backing overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-xs cursor-pointer text-white"
              onClick={() => setSelectedProduct(null)}
            />

            {/* Main floating Card */}
            <motion.div 
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              className="bg-white border-3 border-black p-4 md:p-6 w-full max-w-lg z-10 y2k-shadow-lg relative select-none flex flex-col gap-4 transform rotate-1"
            >
              
              {/* Close Sticker absolute */}
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute -top-3 -right-3 p-1.5 border-2 border-black bg-cyber-yellow hover:bg-yellow-400 rounded-full y2k-shadow text-black cursor-pointer"
              >
                <X className="w-5 h-5 font-black" />
              </button>

              {/* Title & Badge */}
              <div className="flex items-center gap-2">
                <span className="font-mono text-[9px] font-black border border-black bg-[#A5FF6C] px-2 py-0.5 rounded-sm uppercase">
                  {selectedProduct.category}
                </span>
                <span className="font-mono text-[9px] font-semibold text-gray-400">ID: {selectedProduct.id}</span>
              </div>

              {/* Image & description layout split */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* Product Zoom Box */}
                <div className={`border-2 border-black aspect-square overflow-hidden relative ${selectedProduct.bgColor || "bg-pink-50"}`}>
                  <img 
                    src={selectedProduct.image} 
                    alt={selectedProduct.name} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Floating heart like overlay toggle */}
                  <button 
                    onClick={() => toggleLike(selectedProduct.id)}
                    className="absolute top-2 right-2 p-1.5 bg-white border border-black rounded-full shadow-[2px_2px_0_0_#000] hover:scale-110 active:scale-95 cursor-pointer"
                  >
                    <Heart className={`w-4 h-4 text-rose-500 ${likedProducts[selectedProduct.id] ? "fill-rose-500" : ""}`} />
                  </button>

                </div>

                {/* Information right */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="font-display font-extrabold text-lg md:text-xl text-black">
                      {selectedProduct.name}
                    </h3>
                    
                    <p className="font-mono text-base font-black text-brand-magenta tracking-tight mt-1">
                      {selectedProduct.originalPrice ? (
                        <>
                          <span className="line-through text-gray-400 mr-2">{formatPrice(selectedProduct.originalPrice)}</span>
                          <span>{formatPrice(selectedProduct.price)}</span>
                        </>
                      ) : (
                        formatPrice(selectedProduct.price)
                      )}
                    </p>

                    <p className="font-sans text-xs text-gray-500 mt-2 leading-relaxed">
                      {language === "KO" 
                        ? "이 아이템은 Harajuku Y2K Decora 감성으로 디자인되어, 톡톡 튀는 네온 컬러 코디에 마법 같은 특별함을 더해줍니다. 100% 프리미엄 코튼 소재로 부드럽고 톡톡 튀는 핏을 선사합니다." 
                        : language === "EN" 
                          ? "This item is designed with Harajuku Y2K Decora sensibilities, adding magical specialness to vibrant neon outfits. 100% premium cotton ensures a soft, comfortable fit." 
                          : "このアイテムは原宿Y2Kデコラ感性でデザインされ、弾けるネオンカラーのコーディネートに魔法のような特別さを加えます。100%プレミアムコットン素材で柔らかく、個性的なフィット感を提供します。"}
                    </p>
                  </div>

                  {/* Size Selectors Stickers list */}
                  <div className="mt-4">
                    <span className="font-mono text-[10px] font-black text-black block mb-2 uppercase">
                      {language === "KO" ? "사이즈 스티커 선택:" : language === "EN" ? "Select Size Sticker:" : "サイズステッカー選択:"}
                    </span>
                    <div className="flex gap-2">
                      {["S", "M", "L", "XL"].map((sz) => {
                        const active = quickViewSize === sz;
                        return (
                          <button 
                            key={sz}
                            onClick={() => setQuickViewSize(sz)}
                            className={`w-8 h-8 rounded border-2 border-black font-mono text-xs font-black y2k-btn-push ${
                              active 
                                ? "bg-brand-magenta text-white shadow-[2px_2px_0_0_#121212]" 
                                : "bg-white text-black shadow-[1px_1px_0_0_#121212] hover:bg-slate-50"
                            } cursor-pointer`}
                          >
                            {sz}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                </div>

              </div>

              {/* Cart action block bottom line */}
              <div className="border-t-2 border-dashed border-black pt-4 flex gap-2">
                <button 
                  id="modal-add-to-cart-button"
                  onClick={() => {
                    addToCart(selectedProduct);
                    setSelectedProduct(null);
                  }}
                  className="w-full bg-slime-green hover:bg-[#bce6aa] font-mono text-xs md:text-sm font-black py-3 rounded border-2 border-black y2k-shadow y2k-btn-push text-black flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4 text-black" />
                  <span>
                    {language === "KO" 
                      ? `장바구니 담기 (${quickViewSize} 사이즈)` 
                      : language === "EN" 
                        ? `Add to Cart (${quickViewSize} Size)` 
                        : `カートに入れる (${quickViewSize} サイズ)`}
                  </span>
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>


      {/* 🔴 NEWSLETTER CELEBRATION MODAL */}
      <AnimatePresence>
        {showNewsletterModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-xs cursor-pointer"
              onClick={() => setShowNewsletterModal(false)}
            />

            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white border-3 border-black p-6 w-full max-w-sm z-15 y2k-shadow-lg relative text-center flex flex-col items-center gap-3 transform -rotate-1 select-none"
            >
              <div className="w-12 h-12 bg-candy-pink rounded-full border-2 border-black flex items-center justify-center text-brand-magenta animate-bounce">
                <Sparkle className="w-6 h-6 stroke-[3px]" />
              </div>

              <h3 className="font-display font-extrabold text-xl text-black">
                {language === "KO" ? "CLUB IGUSA 가입 성공! ♥" : language === "EN" ? "Welcome to CLUB IGUSA! ♥" : "CLUB IGUSA入会成功! ♥"}
              </h3>

              <p className="font-sans text-xs text-slate-600 leading-relaxed">
                {language === "KO" 
                  ? "축하합니다! 뉴스레터 이메일 정기 구독자로 등록되셨습니다. 온라인몰 전용 시크릿 할인 쿠폰 코드를 메일로 보내드릴게요! IGUSA의 소식을 인스타그램에서 더 빠르게 확인해보세요!"
                  : language === "EN"
                    ? "Congratulations! You have been registered as a newsletter email subscriber. We will send an online-store-exclusive secret discount coupon code to your email! Follow Igusa on Instagram for more updates!"
                    : "おめでとうございます！ニュースレターの読者として登録されました。オンラインモール専用のシークレット割引クーポンコードをメールでお送りします！IGUSAの最新情報はインスタグラムでいち早くチェックしてください！"}
              </p>

              <div className="font-mono text-[10px] bg-cyber-yellow border-2 border-black p-1 px-3 shadow-[2px_2px_0_0_#000] rotate-2">
                COUPON: IGUSA_26
              </div>

              <button 
                id="close-newsletter-modal"
                onClick={() => setShowNewsletterModal(false)}
                className="w-full bg-black hover:bg-slate-900 text-white font-mono text-xs font-bold py-2 rounded-xs border-2 border-black y2k-shadow y2k-btn-push cursor-pointer"
              >
                {language === "KO" ? "닫기" : language === "EN" ? "Close" : "閉じる"}
              </button>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
