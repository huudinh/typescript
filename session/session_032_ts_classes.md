# TS32 Classes

Trong TypeScript, Function Overloading (nạp chồng hàm) cho phép bạn thiết lập mối quan hệ giữa các kiểu tham số và kiểu kết quả của một hàm. Điều này khác với việc nạp chồng hàm được hỗ trợ bởi các ngôn ngữ tĩnh khác như C# và Java.

### Hàm đơn giản

Ví dụ, bạn có thể có hai hàm đơn giản như sau:

```
function addNumbers(a: number, b: number): number {
  return a + b;
}

function addStrings(a: string, b: string): string {
  return a + b;
}
```

Trong đó, hàm addNumbers() trả về tổng của hai số, và hàm addStrings() trả về chuỗi ghép của hai chuỗi.

### Nạp chồng hàm

Tuy nhiên, để mô tả mối quan hệ giữa các kiểu được sử dụng bởi một hàm một cách tốt hơn, TypeScript hỗ trợ nạp chồng hàm. Ví dụ:

```
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
  return a + b;
}
```

Trong ví dụ này, chúng ta đã thêm hai nạp chồng vào hàm add(). Nạp chồng đầu tiên cho biết khi các đối số là số, hàm add() nên trả về một số. Nạp chồng thứ hai làm tương tự nhưng cho một chuỗi.

Mỗi nạp chồng hàm định nghĩa một tổ hợp các kiểu được hỗ trợ bởi hàm add(). Nó mô tả ánh xạ giữa các tham số và kết quả mà chúng trả về.

### Overloadings của Typescript khác với các ngôn ngữ lập trình khác

Function Overloading cho phép bạn thiết lập mối quan hệ giữa các kiểu tham số và kiểu kết quả của một hàm.

TypeScript sử dụng một cách tiếp cận khác với việc nạp chồng hàm so với các ngôn ngữ tĩnh khác như C# và Java.

TypeScript không thực sự thực hiện nạp chồng hàm ở thời gian chạy. Thay vào đó, nó chỉ sử dụng nạp chồng hàm để kiểm tra kiểu.

### Giảm bớt việc cần phải sử dụng Function Overloading.

TypeScript cho phép bạn sử dụng Union Types để tạo ra một hàm có thể xử lý nhiều kiểu dữ liệu khác nhau.

Ví dụ, bạn có thể có một hàm add() như sau:

```
function add(a: number | string, b: number | string): number | string {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else if (typeof a === 'string' && typeof b === 'string') {
    return a.concat(b);
  } else {
    throw new Error('Invalid arguments');
  }
}
```

Trong ví dụ này, hàm add() có thể nhận vào hai tham số, mỗi tham số có thể là kiểu number hoặc string. Hàm này sau đó kiểm tra kiểu của các tham số và thực hiện phép cộng hoặc ghép chuỗi tương ứng. Nếu các tham số không phù hợp, hàm sẽ ném ra một lỗi.

Như vậy, thông qua việc sử dụng Union Types, TypeScript cho phép bạn tạo ra các hàm linh hoạt hơn mà không cần phải sử dụng Function Overloading. Tuy nhiên, Function Overloading vẫn có thể hữu ích trong một số trường hợp cụ thể.

### Method Overloading

Method Overloading trong TypeScript cho phép bạn tạo ra nhiều phương thức với cùng một tên nhưng với các tham số khác nhau. Điều này giúp tạo ra một API dễ sử dụng hơn cho người dùng.

```
class Logger {
  log(message: string): void;
  log(message: string, module: string): void;
  log(message: any, module?: any) {
    if (module) {
      console.log(`[${module}] ${message}`);
    } else {
      console.log(message);
    }
  }
}

let logger = new Logger();
logger.log("An important message");
logger.log("An important message in the orders module", "Orders");
```

Trong ví dụ trên, chúng ta đã tạo ra một lớp Logger với phương thức log() được nạp chồng. Phương thức log() có thể được gọi với một hoặc hai tham số.

Tuy nhiên, cần lưu ý rằng TypeScript không thực sự thực hiện nạp chồng phương thức ở thời gian chạy. Thay vào đó, nó chỉ sử dụng nạp chồng phương thức để kiểm tra kiểu. Điều này có nghĩa là bạn cần phải kiểm tra kiểu của các tham số trong cài đặt phương thức và xử lý chúng một cách thích hợp.


*Bài tiếp theo [TS32 Classes](/session/session_032_ts_classes.md)*