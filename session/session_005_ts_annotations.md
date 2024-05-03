# TS5 Type Annotations
### Annotations là gì ?

Trong TypeScript, “annotations” thường được hiểu là việc sử dụng kiểu dữ liệu tĩnh để chỉ định rõ kiểu dữ liệu cho các định danh như biến, hàm, đối tượng. TypeScript sử dụng cú pháp : type sau một định danh để làm type annotation, trong đó type có thể là bất kỳ kiểu dữ liệu hợp lệ nào. 

### TypeScript sử dụng cú pháp

:type sau khi định nghĩa biến. Một khi đã khai báo type, chúng ta sẽ không thể thay đổi nó (static type)

Ví dụ:

```
let name: string = 'John';
let age: number = 25;
```

Trong ví dụ trên, name và age là các biến với type annotations là string và number

### Với kiểu dữ liệu nguyên thủy (primitive data-type)

```
let count: number;

count = 1; 
// Đúng, vì 1 là một số.

count = 'name'; 
// Lỗi, vì 'name' không phải là một số.

```

Bạn cũng có thể khai báo kiểu dữ liệu và khởi tạo giá trị cho biến ngay từ đầu:

```
let count: number = 1; 
// Đúng, vì 1 là một số.
```

Điều này giúp đảm bảo rằng biến count chỉ được sử dụng như một số, giúp giảm thiểu lỗi và tăng tính minh bạch cho code của bạn.

### Dữ liệu tham chiếu - References data types:

```
let names: string[] = ['a', 'b', 'c']; 
// Mảng chỉ chứa chuỗi

names.push(1); 
// Lỗi, vì 1 không phải là chuỗi

```

Vì names là một mảng chỉ chứa chuỗi, nên khi bạn cố gắng thêm một số vào mảng này, TypeScript sẽ báo lỗi

Điều này giúp đảm bảo rằng mảng names chỉ chứa các chuỗi. TypeScript rất hữu ích trong việc kiểm soát kiểu dữ liệu và giúp phát hiện lỗi sớm trong quá trình phát triển.


*Bài tiếp theo [TS6 Type Inference - Tự động gán type](/session/session_006_ts_inference.md)*