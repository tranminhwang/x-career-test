# x-career-test

## 1. Fix Bugs
 Chúng tôi đã cố tình làm sai mã code để bạn thử sức tìm ra lỗi và sửa lại chúng.
 Trong bài này, bạn cần hoàn thành các yêu cầu sau:

  - Lưu ý rằng đoạn mã này không phải là một đoạn mã hoàn chỉnh, nên trong quá trình thực thi sẽ có những lỗi cơ bản. Bạn cần hoàn thiện nó để đạt được kết quả mong muốn.
  - Khi người dùng nhập vào ô input, bạn cần hiển thị hết tất cả các loại trái cây có chứa những ký tự (`query`) mà người dùng nhập vào (`không phân biệt hoa thường`). Ví dụ: người dùng nhập vào `"apple"` thì sẽ hiển thị tất cả các loại trái cây có chứa từ `"apple"` như là: `Apple, GreenApple, Pineapple` (xem thêm tại `file mock.js`)
  - Nếu người dùng không nhập gì hoặc không có kết quả tìm kiếm thì bạn cần hiển thị ra `"Show result here"`
  - Hàm `getAutocompleteResults` chỉ được gọi khi query thay đổi. Và chỉ được gọi với ký tự cuối cùng của `query`. Nếu không thì chúng sẽ làm `spam API`.
  - Khi xoá hết `query`, bạn cần xoá hết kết quả tìm kiếm và hiển thị `"Show result here"`

Qua bài này chúng tôi sẽ đánh giá mức độ hiểu biết của bạn về các khái niệm cơ bản của React như: 
- useState
- useEffect
- Sự hiểu biết về Promise và async/await
- Khả năng sử dụng các hook
- Khả năng giải quyết vấn đề

Video code đang spam API khi gõ vào input: [https://youtu.be/S-vBnl9hGCs](https://youtu.be/S-vBnl9hGCs)

Video code không spam API khi gõ vào input: [https://youtu.be/lZQ70fs-dF4](https://youtu.be/lZQ70fs-dF4)