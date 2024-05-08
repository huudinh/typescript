# TS16 TypeScript Data Type - Never

### Giới thiệu về Never

Trong TypeScript, never là một kiểu dữ liệu đặc biệt được sử dụng để chỉ ra những giá trị mà không bao giờ xảy ra. Điều này có nghĩa là biến hoặc hàm có kiểu never không thể có giá trị hoặc không bao giờ trả về giá trị

Khi một hàm luôn luôn tạo ra lỗi: Trong trường hợp này, hàm không bao giờ hoàn thành việc thực thi mà luôn tạo ra lỗi

```
function throwError(errorMsg: string): never {
    throw new Error(errorMsg);
}
```

Khi một hàm không bao giờ kết thúc: Đây là trường hợp mà hàm chạy mãi mãi và không bao giờ kết thúc, thường thấy trong các vòng lặp vô hạn.

```
function keepProcessing(): never {
    while (true) {
        console.log('I always does something and never ends.')
    }
}
```

### Phân biệt Never và Void

Trong TypeScript, void và never là hai kiểu dữ liệu đặc biệt với các mục đích sử dụng khác nhau

Kiểu void thường được sử dụng cho các hàm không trả về giá trị. Mặc dù chúng ta thường nói rằng hàm đó “không trả về gì”, nhưng thực tế, nó trả về undefined

```
function logMessage(message: string): void {
    console.log(message);
}
```

Kiểu never được sử dụng cho các hàm không bao giờ hoàn thành. Điều này có nghĩa là hàm đó hoặc là luôn luôn ném ra lỗi, hoặc là chạy mãi mãi mà không dừng lại

```
function throwError(message: string): never {
    throw new Error(message);
}

function infiniteLoop(): never {
    while (true) {}
}
```

Sự khác biệt chính giữa void và never là void vẫn có thể là undefined hoặc null trong khi never không nhận bất cứ giá trị nào

```
let result: void;
result = null; // OK
result = undefined; // OK

let error: never;
error = null; // Error: Type 'null' is not assignable to type 'never'
error = undefined; // Error: Type 'undefined' is not assignable to type 'never'
```

Như vậy, void và never đều được sử dụng để chỉ ra rằng một hàm không trả về giá trị, nhưng void cho phép hàm hoàn thành, trong khi never không

*Bài tiếp theo [TS17 Union Type ](/session/session_017_ts_union.md)*