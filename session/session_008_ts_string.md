# TS8 String Type

Kiểu dữ liệu string được sử dụng để đại diện cho các giá trị chuỗi. Đây là một kiểu cơ bản trong TypeScript và tương tự như trong JavaScript.

### Khai báo biến kiểu string

```
let message: string = "Hello TypeScript!";
```

Trong ví dụ này, biến message được khai báo với kiểu string và gán giá trị là "Hello TypeScript!".

### Sử dụng single quotes hoặc double quotes

Trong TypeScript, bạn có thể sử dụng cả single quotes (') hoặc double quotes (") để khai báo chuỗi:

```
let singleQuoted: string = 'This is a string with single quotes.';
let doubleQuoted: string = "This is a string with double quotes.";
```

Cả hai cách đều là hợp lệ và tương đương với nhau.

### Sử dụng template literals

Template literals là một tính năng mạnh mẽ trong TypeScript cho phép nhúng biểu thức JavaScript vào trong chuỗi. Để sử dụng template literals, bạn sử dụng dấu backtick (`) để bao quanh chuỗi:

```
let fullName: string = "John Doe";
let greeting: string = `Hello, ${fullName}!`;
```

Trong ví dụ này, biến greeting sử dụng template literals để nhúng giá trị của biến fullName vào trong chuỗi.

### Các phương thức xử lý chuỗi

Bạn có thể sử dụng các phương thức xử lý chuỗi tương tự như trong JavaScript, chẳng hạn như charAt, substring, toUpperCase, toLowerCase, split, concat, v.v.

```
let sentence: string = "JavaScript is fun!";
console.log(sentence.charAt(0)); // Output: J
console.log(sentence.substring(0, 10)); // Output: JavaScript
console.log(sentence.toUpperCase()); // Output: JAVASCRIPT IS FUN!
console.log(sentence.split(" ")); // Output: ["JavaScript", "is", "fun!"]
```

### Kiểu dữ liệu của chuỗi

Kiểu dữ liệu string là một trong các kiểu dữ liệu cơ bản, và nó thể hiện một chuỗi các ký tự Unicode. TypeScript hỗ trợ các phương thức và tính năng mạnh mẽ cho việc xử lý chuỗi, giúp bạn làm việc hiệu quả với các kiểu dữ liệu này trong ứng dụng TypeScript của mình.


*Bài tiếp theo [TS9 Boolean Type](/session/session_009_ts_boolean.md)*