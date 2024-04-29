# TS1 TypeScript là gì?

Trước khi học TypeScript thì bạn nên tìm hiểu qua ECMAScript 2015 ES6 bởi TypeScript sử dụng các kỹ thuật nâng cao mà chỉ có ở ES6. 

### Giới thiệu về TypeScript

TypeScript viết tắt TS là lập trình hướng đối tượng (OOP) mã nguồn mở được phát triển bởi Microsoft, được xem là phiên bản nâng cao của JavaScript.

TypeScript có thể sử dụng để phát triển các ứng dụng chạy ở client-side (ReactJS) và server-side (NodeJS).

TypeScript sử dụng tất cả các tính năng của của ECMAScript 2015 (ES6) như classes, modules. Thực ra TypeScript không phải ra đời đầu tiên mà trước đây cũng có một số thư viện như CoffeScript và Dart được phát triển bởi Google, tuy nhiên điểm yếu là hai thư viện này sư dụng cú pháp mới hoàn toàn, điều này khác hoàn toàn với TypeScript, vì vậy tuy ra đời sau nhưng TypeScript vẫn đang nhận được sự đón nhận từ các lập trình viên.

TypeScript sử dụng cú pháp của JavaScript và bổ sung thêm các cú pháp mới để hỗ trợ Type (các kiểu dữ liệu).

Vì TypeScript code được chuyển đổi thành JavaScript code nên việc tích hợp vào các dự án JavaScript trở nên dễ dàng hơn, được thiết kế chủ yếu cho các dự án quy mô lớn.

Cần lưu ý: Browser chỉ có thể hiểu HTML/CSS và JavaScript thuần, không hiểu TypeScript. Vì thế, cần có một công cụ trung gian đứng ra dịch code và đó là TypeScript Compiler.

Mỗi một dự án bạn viết bằng TypeScript cần phải có compiler giúp chuyển dịch code ra thành JavaScript để browser có thể hiểu được.

Để viết TypeScript, file cuối extension là .ts và có thể code js bên trong ts. và có thể rename .js thành .ts để viết code TypeScript.


### Tại sao cần TypeScript trong khi đã có JavaScript?

Các nhà phát triển đã giới thiệu JavaScrip là ngôn ngữ client-side programming. Nhưng khi các lập trình viên sử dụng thì nhận ra rằng, JavaScript có thể sử dụng làm ngôn ngữ server-side programming.

Tuy nhiên, JavaScript code trở nên phức tạp và nặng nề, thậm chí chúng không thể đáp ứng được yêu cầu của ngôn ngữ lập trình hướng đối tượng. Khiến các doanh nghiệp hạn chế sử dụng JavaScript như một công nghệ server-side.

Đó là lý do, TypeScript ra đời để quyết những vấn đề mà JavaScript đang gặp phải. TypeScript là một phần mở rộng của JavaScript, giúp tăng tính kiểm soát và dễ bảo trì cho mã nguồn JavaScript.

### TypeScript và Javascript

Như vậy ta có thể coi TypeScript là cha của Javascript bởi kết quả sau khi biên dịch TypeScript là xuất ra các đoạn mã Javascript

Code TypeScript

```
class Customer {
    Name : string;
    constructor (firstName: string, lastName: string)
    {
            this.Name = firstName + "  " + lastName;
    }
    GetName()
    {
            return "Hello, " + this.Name;
    }
}
```

Biên dịch thành Javascript

```
var Customer = (function () {
    function Customer(firstName, lastName) {
        this.Name = firstName + "  " + lastName;
    }
    Customer.prototype.GetName = function () {
        return "Hello, " + this.Name;
    };
    return Customer;
}());
```

Với hai đoạn code trên thì rõ ràng nhìn vào mã của TypeScript rất là trong sáng và mạch lạc. Bạn có thể sử dụng cú pháp của Javascript khi code TypeScript.

### Nên chọn TypeScript và JavaScript khi nào?

Nếu bạn đang triển khai dự án với nhiều nhóm phát triển, nhiều mã nguồn mở thì TypeScript sẽ là lựa chọn tốt hơn. Vì, TypeScript có khả năng kiểm soát kiểu dữ liệu tại thời điểm biên dịch giúp tránh lỗi và dễ bảo trì hơn. Giúp dự án của bạn có thể hoạt động một cách trơn tru dễ dàng hơn và giảm thời gian sửa các lỗi.

Tuy nhiên, nếu dự án của bạn là một ứng dụng nhỏ hoặc tạo trang web đơn giản, thì JavaScript sẽ là lựa chọn. Vì, JavaScript là một ngôn ngữ lập trình linh hoạt, rộng rãi được sử dụng trên nhiều trình duyệt và hệ điều hành. Với JavaScript, bạn có thể lập trình nhanh chóng và đơn giản mà không cần phải lo lắng về việc kiểm soát kiểu dữ liệu và mã nguồn.

Tóm lại, việc lựa chọn giữa TypeScript và JavaScript phụ thuộc vào tính chất của dự án và mục đích sử dụng.

*Bài tiếp theo [TS2 Cài đặt TypeScript](/lesson/session/session_002_ts_setup.md)*