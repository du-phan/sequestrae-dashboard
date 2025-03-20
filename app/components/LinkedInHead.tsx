export default function LinkedInHead() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://sequestrae.com";
  const imageUrl = `${baseUrl}/og-image.png`;

  return (
    <>
      {/* LinkedIn specific meta tags - explicit format */}
      <meta name="image" property="og:image" content={imageUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:secure_url" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Sequestrae Dashboard Preview" />
      <meta property="og:image:type" content="image/png" />
    </>
  );
}
