/* 主要旅行設定：修改日期、航班、飯店狀態時，從這裡開始。 */
const tripData = {
  departure: "2026-11-12T00:00:00+08:00",
  flights: {
    outbound: { date: "2026-11-12", from: "台北桃園", departure: "09:25", to: "曼谷素萬那普", arrival: "12:35" },
    inbound: { date: "2026-11-16", from: "曼谷素萬那普", departure: "13:45", to: "台北桃園", arrival: "18:25" }
  },
  bangkokHotelStatus: "pending", // 可改為 "lumphini" 或 "avani"
  maps: { atta: "https://www.google.com/maps/search/?api=1&query=ATTA+Lakeside+Resort+Suite" }
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const toast = (message) => { const el = $(".toast"); el.textContent = message; el.classList.add("show"); clearTimeout(toast.timer); toast.timer = setTimeout(() => el.classList.remove("show"), 2400); };

function updateCountdown() {
  const target = new Date(tripData.departure);
  const now = new Date();
  const days = Math.ceil((target - now) / 86400000);
  const text = days > 0 ? `距離出發還有 ${days.toLocaleString("zh-TW")} 天` : days === 0 ? "今天出發，旅途愉快！" : "這趟旅行已經出發囉";
  $("#countdown").innerHTML = days > 0 ? `距離出發還有 <strong>${days.toLocaleString("zh-TW")} 天</strong>` : `<strong>${text}</strong>`;
}

function applyHotelStatus() {
  const status = tripData.bangkokHotelStatus;
  const cards = $$("[data-hotel]");
  if (status === "lumphini" || status === "avani") {
    cards.forEach(card => card.hidden = card.dataset.hotel !== status);
    $("#hotel-status-note").textContent = "最後一晚住宿已確認";
  }
}

async function sharePage() {
  const data = { title: document.title, text: "一起看看我們 2026 年的考艾・曼谷家庭旅行！", url: location.href };
  try {
    if (navigator.share) await navigator.share(data);
    else { await navigator.clipboard.writeText(location.href); toast("網址已複製，可以貼到 LINE 囉"); }
  } catch (error) { if (error.name !== "AbortError") toast("請從瀏覽器選單複製這個網址"); }
}

updateCountdown();
applyHotelStatus();
setInterval(updateCountdown, 3600000);

const navToggle = $(".nav-toggle");
navToggle.addEventListener("click", () => { const open = $("#nav-links").classList.toggle("open"); navToggle.setAttribute("aria-expanded", String(open)); });
$$("#nav-links a").forEach(link => link.addEventListener("click", () => { $("#nav-links").classList.remove("open"); navToggle.setAttribute("aria-expanded", "false"); }));

const toggleAll = $("#toggle-all");
toggleAll.addEventListener("click", () => { const shouldOpen = !toggleAll.matches('[aria-pressed="true"]'); $$(".day").forEach(day => day.open = shouldOpen); toggleAll.setAttribute("aria-pressed", String(shouldOpen)); toggleAll.textContent = shouldOpen ? "簡潔模式" : "全部展開"; });

$$(".copy-button").forEach(button => button.addEventListener("click", async () => { try { await navigator.clipboard.writeText(button.dataset.copy); toast("飯店名稱已複製"); } catch { toast("請長按飯店名稱複製"); } }));
$$(".share-button").forEach(button => button.addEventListener("click", sharePage));

const backTop = $(".back-top");
addEventListener("scroll", () => backTop.classList.toggle("visible", scrollY > 700), { passive: true });
backTop.addEventListener("click", () => scrollTo({ top: 0, behavior: "smooth" }));
