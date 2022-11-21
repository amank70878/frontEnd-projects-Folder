<!-- Modal -->
<div class="modal fade" id="loginmodal" tabindex="-1" aria-labelledby="loginmodallabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="loginModalLabel">login to iDiscuss</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">

                <form action="http://localhost/test/forum_project/parts/handlelogin.php" method="post">
                    <div class="mb-3">
                        <label for="loginemail" class="form-label">Email address</label>
                        <input type="text" class="form-control" name="loginemail" id="loginemail" aria-describedby="emailHelp">
                    </div>
                    <div class="mb-3">
                        <label for="loginpassword" class="form-label">Password</label>
                        <input type="password" class="form-control" id="loginpassword" name="loginpassword">
                    </div>
                    <button type="submit" class="btn btn-primary" id="loginbtn">Login</button>
                </form>

            </div>
        </div>
    </div>
</div>