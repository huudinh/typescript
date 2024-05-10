# TS18 Type Aliases

Type Aliases trong TypeScript là một khái niệm cho phép bạn tạo một tên mới cho một loại dữ liệu đã tồn tại

```
type TypeAliasName = ExistingType;
```

Ở đây, TypeAliasName là tên tùy chọn mà bạn muốn gán cho loại dữ liệu, và ExistingType là loại dữ liệu mà bạn muốn đặt tên

Ví dụ, giả sử bạn có một đối tượng với cấu trúc như sau:

```
let person: {name: string, age: number};
```

Bạn có thể tạo một Type Alias để đơn giản hóa cách bạn khai báo các đối tượng tương tự trong tương lai:

```
type IPerson = {name: string, age: number};
let person: IPerson;
```

Bây giờ, bạn có thể sử dụng IPerson để chỉ định loại cho bất kỳ đối tượng nào có cấu trúc giống như {name: string, age: number}12. Điều này giúp mã của bạn trở nên gọn gàng và dễ đọc hơn

### Aliases & union type

Việc sử dụng Type Aliases trong TypeScript rất hữu ích khi làm việc với Union Types

Ví dụ, giả sử bạn có một hàm nhận vào một tham số có thể là một số hoặc một chuỗi:

```
function processInput(input: number | string) {
  // ...
}
```

Bạn có thể tạo một Type Alias cho Union Type number | string như sau:

```
type NumberOrString = number | string;

function processInput(input: NumberOrString) {
  // ...
}
```

Bây giờ, bạn có thể sử dụng NumberOrString ở bất cứ đâu trong mã của bạn mà bạn muốn chỉ định một giá trị có thể là một số hoặc một chuỗi

*Bài tiếp theo [TS19 If else](/session/session_019_ts_if.md)*