# TS20 switch case

Câu lệnh switch...case trong TypeScript (và JavaScript) được sử dụng để đánh giá một biểu thức, so sánh giá trị của biểu thức với các trường hợp (case), và thực thi mã liên quan đến trường hợp đó.

### Cú pháp 

```
switch (expression) {
    case value1:
        // Mã bên trong trường hợp 1
        break;
    case value2:
        // Mã bên trong trường hợp 2
        break;
    // ...
    default:
        // Mã bên trong trường hợp mặc định (nếu không có trường hợp nào khớp)
        break;
}
```

### Cách hoạt động

Đầu tiên, câu lệnh switch...case đánh giá biểu thức.

Sau đó, nó tìm kiếm trường hợp (case) đầu tiên mà giá trị của biểu thức khớp với giá trị (value1, value2, … valueN).

Câu lệnh switch...case sẽ thực thi mã bên trong trường hợp đó.

Nếu không tìm thấy trường hợp khớp, nó sẽ thực thi mã bên trong trường hợp mặc định (nếu có).

### Lệnh break

Lệnh break được kết hợp với mỗi trường hợp để đảm bảo rằng khi thực thi xong mã trong trường hợp, điều khiển sẽ thoát ra khỏi câu lệnh switch...case.

Nếu không có lệnh break, chương trình sẽ tiếp tục thực thi tại trường hợp tiếp theo.

### ví dụ về group case: (waterfall)

```
let month = 2;
let year = 2020;
let day = 0;

switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        day = 31;
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        day = 30;
        break;
    case 2:
        // Năm nhuận
        if (((year % 4 == 0) && !(year % 100 == 0)) || (year % 400 == 0))
            day = 29;
        else
            day = 28;
        break;
    default:
        throw Error('Tháng không hợp lệ');
}

console.log(`Tháng ${month} năm ${year} có ${day} ngày.`);

```

*Bài tiếp theo [TS21 for ](/session/session_021_ts_for.md)*