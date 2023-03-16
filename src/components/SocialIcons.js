const SocialIcons = () => {
  const styles = {
    icon: {
      textDecoration: "none",
      fontSize: "22px",
      padding: "10px",
      transition: "0.2s ease-in",
    },
  };

  return (
    <div className="socialIcons" style={styles.socialIcons}>
      <a className="icon" style={styles.icon} href="https://github.com/tjdwn154">
        <i className="fa-brands fa-github" aria-hidden="true"></i>
      </a>
      <a className="icon" style={styles.icon} href="#">
        <i className="fa-brands fa-linkedin" aria-hidden="true"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.instagram.com/seon9_ju/">
        <i className="fa-brands fa-instagram" aria-hidden="true"></i>
      </a>
      <a className="icon" style={styles.icon} href="#">
        <i className="fa-brands fa-twitter" aria-hidden="true"></i>
      </a>
    </div>
  );
};

export default SocialIcons;
