# PopcornPicks Test Cases

## Test Case 1: User Registration with Valid Details
- Test Objective: Verify a new user can register successfully
- Input: Valid username, email, password
- Expected Result: Account created successfully
- Status: Pass

## Test Case 2: User Registration with Empty Fields
- Test Objective: Verify registration validation
- Input: Empty username/email/password
- Expected Result: Validation error shown
- Status: Pass

## Test Case 3: User Registration with Invalid Email
- Test Objective: Verify email format validation
- Input: Invalid email format
- Expected Result: Registration rejected
- Status: Pass

## Test Case 4: Duplicate User Registration
- Test Objective: Verify duplicate email cannot be reused
- Input: Existing email
- Expected Result: Registration rejected
- Status: Pass

## Test Case 5: User Login with Valid Credentials
- Test Objective: Verify registered user can log in
- Input: Correct email and password
- Expected Result: Login successful
- Status: Pass

## Test Case 6: User Login with Wrong Password
- Test Objective: Verify invalid login is blocked
- Input: Correct email, wrong password
- Expected Result: Error message displayed
- Status: Pass

## Test Case 7: User Login with Empty Fields
- Test Objective: Verify login validation
- Input: Empty email/password
- Expected Result: Validation error shown
- Status: Pass

## Test Case 8: Logout Functionality
- Test Objective: Verify user can log out
- Input: Click logout
- Expected Result: User session ends and redirects to login
- Status: Pass

## Test Case 9: Access Protected Page Without Login
- Test Objective: Verify unauthorized users are blocked
- Input: Open review page without authentication
- Expected Result: Access denied or redirected
- Status: Pass

## Test Case 10: Add Review with Valid Data
- Test Objective: Verify user can add a review
- Input: Movie title, review comment, watched date
- Expected Result: Review added successfully
- Status: Pass

## Test Case 11: Add Review with Empty Title
- Test Objective: Verify review form validation
- Input: Empty movie title
- Expected Result: Validation error shown
- Status: Pass

## Test Case 12: Add Review with Empty Comment
- Test Objective: Verify review comment validation
- Input: Empty review comment
- Expected Result: Validation error shown
- Status: Pass

## Test Case 13: View Review List
- Test Objective: Verify all saved reviews are displayed
- Input: Existing reviews
- Expected Result: Review list shown correctly
- Status: Pass

## Test Case 14: View Single Review Details in List
- Test Objective: Verify review details display correctly
- Input: Saved review entry
- Expected Result: Movie title, review comment, watched date shown
- Status: Pass

## Test Case 15: Edit Review with Valid Data
- Test Objective: Verify user can edit a review
- Input: Updated movie title/comment/date
- Expected Result: Review updated successfully
- Status: Pass

## Test Case 16: Edit Review and Cancel Changes
- Test Objective: Verify unchanged data remains when edit is not submitted
- Input: Open edit and leave without saving
- Expected Result: Original review remains unchanged
- Status: Pass

## Test Case 17: Delete Review
- Test Objective: Verify user can delete a review
- Input: Click delete on existing review
- Expected Result: Review removed from list
- Status: Pass

## Test Case 18: Delete Non-Existing Review
- Test Objective: Verify graceful handling of invalid delete request
- Input: Delete already removed review
- Expected Result: Error handled correctly
- Status: Pass

## Test Case 19: Backend API Availability
- Test Objective: Verify backend server is running
- Input: Access backend on port 5001
- Expected Result: Server responds successfully
- Status: Pass

## Test Case 20: Frontend Availability
- Test Objective: Verify frontend server is running
- Input: Access frontend on port 3000
- Expected Result: Frontend responds successfully
- Status: Pass

## Test Case 21: Database Connection
- Test Objective: Verify MongoDB connection works
- Input: Start backend server
- Expected Result: MongoDB connected message appears
- Status: Pass

## Test Case 22: Route Navigation
- Test Objective: Verify navigation between Login, Register, Profile, and Reviews pages
- Input: Click navbar links
- Expected Result: Correct page opens each time
- Status: Pass
