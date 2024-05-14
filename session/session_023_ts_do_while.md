# TS23 TypeScript do...while

### Cú pháp

```
do {
    // thực hiện một số công việc
} while (điều_kiện);
```

Đầu tiên, đoạn mã trong khối do { ... } sẽ được thực thi ít nhất một lần.

Sau đó, nó kiểm tra điều_kiện trong câu lệnh while.

Nếu điều_kiện là true, đoạn mã trong khối do { ... } sẽ được thực thi một lần nữa.

Quá trình này lặp lại cho đến khi điều_kiện trở thành false.

### Ví dụ về cách sử dụng do...while trong TypeScript:

```
let i = 0;
do {
    console.log(i);
    i++;
} while (i < 10);
```

Đầu ra của đoạn mã trên sẽ là các số từ 0 đến 9. Trong ví dụ này, đoạn mã trong khối do { ... } sẽ chạy cho đến khi i không còn nhỏ hơn 10.

### Sự khác biệt giữa do...while và while

Vòng lặp while kiểm tra điều kiện trước mỗi lần lặp. Nếu điều kiện là true, thì khối mã trong vòng lặp sẽ được thực thi. Nếu điều kiện là false ngay từ đầu, thì khối mã sẽ không bao giờ được thực thi

Vòng lặp do…while luôn luôn thực thi khối mã ít nhất một lần, ngay cả khi điều kiện ban đầu là false. Điều kiện của vòng lặp do...while được kiểm tra sau mỗi lần lặp, do đó nó còn được gọi là vòng lặp kiểm tra sau.

Vì vậy, bạn nên sử dụng while khi bạn muốn lặp qua một khối mã chỉ khi một điều kiện cụ thể là true, và sử dụng do...while khi bạn muốn khối mã được thực thi ít nhất một lần, sau đó lặp lại nếu một điều kiện cụ thể là true

*Bài tiếp theo [TS24 TypeScript break ](/session/session_024_ts_break.md)*