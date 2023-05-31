<!-- Tạo tài khoản git -->

<!-- 1. Tài khoản git giúp lưu trữ source code -->
<!-- Cài đặt git scm -->

1. Mở cmd trong thư mục cần đẩy code lên // Mở bằng vscode --> Ctrl + `

<!-- Khởi tạo git và đóng gói source code ở local -->

2. Khởi tạo git: git init

3. Thêm tất cả sự thay đổi của file vào stack/ lưu trữ tạm: git add .

4. Commit git --> đóng gói lưu trữ: git commit -m "<nội dung cần note>" //Example: git commit -m "test"

<!-- Connect local với repo -->

5. Kết nối với repo: git remote add origin <đường dẫn repo> //Example git remote add origin https://github.com/khoalyRikkei/front_end_0529.git

<!-- Đẩy commit lên repo -->

6. Đẩy code lên repo: git push

<!-- Sau khi tạo được git và connect với repo thì các bước để đẩy source code -->

1. git add .
2. git commit -m "update ngày 30.05"
3. git push

<!-- Làm việc với branch -->

<!-- Khởi tạo một branch mới -->

1. Tạo 1 branch: git checkout -b <ten_branch> --> git checkout -b session_01
2. Đẩy branch và source code lên: git push --set-upstream origin <tên_branch> --> git push --set-upstream -b session_01
