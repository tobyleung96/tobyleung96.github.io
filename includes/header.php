<header>
  <div id="homeButton">
    <a href="index.php"> <img src="images/homeLogo.png" alt="homeLogo"> </a>
  </div>

  <div id="uploadButton">
    <a href="upload.php"> <img src="images/uploadIcon.png" alt="uploadIcon"> </a>
  </div>

  <div id="logInDiv">
    <?php
    print_messages();
    ?>

    <form id="reviewShoe" action="index.php" method="post">
      <ul>
        <li>
          <label>Username:</label>
          <input type="text" name="username" required/>
        </li>
        <li>
          <label>Password:</label>
          <input type="password" name="password" required/>
        </li>
        <li>
          <button name="login" type="submit">Log In</button>
        </li>
      </ul>
    </form>
  </div>

  <div id="logOutDiv">
    <?php
    log_out();
    if (!$current_user) {
      record_message("You've been successfully logged out.");
    }
    ?>

    <?php
    print_messages();
    ?>
  </div>

</header>
