import React from 'react';
import { Memory, QuizQuestion } from './types';

// Replace with your actual data
export const COUPLE_INFO = {
  person1: 'Hieu',
  person2: 'Linh',
  anniversary: 'October 26, 2022',
};

// Add your own memories here
export const memoriesData: Memory[] = [
  {
    date: '26/10/2022',
    title: 'Ngày Đầu Tiên',
    description: 'Ngày hành trình tuyệt đẹp của chúng ta bắt đầu. Mọi thứ thật mới mẻ và thú vị! Anh vẫn nhớ như in nụ cười của em hôm ấy, và cách trái tim anh lỡ một nhịp. Đó là khởi đầu cho mãi mãi về sau.',
    imageUrl: 'https://picsum.photos/seed/firstday/400/600',
  },
  {
    date: '24/12/2022',
    title: 'Giáng Sinh Đầu Tiên',
    description: 'Cùng nhau chia sẻ sự diệu kỳ của đêm Giáng Sinh. Ánh đèn thành phố cũng không sáng bằng nụ cười của em. Chúng ta đã đi bên nhau, và hơi ấm từ tay em là tất cả những gì anh cần để cảm thấy trọn vẹn.',
    imageUrl: 'https://picsum.photos/seed/christmas/400/600',
  },
  {
    date: '14/02/2023',
    title: 'Lễ Tình Nhân',
    description: 'Một ngày ngập tràn tình yêu, socola, và anh nhận ra mình đã may mắn đến nhường nào khi có em. Em là món quà tuyệt vời nhất của anh, hôm nay và mỗi ngày. Cảm ơn em đã làm thế giới của anh trở nên tươi đẹp.',
    imageUrl: 'https://picsum.photos/seed/valentine/400/600',
  },
  {
    date: '20/05/2023',
    title: 'Chuyến Đi Biển',
    description: 'Xây lâu đài cát và cùng nhau mơ về tương lai giữa tiếng sóng vỗ. Hoàng hôn chúng ta cùng ngắm thật ngoạn mục, nhưng vẫn không bằng khoảnh khắc anh nhìn em.',
    imageUrl: 'https://picsum.photos/seed/beach/400/600',
  },
  {
    date: '26/10/2023',
    title: 'Kỷ Niệm Một Năm',
    description: 'Một năm đã qua, và một đời đang chờ. Cùng em đi qua trọn vẹn bốn mùa là năm tuyệt vời nhất trong cuộc đời anh. Mỗi ngày trôi qua, anh lại yêu em nhiều hơn một chút.',
    imageUrl: 'https://picsum.photos/seed/anniversary/400/600',
  },
  {
    date: '01/01/2024',
    title: 'Nụ Hôn Năm Mới',
    description: 'Chào đón một năm mới bên nhau, với nhiều hy vọng và tình yêu hơn bao giờ hết. Có em bên cạnh, anh biết rằng năm nay sẽ còn tuyệt vời hơn năm cũ.',
    imageUrl: 'https://picsum.photos/seed/newyear/400/600',
  },
];

export const soulmateQuizData: QuizQuestion[] = [
    { question: "Buổi hẹn hò lý tưởng của hai đứa là gì?", answers: ["Ăn tối lãng mạn dưới ánh nến", "Đi xem phim và ăn bắp rang bơ", "Cùng nhau ở nhà nấu ăn và xem Netflix", "Một chuyến phượt ngẫu hứng đến nơi xa"], correct: 2 },
    { question: "Món quà nào sẽ làm bạn vui nhất?", answers: ["Một món đồ công nghệ mới", "Một cuốn sách hay hoặc album nhạc yêu thích", "Một món đồ trang sức lấp lánh", "Một trải nghiệm đặc biệt (vé xem concert, chuyến du lịch)"], correct: 3 },
    { question: "Khi buồn, bạn muốn người ấy làm gì nhất?", answers: ["Mang đồ ăn ngon đến dỗ dành", "Cho bạn không gian riêng", "Ngồi bên cạnh, im lặng lắng nghe", "Chọc cho bạn cười bằng những câu chuyện hài hước"], correct: 2 },
    { question: "Màu sắc yêu thích của bạn là gì?", answers: ["Màu pastel nhẹ nhàng (hồng, xanh mint)", "Màu trầm ấm (xanh navy, đỏ burgundy)", "Màu rực rỡ (vàng, cam)", "Màu trung tính (đen, trắng, xám)"], correct: 0 },
    { question: "Mùa nào trong năm bạn thích nhất?", answers: ["Xuân ấm áp, hoa nở", "Hạ sôi động, nắng vàng", "Thu lãng mạn, lá rơi", "Đông se lạnh, thích được ôm"], correct: 3 },
    { question: "Nếu có một siêu năng lực, bạn sẽ chọn gì?", answers: ["Bay lượn tự do", "Đọc suy nghĩ của người khác", "Dịch chuyển tức thời", "Tàng hình"], correct: 2 },
    { question: "Bạn thích nuôi thú cưng nào nhất?", answers: ["Một chú chó trung thành", "Một bé mèo kiêu kỳ", "Cá vàng lấp lánh", "Không nuôi gì cả"], correct: 1 },
    { question: "Thể loại phim yêu thích của hai đứa?", answers: ["Hành động, phiêu lưu", "Tình cảm, lãng mạn", "Kinh dị, giật gân", "Hài hước, giải trí"], correct: 1 },
    { question: "Khi đi du lịch, bạn thuộc tuýp người nào?", answers: ["Lên kế hoạch chi tiết từ A-Z", "Thích khám phá ngẫu hứng", "Nghỉ dưỡng sang chảnh tại resort", "Phượt thủ bụi bặm"], correct: 1 },
    { question: "Buổi sáng cuối tuần hoàn hảo sẽ là...", answers: ["Dậy thật sớm đi tập thể dục", "Ngủ nướng đến trưa", "Đi cà phê, ăn sáng ở một quán xinh xắn", "Dọn dẹp nhà cửa cho gọn gàng"], correct: 2 },
    { question: "Bạn thể hiện tình yêu bằng cách nào?", answers: ["Những lời nói ngọt ngào", "Những cái ôm và cử chỉ âu yếm", "Những món quà bất ngờ", "Hành động quan tâm, chăm sóc"], correct: 3 },
    { question: "Đồ uống yêu thích của bạn?", answers: ["Cà phê đậm đà", "Trà sữa ngọt ngào", "Nước ép trái cây tươi mát", "Một ly cocktail chill"], correct: 1 },
    { question: "Bạn bị ấn tượng bởi điều gì nhất ở người ấy?", answers: ["Nụ cười tỏa nắng", "Trí thông minh và sự hài hước", "Sự dịu dàng và chu đáo", "Phong cách và gu ăn mặc"], correct: 2 },
    { question: "Bài hát nào miêu tả đúng nhất về tình yêu của hai bạn?", answers: ["Một bản ballad nhẹ nhàng", "Một bài pop vui tươi", "Một ca khúc rock sôi động", "Một giai điệu classic bất hủ"], correct: 0 },
    { question: "Nếu có cỗ máy thời gian, bạn sẽ đi đâu?", answers: ["Quay về quá khứ để sửa chữa sai lầm", "Đến tương lai xem hai đứa ra sao", "Trải nghiệm một thời đại lịch sử huy hoàng", "Ở yên hiện tại, vì nó là tuyệt nhất"], correct: 3 },
    { question: "Bạn định nghĩa 'nhà' là gì?", answers: ["Là nơi có gia đình, ba mẹ", "Là căn hộ/ngôi nhà mình đang ở", "Là bất cứ đâu, miễn là có người ấy bên cạnh", "Là nơi mình cảm thấy bình yên trong tâm hồn"], correct: 2 },
    { question: "Điều gì khiến bạn cảm thấy được yêu thương nhất?", answers: ["Khi người ấy nói 'Anh/Em yêu em/anh'", "Khi người ấy nhớ những điều nhỏ nhặt về mình", "Khi người ấy luôn ủng hộ ước mơ của mình", "Khi người ấy bất ngờ xuất hiện lúc mình cần nhất"], correct: 1 },
    { question: "Món ăn nào bạn có thể ăn hoài không chán?", answers: ["Đồ ăn vặt (bánh tráng trộn, trà sữa)", "Một món ăn mẹ nấu", "Pizza hoặc đồ ăn nhanh", "Một tô phở nóng hổi"], correct: 3 },
    { question: "Khi cãi nhau, bạn thường làm gì trước?", answers: ["Chủ động làm hòa", "Im lặng chờ người kia nói chuyện", "Bỏ đi cho khuây khỏa", "Phân tích đúng sai rõ ràng"], correct: 0 },
    { question: "Ước mơ lớn nhất của bạn là gì?", answers: ["Có một sự nghiệp thành công", "Đi du lịch vòng quanh thế giới", "Xây dựng một gia đình nhỏ hạnh phúc", "Sống một cuộc đời tự do, không ràng buộc"], correct: 2 }
];


// SVG Icons as components
export const HeartIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
  </svg>
);

export const SendIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="22" y1="2" x2="11" y2="13"></line>
    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
  </svg>
);

export const BotIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 8V4H8" />
        <rect width="16" height="12" x="4" y="8" rx="2" />
        <path d="M2 14h2" />
        <path d="M20 14h2" />
        <path d="M15 13v2" />
        <path d="M9 13v2" />
    </svg>
);

export const UserIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
    </svg>
);

export const UsersIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
);