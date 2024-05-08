# TS15 TypeScript void Type

### void Type là gì

Trong TypeScript, void là một kiểu dữ liệu đặc biệt được sử dụng trong các hàm không trả về giá trị. Khi một hàm được khai báo với kiểu trả về là void, nghĩa là hàm đó không trả về bất kỳ giá trị nào.

```
function log(message: string): void {
    console.log(message);
}
```

Trong ví dụ trên, hàm log không trả về giá trị nào, do đó kiểu trả về của nó được khai báo là void.

Nếu bạn sử dụng kiểu void cho một biến, bạn chỉ có thể gán undefined cho biến đó

```
let result: void = undefined;
```

Tuy nhiên, trong trường hợp này, kiểu void không hữu ích

### Lợi ích của việc dùng void Type

Rõ ràng và dễ hiểu: Khi một hàm có kiểu trả về là void, bạn biết ngay lập tức rằng hàm đó không trả về bất kỳ giá trị nào. Điều này giúp code của bạn trở nên rõ ràng và dễ hiểu

Đảm bảo kiểu an toàn: Khi bạn gán một hàm có kiểu trả về là void cho một biến, TypeScript sẽ đảm bảo rằng bạn không thể sử dụng giá trị trả về (vì không có giá trị trả về) trong các biểu thức hoặc gán cho các biến khác

Hỗ trợ trong các hàm bất đồng bộ: Trong các hàm bất đồng bộ, void thường được sử dụng để chỉ định rằng một Promise không trả về giá trị

```
function alertUser(message: string): void {
    alert(message);
}

async function fetchData(url: string): Promise<void> {
    await fetch(url);
}
```

Trong ví dụ trên, hàm alertUser và fetchData đều không trả về giá trị, do đó kiểu trả về của chúng được khai báo là void


*Bài tiếp theo [TS16 TypeScript Data Type - Never](/session/session_016_ts_never.md)*