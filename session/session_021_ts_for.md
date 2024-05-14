# TS21 TypeScript for
### Cú pháp for loop

Chúng ta có thể dùng if/else or switch/case, tuy nhiên, với vòng lặp, nó giúp code ngắn hơn và thực thi nhiều lần

```
for(initialization; condition; expression) {
// statement
}
```

initialization: giá trị khởi tạo (input đầu vào) của vòng lặp

condition: điều kiện để thực thi vòng lặp. Nếu điều kiện là true, khối code sẽ được thực thi.

Ngược lại khi condition = false, vòng lặp sẽ dùng (không chạy code nữa)

expression: sử dụng để update vòng lặp. Mỗi 1 lần vòng lặp được chạy, khối code trong body được thực thi đến cuối, thì expression sẽ được chạy để chuẩn bị cho lần chạy kế tiếp

### Example

```
for (let i = 0; i < 10; i++) {
    console.log(">> i= ", i);
}
```

initialization: i = 0

condition: i< 10

expression: i++

- Chúng ta khởi tạo biến i với giá trị = 0: i = 0 Sau đấy, kiểm tra điều kiện: i < 10 hay không. Nếu i < 10, thì console.log giá trị đồng thời, thực thi expression: i++ để tăng i lên 1 đơn vị

- Thực thi cho tới khi điều kiện không còn thỏa mãn

### optional block

Lưu ý không nên sử dụng việc viết tắt, đừng viết kiểu 'đố bạn mình viết gì'. Có chắc gì 'bây giờ bạn viết code bạn hiểu, 1 tháng sau quay lại, liệu bạn có hiểu 

```
let i = 0;
for (; i < 10; i++) {
    console.log(i);
}
```

Trường hợp thiếu biến khởi tạo 

```
for (let i = 0; ; i++) {
    console.log(i);
    if (i > 9) break; 
    // cần có if/break để không khiến vòng lặp chạy vô hạn
}
```

Trường hợp thiếu điều kiện dừng

```
let i = 0;
for (; ;) {
    console.log(i);
    i++;
    if (i > 9) break;
}
```

Trường hợp các biểu thức trong for không có gì

*Bài tiếp theo [TS22 TypeScript while ](/session/session_022_ts_while.md)*