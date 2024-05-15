# TS25 TypeScript Continue

Trong TypeScript, từ khóa continue được sử dụng để bỏ qua phần còn lại của vòng lặp hiện tại và tiếp tục với lần lặp tiếp theo. Dưới đây là một ví dụ:

```
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue; // Bỏ qua các số chẵn
    }
    console.log(i); // Chỉ in ra các số lẻ
}
```

Trong ví dụ trên, khi i là một số chẵn, từ khóa continue được gọi và phần còn lại của vòng lặp (lệnh console.log(i)) sẽ bị bỏ qua. Vòng lặp sau đó tiếp tục với giá trị tiếp theo của i. Kết quả là chương trình chỉ in ra các số lẻ từ 0 đến 9.

### Break

- Khi từ khóa break được gọi trong một vòng lặp, nó sẽ kết thúc vòng lặp ngay lập tức.
- Các lệnh sau từ khóa break trong vòng lặp sẽ không được thực hiện.
- Nó thường được sử dụng trong các vòng lặp for, while hoặc do...while, cũng như trong câu lệnh switch...case.

### Continue

- Khi từ khóa continue được gọi trong một vòng lặp, nó sẽ bỏ qua phần còn lại của lần lặp hiện tại và tiếp tục với lần lặp tiếp theo.
- Các lệnh sau từ khóa continue trong vòng lặp sẽ không được thực hiện cho lần lặp hiện tại, nhưng vòng lặp sẽ không kết thúc hoàn toàn như khi sử dụng break.
- Nó thường được sử dụng trong các vòng lặp for, while hoặc do...while.

*Bài tiếp theo [TS26 TypeScript Functions ](/session/session_026_ts_functions.md)*