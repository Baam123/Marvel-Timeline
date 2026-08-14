const ERAS_1 = [
  {
    era: "THỜI TIỀN SỬ", desc: "Trước cả khi loài người biết ghi chép lịch sử.", items: [
      { title: "Eternals", year: "~5000 TCN - 2024", phase: "Khởi Nguyên", type: "Phim", poster: "./img/eternals.webp", desc: "Nhóm mười Eternals được cử đến Trái Đất bảo vệ loài người khỏi Deviants, sống qua hàng ngàn năm cho đến khi sự thật về nhiệm vụ thật sự bị hé lộ." },
    ]
  },
  {
    era: "TRƯỚC KỶ NGUYÊN ANH HÙNG", desc: "Nền móng của SHIELD và các loại huyết thanh siêu năng lực.", items: [
      { title: "Captain America: The First Avenger", year: "1943 - 1945", phase: "Nền Móng", type: "Phim", poster: "./img/captain_america.webp", desc: "Steve Rogers trở thành Captain America nhờ Huyết Thanh Siêu Chiến Binh, đối đầu HYDRA trước khi bị đóng băng ngoài khơi Bắc Cực." },
      { title: "Captain Marvel", year: "1995", phase: "Nền Móng", type: "Phim", poster: "./img/captain_marvel.webp", desc: "Carol Danvers tìm lại ký ức bị đánh cắp, đối đầu Kree và Skrull, gặp gỡ Nick Fury khi ông còn hai mắt lành lặn." },
    ]
  },
  {
    era: "PHASE 1 — SỰ TRỖI DẬY CỦA CÁC ANH HÙNG", desc: "Từng anh hùng xuất hiện riêng lẻ, dẫn đến cuộc quy tụ đầu tiên.", items: [
      { title: "Iron Man", year: "2010", phase: "Phase 1", type: "Phim", poster: "./img/iron_man.webp", desc: "Tony Stark chế tạo bộ giáp đầu tiên để thoát khỏi bị bắt giữ, rồi trở thành Iron Man để chuộc lỗi." },
      { title: "Iron Man 2", year: "2011", phase: "Phase 1", type: "Phim", poster: "./img/iron_man_2.webp", desc: "Tony đối mặt hậu quả của việc lộ danh tính, chống lại Ivan Vanko và âm mưu của Justin Hammer." },
      { title: "The Incredible Hulk", year: "2010 - 2011", phase: "Phase 1", type: "Phim", poster: "./img/incredible_hulk.webp", desc: "Bruce Banner chạy trốn quân đội trong lúc tìm cách kiểm soát con quái vật bên trong mình." },
      { title: "Thor", year: "2011", phase: "Phase 1", type: "Phim", poster: "./img/thor.webp", desc: "Hoàng tử Asgard kiêu ngạo bị trục xuất xuống Trái Đất, học cách xứng đáng cầm lại búa Mjolnir." },
      { title: "The Avengers", year: "2012", phase: "Phase 1", type: "Phim", poster: "./img/the_avengers.webp", desc: "Loki dẫn quân Chitauri xâm lược New York, buộc Nick Fury tập hợp đội Avengers lần đầu." },
    ]
  },
  {
    era: "PHASE 2 — MỞ RỘNG THẾ GIỚI", desc: "Vũ trụ mở rộng ra không gian, SHIELD dần sụp đổ từ bên trong.", items: [
      { title: "Thor: The Dark World", year: "2013", phase: "Phase 2", type: "Phim", poster: "./img/thor_the_dark_world.webp", desc: "Thor bảo vệ cửu giới khỏi Malekith và Dark Elves đang dùng Aether nhấn chìm vũ trụ vào bóng tối." },
      { title: "Iron Man 3", year: "2013", phase: "Phase 2", type: "Phim", poster: "./img/iron_man_3.webp", desc: "Tony vật lộn chấn thương tâm lý sau New York trong lúc truy đuổi kẻ khủng bố Mandarin." },
      { title: "Captain America: The Winter Soldier", year: "2014", phase: "Phase 2", type: "Phim", poster: "./img/captain_america_the_winter_soldier.webp", desc: "Hai năm sau trận New York, Steve Rogers phải tìm cách hòa nhập vào thế giới hiện đại, kết hợp cùng Natasha Romanoff/Black Widow để lật tẩy âm mưu HYDRA cài cắm sâu trong lòng SHIELD tại Washington, D.C." },
      { title: "Guardians of the Galaxy", year: "2014", phase: "Phase 2", type: "Phim", poster: "./img/guardians_of_the_galaxy.webp", desc: "Peter Quill cùng nhóm tội phạm ngoài hành tinh hợp sức bảo vệ một viên đá quyền năng khỏi Ronan." },
      { title: "Guardians of the Galaxy Vol. 2", year: "2014", phase: "Phase 2", type: "Phim", poster: "./img/guardians_of_the_galaxy_vol_2.webp", desc: "Peter Quill gặp lại cha ruột — Ego — và phát hiện sự thật đáng sợ về thân thế mình." },
      { title: "Avengers: Age of Ultron", year: "2015", phase: "Phase 2", type: "Phim", poster: "./img/avengers_age_of_ultron.webp", desc: "Tony vô tình tạo ra Ultron, AI cho rằng cách duy nhất cứu Trái Đất là xóa sổ loài người." },
      { title: "Ant-Man", year: "2015", phase: "Phase 2", type: "Phim", poster: "./img/ant_man.webp", desc: "Scott Lang khoác bộ đồ thu nhỏ của Hank Pym để thực hiện phi vụ trộm ngăn công nghệ Pym rơi vào tay kẻ xấu." },
    ]
  },
  {
    era: "PHASE 3 (ĐẦU) — RẠN NỨT NỘI BỘ", desc: "Avengers chia rẽ, các anh hùng mới xuất hiện khắp thế giới.", items: [
      { title: "Captain America: Civil War", year: "2016", phase: "Phase 3", type: "Phim", poster: "./img/captain_america_civil_war.webp", desc: "Hiệp Định Sokovia chia rẽ Avengers thành hai phe, đẩy Steve Rogers và Tony Stark đến bờ vực tan vỡ." },
      { title: "Black Widow", year: "2016 (sau Civil War)", phase: "Phase 3", type: "Phim", poster: "./img/black_widow.webp", desc: "Natasha Romanoff đối mặt quá khứ điệp viên Red Room khi âm mưu cũ trỗi dậy." },
      { title: "Black Panther", year: "2016 (ngay sau Civil War)", phase: "Phase 3", type: "Phim", poster: "./img/black_panther.webp", desc: "T'Challa lên ngôi vua Wakanda, đối đầu Killmonger — kẻ thách thức cả ngai vàng lẫn triết lý cô lập đất nước." },
      { title: "Spider-Man: Homecoming", year: "2016", phase: "Phase 3", type: "Phim", poster: "./img/spider_man_homecoming.webp", desc: "Peter Parker háo hức chứng minh bản thân với Tony Stark khi đối đầu Vulture." },
      { title: "Doctor Strange", year: "2016 - 2017", phase: "Phase 3", type: "Phim", poster: "./img/doctor_strange.webp", desc: "Stephen Strange tìm đến pháp thuật để chữa lành đôi tay, trở thành người bảo vệ Trái Đất." },
      { title: "Thor: Ragnarok", year: "2017", phase: "Phase 3", type: "Phim", poster: "./img/thor_ragnarok.webp", desc: "Thor bị lưu đày đến Sakaar, hợp sức cùng Hulk để ngăn Hela và Ragnarok của Asgard." },
    ]
  },
  {
    era: "PHASE 3 (CUỐI) — CUỘC CHIẾN VÔ CỰC", desc: "Thanos xuất hiện để hoàn thành sứ mệnh cân bằng vũ trụ.", items: [
      { title: "Ant-Man and the Wasp", year: "2018", phase: "Phase 3", type: "Phim", poster: "./img/ant_man_and_the_wasp.webp", desc: "Scott Lang cùng Hope van Dyne chạy đua giải cứu Janet từ Lượng Tử Giới, ngay trước khi cú búng tay của Thanos ập đến." },
      { title: "Avengers: Infinity War", year: "2018", phase: "Phase 3", type: "Phim", poster: "./img/avengers_infinity_war.webp", desc: "Thanos truy lùng sáu viên đá Vô Cực để búng tay xóa sổ một nửa sự sống trong vũ trụ." },
    ]
  },
  {
    era: "CÚ BÚNG TAY & ENDGAME", desc: "Năm năm sau thảm kịch và cái giá phải trả để đảo ngược tất cả.", items: [
      { title: "Avengers: Endgame", year: "2018 - 2023", phase: "Blip", type: "Phim", poster: "./img/avengers_endgame.webp", desc: "Sau 5 năm đau buồn, các Avengers du hành thời gian lấy lại đá Vô Cực và đảo ngược cú búng tay — với cái giá cực lớn." },
    ]
  },
];

const ERAS_2 = [
  {
    era: "LOKI — ĐIỂM RẼ NHÁNH CHÍNH THỨC", desc: "Ngay sau Endgame, một biến thể của Loki bị TVA bắt giữ. Cái chết của He Who Remains ở cuối mùa phim phá vỡ Dòng Thời Gian Thiêng Liêng, chính thức khai sinh đa vũ trụ.", items: [
      {
        title: "Loki (Phần 1)", year: "2023 (ngay sau Endgame, mốc TVA)", phase: "Trục chính", type: "Series", poster: "./img/loki.webp",
        desc: "Một biến thể của Loki bị TVA bắt giữ, vô tình làm rạn nứt Dòng Thời Gian Thiêng Liêng và khai sinh đa vũ trụ.",
        twigs: [{ title: "What If...?", year: "Ngoài dòng thời gian chính", type: "Series", poster: "./img/what_if.webp", desc: "Tuyển tập những vũ trụ song song nơi một quyết định thay đổi duy nhất tạo ra kết cục hoàn toàn khác." }]
      },
    ]
  },
  {
    era: "HẬU BLIP — ĐA VŨ TRỤ BẮT ĐẦU HÉ MỞ", desc: "Thế giới hồi phục sau Blip. Đây cũng là lúc những nhánh phụ đầu tiên bắt đầu tỏa ra từ trục chính.", items: [
      {
        title: "Spider-Man: Far From Home", year: "2023 (ngay sau Endgame)", phase: "Phase 3", type: "Phim", poster: "./img/spider_man_far_from_home.webp", desc: "Peter Parker du lịch châu Âu, vô tình bị cuốn vào âm mưu của Mysterio.",
        twigs: [{ title: "Spider-Man: No Way Home", year: "2024", type: "Phim", poster: "./img/spider_man_no_way_home.webp", desc: "Danh tính Peter bị lộ làm rạn thực tại, kéo theo phản diện — và cả người hùng — từ những vũ trụ Spider-Man khác." }]
      },
      {
        title: "WandaVision", year: "2023", phase: "Phase 4", type: "Series", poster: "./img/wanda_vision.webp",
        desc: "Wanda Maximoff giam mình trong thị trấn Westview do chính mình tạo ra bằng phép thuật, dần đánh mất kiểm soát vì đau buồn.",
        twigs: [{ title: "Doctor Strange in the Multiverse of Madness", year: "2024", type: "Phim", poster: "./img/doctor_strange_in_the_multiverse_of_madness.webp", desc: "Stephen Strange cùng America Chavez du hành đa vũ trụ, chạm trán Illuminati của Trái Đất-838." }]
      },
      { title: "Shang-Chi and the Legend of the Ten Rings", year: "2024", phase: "Phase 4", type: "Phim", poster: "./img/shang_chi_and_the_legend_of_the_ten_rings.webp", desc: "Shang-Chi đối mặt quá khứ và người cha Xu Wenwu — chủ nhân thật sự của Mười Chiếc Nhẫn." },
      { title: "The Falcon and the Winter Soldier", year: "2024", phase: "Phase 4", type: "Series", poster: "./img/the_falcon_and_the_winter_soldier.webp", desc: "Sam Wilson và Bucky Barnes đối đầu nhóm cực đoan Flag Smashers, Sam cân nhắc kế thừa tấm khiên Captain America." },
      { title: "Hawkeye", year: "2024 (Giáng Sinh)", phase: "Phase 4", type: "Series", poster: "./img/hawkeye.webp", desc: "Clint Barton huấn luyện Kate Bishop trong lúc bị truy đuổi bởi tàn dư thế giới ngầm New York." },
      { title: "Moon Knight", year: "2025 (đầu)", phase: "Trục chính", type: "Series", poster: "./img/moon_knight.webp", desc: "Steven Grant phát hiện mình chia sẻ cơ thể với lính đánh thuê Marc Spector, cả hai là avatar của thần Ai Cập Khonshu." },
      {
        title: "Black Panther: Wakanda Forever", year: "2025", phase: "Trục chính", type: "Phim", poster: "./img/black_panther_wakanda_forever.webp",
        desc: "Nữ hoàng Ramonda, Shuri, M'Baku, Okoye và Dora Milaje chiến đấu để bảo vệ quốc gia của họ khỏi sự can thiệp của các thế lực thế giới sau cái chết của Vua T'Challa."
      },
      { title: "Echo", year: "2025", phase: "Trục chính", type: "Series", poster: "./img/echo.webp", desc: "Maya Lopez đối mặt di sản gia đình và đế chế tội phạm của Kingpin, tìm về cội nguồn của mình." },
      {
        title: "She-Hulk: Attorney at Law", year: "2025", phase: "Trục chính", type: "Series", poster: "./img/she_hulk.webp",
        desc: "Jennifer Walters thừa hưởng sức mạnh Hulk qua truyền máu, cân bằng giữa sự nghiệp luật sư và đời siêu anh hùng.",
        twigs: [{ title: "Agatha All Along", year: "2024", type: "Series", poster: "./img/agatha_all_along.webp", desc: "Phù thủy Agatha Harkness, thoát khỏi lời nguyền của Wanda va2 dẫn nhóm phù thủy trong đó gồm có 2 đứa con của Wanda đi qua Con Đường Phù Thủy nguy hiểm." }]
      },
      { title: "Ms. Marvel", year: "2025", phase: "Trục chính", type: "Series", poster: "./img/ms_marvel.webp", desc: "Kamala Khan, cô fangirl của Avengers, khám phá sức mạnh vũ trụ của chính mình gắn với chiếc vòng gia truyền." },
      { title: "Thor: Love and Thunder", year: "2025 - 2026", phase: "Trục chính", type: "Phim", poster: "./img/thor_love_and_thunder.webp", desc: "Thor tìm lại chính mình khi Gorr the God Butcher tiến hành cuộc thảm sát nhắm vào các vị thần khắp vũ trụ, trong lúc Jane Foster trở thành Mighty Thor." },
      { title: "Ironheart", year: "2025 - 2026", phase: "Trục chính", type: "Series", poster: "./img/ironheart.webp", desc: "Thiên tài trẻ Riri Williams tự chế bộ giáp riêng, bị cuốn vào mối quan hệ nguy hiểm với pháp sư Parker Robbins." },
      { title: "Werewolf by Night", year: "2025 (cuối)", phase: "Trục chính", type: "Đặc biệt", poster: "./img/werewolf_by_night.webp", desc: "Một nhóm thợ săn quái vật tụ họp trong tang lễ bí ẩn của Bloodstone để tranh giành một di vật quyền năng." },
      { title: "Guardians of the Galaxy Holiday Special", year: "2025", phase: "Trục chính", type: "Đặc biệt", poster: "./img/guardians_of_the_galaxy_holiday_special.webp", desc: "Nhóm Guardians cố tặng Peter Quill một món quà Giáng Sinh thật đặc biệt bằng cách bắt cóc Kevin Bacon." },
      { title: "Ant-Man and the Wasp: Quantumania", year: "2025 - 2026", phase: "Trục chính", type: "Phim", poster: "./img/ant_man_and_the_wasp_quantumania.webp", desc: "Gia đình Scott Lang bị kéo vào Lượng Tử Giới và chạm trán Kang the Conqueror — kẻ chinh phục thời gian đầy tham vọng." },
      { title: "Guardians of the Galaxy Vol. 3", year: "2025", phase: "Trục chính", type: "Phim", poster: "./img/guardians_of_the_galaxy_vol_3.webp", desc: "Nhóm Guardians chạy đua cứu Rocket, buộc Peter Quill đối mặt tổ chức High Evolutionary đứng sau nguồn gốc của Rocket." },
      { title: "Secret Invasion", year: "2025", phase: "Trục chính", type: "Series", poster: "./img/secret_invasion.webp", desc: "Một phe Skrull mất kiên nhẫn chờ quê hương đã hứa, âm thầm xâm nhập thể chế Trái Đất, buộc Nick Fury trở lại." },
      { title: "The Marvels", year: "2025 - 2026", phase: "Trục chính", type: "Phim", poster: "./img/the_marvels.webp", desc: "Carol Danvers, Kamala Khan và Monica Rambeau bất ngờ hoán đổi vị trí cho nhau mỗi khi dùng năng lực, buộc cả ba phải hợp sức." },
      {
        title: "Loki (Phần 2)", year: "2025", phase: "Trục chính", type: "Series", poster: "./img/loki_2.webp", desc: "Loki chiến đấu để ổn định các nhánh thời gian đang rạn nứt, cố cứu lấy chính TVA khỏi sụp đổ.",
        twigs: [{ title: "Deadpool & Wolverine", year: "2024 (Trái Đất-10005, TVA & Khoảng Không)", type: "Phim", poster: "./img/deadpool_and_wolverine.webp", desc: "Deadpool được chiêu mộ để ngăn vũ trụ của mình sụp đổ, hợp tác cùng một biến thể Wolverine giữa Khoảng Không đa vũ trụ." }]
      },
    ]
  },
  {
    era: "TRỤC CHÍNH TIẾP TỤC", desc: "Chặng cuối cùng của trục chính trước khi mọi thực tại hội tụ.", items: [
      { title: "Captain America: Brave New World", year: "2026", phase: "Trục chính", type: "Phim", poster: "./img/captain_america_brave_new_world.webp", desc: "Sam Wilson, Captain America mới, khui ra âm mưu toàn cầu liên quan một nguyên tố bí ẩn, đối đầu Thaddeus Ross." },
      {
        title: "Thunderbolts*", year: "2026", phase: "Trục chính", type: "Phim", poster: "./img/thunderbolts.webp",
        desc: "Nhóm đặc vụ mang màu xám đạo đức — Yelena, Bucky, Red Guardian, Ghost, US Agent — bị dồn vào thế phải hợp sức, trở thành New Avengers.",
        twigs: [{ title: "The Fantastic Four: First Steps", year: "Trái Đất-828", type: "Phim", poster: "./img/the_fantastic_four_first_steps.webp", desc: "Gia Đình Marvel Đệ Nhất bảo vệ thực tại song song Trái Đất-828 khỏi thần hủy diệt Galactus và sứ giả Silver Surfer." }]
      },
      { title: "Daredevil: Born Again", year: "2026", phase: "Trục chính", type: "Series", poster: "./img/daredevil_born_again.webp", desc: "Matt Murdock cân bằng nghề luật sư và vai trò hiệp sĩ bóng đêm khi Wilson Fisk vươn lên nắm quyền thị trưởng New York." },
      { title: "Spider-Man: Brand New Day", year: "2026", phase: "Trục chính", type: "Phim", poster: "./img/spider_man_brand_new_day.webp", desc: "Peter Parker bước vào chương mới của cuộc đời sau thỏa thuận đa vũ trụ từng khiến cả thế giới quên mất anh." },
      { title: "VisionQuest", year: "Cuối 2026", phase: "Trục chính", type: "Series", poster: "./img/visionquest.webp",  desc: "Vision, sau khi được tái tạo từ sự kiện WandaVision, lên đường đi tìm lại bản dạng thật sự của chính mình." },
    ]
  },
];

const EXTERNALS = [
  { title: "Vũ trụ X-Men (Fox, 2000-2020)", desc: "Vũ trụ điện ảnh X-Men kinh điển của 20th Century Fox, tách biệt hoàn toàn khỏi MCU cho đến khi va chạm tại Doomsday." },
];

const DOOMSDAY = {
  title: "Avengers: Doomsday", year: "18/12/2026", phase: "Hội Tụ", type: "Phim", poster: "./img/avengers_doomsday.webp", upcoming: true,
  desc: "Các anh hùng từ ba vũ trụ tách biệt — Dòng Thời Gian Thiêng Liêng, Trái Đất-828 và vũ trụ X-Men — bị đẩy vào một cuộc va chạm chết người, đối mặt mối đe dọa chưa từng có liên quan đến Victor von Doom."
};

const SECRETWARS = {
  title: "Avengers: Secret Wars", year: "17/12/2027", phase: "Kết Thúc Saga", type: "Phim", poster: "./img/avengers_secret_wars.webp", upcoming: true,
  desc: "Chương cuối cùng của Multiverse Saga — số phận của mọi thực tại đang hội tụ được định đoạt một lần và mãi mãi."
};

/* ICONS */
const ICONS = [
  `<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/>`,
  `<path d="M12 2 L14 10 L22 10 L15.5 14.5 L18 22 L12 17 L6 22 L8.5 14.5 L2 10 L10 10 Z"/>`,
  `<path d="M4 4 L20 4 L20 12 C20 18 12 22 12 22 C12 22 4 18 4 12 Z"/>`,
  `<path d="M12 3 L4 8 V16 L12 21 L20 16 V8 Z"/>`,
  `<path d="M3 12 L12 3 L21 12 L12 21 Z"/>`,
];
function svgIcon(i) { return `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.3" stroke-linejoin="round" stroke-linecap="round">${ICONS[i % ICONS.length]}</svg>`; }

function posterInner(item, idx, small) {
  if (item.poster) return `<img src="${item.poster}" alt="${item.title}">`;
  return `<div class="ph">
    ${small ? '' : `<div class="corner"><span>NO-IMG</span><span>#${String(idx + 1).padStart(2, '0')}</span></div>`}
    ${svgIcon(idx)}
    ${small ? '' : `<div class="tag">Dán link ảnh vào<br>trường "poster"</div>`}
  </div>`;
}

function cardHTML(item, idx, opts) {
  opts = opts || {};
  const isBlip = item.phase === 'Blip';
  const typeClass = item.upcoming ? 'type upcoming' : 'type';
  const typeLabel = item.upcoming ? 'SẮP CHIẾU · ' + item.type : item.type;
  return `<div class="card">
    <div class="poster">${posterInner(item, idx, opts.small)}</div>
    <div class="info">
      <div class="metarow">
        <span class="phase ${isBlip ? 'blip' : ''} ${opts.isBranch ? 'branchtag' : ''}">${item.phase || (opts.isBranch ? 'Nhánh đa vũ trụ' : '')}</span>
        <span class="year">${item.year}</span>
      </div>
      <h3>${item.title}</h3>
      <p>${item.desc}</p>
      <span class="${typeClass}">${typeLabel}</span>
    </div>
  </div>`;
}

const TWIG_SVG_L = `<svg viewBox="0 0 40 52" fill="none"><path d="M20 0 V10 C20 22, 10 20, 6 40" stroke="#8d7bd1" stroke-width="1.3" stroke-dasharray="3 4"/><circle cx="20" cy="8" r="3" fill="#0a0d13" stroke="#8d7bd1" stroke-width="1.5"/></svg>`;
const TWIG_SVG_R = `<svg viewBox="0 0 40 52" fill="none"><path d="M20 0 V10 C20 22, 30 20, 34 40" stroke="#8d7bd1" stroke-width="1.3" stroke-dasharray="3 4"/><circle cx="20" cy="8" r="3" fill="#0a0d13" stroke="#8d7bd1" stroke-width="1.5"/></svg>`;

/* RENDER helpers */
let gi = 0;
function renderEras(eraArr, rootEl) {
  eraArr.forEach((eraBlock) => {
    const divider = document.createElement('div');
    divider.className = 'era-divider';
    divider.dataset.eraName = eraBlock.era;
    divider.innerHTML = `<span class="badge ${eraBlock.pivot ? 'pivot' : ''}">${eraBlock.era}</span><div class="desc">${eraBlock.desc}</div>`;
    rootEl.appendChild(divider);

    eraBlock.items.forEach((item) => {
      const side = gi % 2 === 0 ? 'side-l' : 'side-r';
      const entry = document.createElement('div');
      entry.className = `entry ${side} ${item.phase === 'Blip' ? 'blip' : ''}`;
      entry.innerHTML = `${cardHTML(item, gi, {})}<div class="node"><i></i></div>`;
      rootEl.appendChild(entry);
      const trunkSide = side;
      gi++;

      (item.twigs || []).forEach((tw) => {
        const twigSide = trunkSide === 'side-l' ? 'tw-r' : 'tw-l';
        const row = document.createElement('div');
        row.className = `twig-row ${twigSide}`;
        row.innerHTML = `
          <div class="twig-connector">${twigSide === 'tw-l' ? TWIG_SVG_L : TWIG_SVG_R}</div>
          <div class="twig">
            <span class="twig-label">↳ Nhánh phụ</span>
            ${cardHTML(tw, gi, { isBranch: true, small: true })}
          </div>`;
        rootEl.appendChild(row);
        gi++;
      });
    });
  });
}

renderEras(ERAS_1, document.getElementById('root'));
renderEras(ERAS_2, document.getElementById('root2'));

/* RENDER: converge */
const externalsEl = document.getElementById('externals');
EXTERNALS.forEach((ext) => {
  const c = document.createElement('div');
  c.className = 'ext-chip';
  c.innerHTML = `<div class="etitle">${ext.title}</div><p>${ext.desc}</p>`;
  externalsEl.appendChild(c);
});
document.getElementById('spotlight').innerHTML = cardHTML(DOOMSDAY, gi, {}); gi++;
document.getElementById('finale').innerHTML = cardHTML(SECRETWARS, gi, {});

/* scroll reveal */
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
}, { threshold: 0.12 });
document.querySelectorAll('.entry, .twig, .spotlight, .finale').forEach(el => io.observe(el));

/* active era tracker + progress */
const eraLabel = document.getElementById('eraNow');
const progress = document.getElementById('progress');
const dividers = Array.from(document.querySelectorAll('.era-divider'));
const markers = [
  ...dividers.map(d => ({ y: () => d.getBoundingClientRect().top + window.scrollY, name: d.dataset.eraName })),
  { y: () => document.getElementById('converge').getBoundingClientRect().top + window.scrollY, name: 'Hội tụ — Doomsday & Secret Wars' },
];

function onScroll() {
  const y = window.scrollY + 140;
  let current = markers[0]?.name || '—';
  for (const m of markers) { if (m.y() <= y) current = m.name; }
  eraLabel.textContent = current;
  const doc = document.documentElement;
  const pct = (window.scrollY / (doc.scrollHeight - doc.clientHeight)) * 100;
  progress.style.width = Math.min(100, Math.max(0, pct)) + '%';
}
window.addEventListener('scroll', onScroll, { passive: true });
window.addEventListener('resize', onScroll);
onScroll();
