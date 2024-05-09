# TS17 Union Type

Union Type trong TypeScript là một tính năng cho phép bạn khai báo một biến hoặc một hàm có thể giữ/ trả về một trong số các loại giá trị

```
let value: string | number;
```

Điều này cho thấy biến value có thể là một chuỗi hoặc một số

Union Type mô tả một giá trị có thể là một trong số các loại. Chúng ta sử dụng dấu thanh đứng ( | ) để phân tách mỗi loại, vì vậy number | string | boolean là loại của một giá trị có thể là một số, một chuỗi, hoặc một boolean.

```
function add(a: number | string, b: number | string) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
   
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }

    throw new Error('Parameters must be numbers or strings');
}
```

Hàm add nhận vào hai tham số, a và b, mỗi tham số có thể là một số hoặc một chuỗi.

Nếu cả a và b đều là số, hàm sẽ trả về tổng của chúng. Nếu cả a và b đều là chuỗi, hàm sẽ trả về chuỗi kết quả của việc nối a và b. Nếu a và b không cùng loại (một là số và một là chuỗi) hoặc không phải là số hoặc chuỗi, hàm sẽ ném ra một lỗi.

*Bài tiếp theo [TS18 Type Aliases](/session/session_018_ts_aliases.md)*