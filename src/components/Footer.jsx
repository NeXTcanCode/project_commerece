function Footer() {
  const year = new Date().getFullYear();

  return (
    <div id="footer_content">
      <p>
        copyright <i className="bi bi-c-circle"></i>
        {year}
        <span> NeXT E-Com</span>
        <span>|GitHub : NeXTcanCode</span>
      </p>
    </div>
  );
}
export default Footer;
