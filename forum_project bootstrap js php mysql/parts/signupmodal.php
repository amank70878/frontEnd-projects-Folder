<!-- Modal -->
<div class="modal fade" id="signupmodal" tabindex="-1" aria-labelledby="signupmodallabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="signupmodallabel">Signup to create a new account</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">

                <form action="http://localhost/test/forum_project/parts/handlesignup.php" method="post">
                    <div class="mb-3">
                        <label for="signupname" class="form-label">Enter your User name</label>
                        <input type="text" name="signupname" class="form-control" id="signupname" aria-describedby="emailHelp">
                    </div>
                    <div class="mb-3">
                        <label for="signupemail" class="form-label">Enter your Email Address</label>
                        <input type="email" name="signupemail" class="form-control" id="signupemail" aria-describedby="emailHelp">
                        
                    </div>
                    <div class="mb-3">
                        <label for="signuppassword" class="form-label">Password</label>
                        <input type="password" class="form-control" id="signuppassword" name="signuppassword">
                    </div>
                    <div class="mb-3">
                        <label for="signupcpassword" class="form-label"> Confirm Password</label>
                        <input type="password" class="form-control" id="signupcpassword" name="signupcpassword">
                        <div id="emailHelp" class="form-text">We'll never share your details with anyone else.</div>
                    </div>
                    <div class="text-center">
                        <button type="submit" class="btn btn-primary" id="signupbtn">Signup</button>
                    </div>
                </form>

            </div>
        </div>
    </div>
</div>