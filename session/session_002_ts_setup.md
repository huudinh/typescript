# TS2 Cài đặt TypeScript

### Các bước cài đặt TypeScript

- Cài đặt NodeJS npm

- Cài đặt Git Bash

Git Bash là một phần mềm có chức năng tương tự như Window Command Line, nghĩa là bạn sẽ gõ những dòng lệnh command line ở trong phần mềm này thay vì sử dụng cái có sẵn của Window. 

- Kiểm tra cài đặt

```
npm -v
```

- Cài đặt TypeScrip

```
npm install -g typescript
```

Bạn nhập dòng lệnh vào cửa sổ command line của Git Bash và chờ nó cài đặt thành công.

### Biên dịch TypeScript

Phần đuôi mở rộng của TypeScript sẽ là .ts, vì vậy khi tạo một file mới thì bạn cần phải đặt tên tên là name.ts chứ không phải là name.js.

Để biên dịch TypeScript sang Javascript thì bạn mở cửa sổ Git Base và cd đến thư mục chứa file typescript rồi gõ lệnh sau:

```
tcs helloWord.ts
```

Trong đó helloWord.ts là tên của file TypeScript. Sau khi biên dịch sẽ có một file có tên là helloWord.js nằm cùng cấp với file Customer.ts, file này sẽ là file chứa mã Javascript sau khi biên dịch.

Ví dụ: Bạn tạo một file tên là customer.ts với đường dẫn như sau D:/typescript/customer.ts. Tiếp theo bạn nhập nội dung sau vào file này:

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
let cust = new Customer("Jimi","Scott");
```

Sau đó bạn chạy hai lệnh sau để thực hiện biên dịch file Customer.ts

- Lệnh 1: cd đến thư mục chứa file Customer.ts

```
cd D:/typescript
```

- Lệnh 2: Thực hiện biên dịch file Customer.ts

```
tsc Customer.ts
```

Tiếp theo bạn vào thư mục D:/typescript thì sẽ thấy xuất hiện thêm một file Custome.js với nội dung như sau:

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
var cust = new Customer("Jimi", "Scott");
```

Như vậy là ta đã biên dịch thành công và sau này khi sử dụng thì ta sẽ sử dụng file Customer.js này.

### Chay Code TypeScript

#### Cách 1: sử dụng nodejs

```
node ten_file.js
```
Để chạy code trên bạn cần biên dịch từ ts => js bằng câu lệnh

```
tcs ten_file.ts
```

Hoặc sử dụng thư viện ts-node 

Bạn cần cài đặt thư viện ts-node 

```
npm install -g ts-node

```
Sau đó gọi trực tiếp file .ts

```
ts-node ten_file.ts
```

Lưu ý với câu lệnh này bạn ko cần không tạo ra file .js 

#### Cách 2: sử dụng browser (với file .js)

Đây là phương pháp thông thường khi bạn nhúng file js vao file html thông qua thẻ <script src="ten_file_js"></script>
Để chạy được phương pháp này bạn cần biên dịch từ ts => js bằng câu lệnh

```
tcs ten_file.ts
```

*Bài tiếp theo [TS3 Tại Sao Lại Cần TypeScript](/session/session_003_ts_why.md)*