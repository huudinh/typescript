# TS6 Type Inference - Tự động gán type

Type Inference là khả năng trong TypeScript tự động suy luận kiểu dữ liệu của biến dựa trên giá trị mà biến đó được gán vào. Khi bạn khai báo một biến và gán cho nó một giá trị, TypeScript sẽ tự động xác định kiểu dữ liệu của biến đó dựa trên kiểu của giá trị gán vào.

### Tự động gán type

Khi bạn khai báo một biến trong TypeScript mà không gán trực tiếp kiểu dữ liệu, TypeScript sẽ sử dụng tính năng "Type Inference" để tự động suy luận kiểu dữ liệu của biến dựa trên giá trị khởi tạo của nó. Điều này giúp giảm thiểu việc phải khai báo kiểu một cách rõ ràng, làm cho mã TypeScript trở nên ngắn gọn và dễ đọc hơn.

```
let count = 0; 
// TypeScript sẽ tự suy luận kiểu của biến count là number, vì giá trị khởi tạo là 0

let message = 'Hello'; 
// TypeScript sẽ tự suy luận kiểu của biến message là string, vì giá trị khởi tạo là 'Hello'

function add(a, b) {
    return a + b;
}

let result = add(5, 3); 
// TypeScript sẽ suy luận kiểu của biến result là number, vì hàm add trả về số

// TypeScript có thể suy luận các kiểu dữ liệu phức tạp hơn nữa với các cấu trúc dữ liệu phức tạp
let person = {
    name: 'John',
    age: 30
}; 
// TypeScript sẽ tự suy luận kiểu của biến person là { name: string, age: number }

```

Khi TypeScript tự động suy luận kiểu dữ liệu, bạn có thể không cần phải khai báo kiểu một cách rõ ràng, tuy nhiên việc khai báo kiểu có thể giúp tăng tính rõ ràng và dễ bảo trì của mã nguồn.

### Type inference vs. Type annotations

TypeScript cung cấp hai cách để quản lý kiểu dữ liệu: Type Inference (Tự động gán kiểu) và Type Annotations (Định nghĩa kiểu).

Bạn nên sử dụng Type Inference trong các trường hợp sau:

- Khi bạn muốn TypeScript tự động xác định kiểu dữ liệu của biến một cách tự nhiên và dễ đọc.
- Khi bạn khai báo biến và gán giá trị cho nó ngay sau đó mà không cần phải chỉ định kiểu dữ liệu.

```
let count = 0; 
// TypeScript tự suy luận kiểu của count là number

let message = 'Hello'; 
// TypeScript tự suy luận kiểu của message là string

```

Bạn nên sử dụng Type Annotations trong các trường hợp sau:

- Khi bạn muốn rõ ràng định nghĩa kiểu dữ liệu của biến, đặc biệt là khi không có giá trị khởi tạo.
- Khi bạn muốn ép kiểu dữ liệu của biến một cách chính xác, không muốn phụ thuộc vào Type Inference.
- Khi bạn muốn xác định kiểu dữ liệu trả về của một hàm một cách chính xác.

```
let count: number; 
// Khai báo biến count có kiểu number mà không có giá trị khởi tạo

count = 10; 
// Gán giá trị cho biến count sau khi đã khai báo kiểu

function add(a: number, b: number): number {
    return a + b; 
    // Xác định kiểu trả về của hàm add là number
}
```

### Lưu ý về viết chữ Hoa/Thường khi định nghĩa type

Khi định nghĩa kiểu trong TypeScript, việc sử dụng chữ hoa và chữ thường có ý nghĩa quan trọng để phân biệt giữa các loại kiểu và đảm bảo tính chính xác của mã nguồn. Dưới đây là những lưu ý quan trọng về việc viết chữ hoa/thường khi định nghĩa kiểu trong TypeScript:

- Kiểu dữ liệu cơ bản: Các kiểu dữ liệu cơ bản trong TypeScript như number, string, boolean, object, any, void, null, undefined đều được viết bằng chữ thường.

- Kiểu dữ liệu do người dùng định nghĩa (custom types): Khi bạn tự định nghĩa một kiểu dữ liệu (custom type) trong TypeScript, thường nên viết tên kiểu này bằng chữ cái hoa.

```
interface Person {
    name: string;
    age: number;
}
```

- Enum (liệt kê các giá trị): Khi định nghĩa một enum trong TypeScript, tên các thành viên trong enum thường nên viết bằng chữ hoa.

```
enum Color {
    Red,
    Green,
    Blue
}
```

- Type Alias (bí danh kiểu dữ liệu): Đối với type alias, bạn có thể viết tên kiểu bằng chữ thường hoặc chữ hoa tùy theo sở thích và cách đặt tên của bạn.

```
type Point = {
    x: number;
    y: number;
};
```

*Bài tiếp theo [TS7 Number Type](/session/session_006_ts_number.md)*