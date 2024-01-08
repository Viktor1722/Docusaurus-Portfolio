import os
import re
import markdown

# Function to enhance table conversion in HTML
def enhance_table_conversion(html_content):
    # Your logic to enhance table conversion goes here
    return html_content

# Function to adjust links in Markdown content
def adjust_links(markdown_content, root, markdown_dir_path):
    # Function to replace markdown links with HTML anchor tags
    def replace_link(match):
        link_text = match.group(1)
        asset_path = match.group(2)
        path_to_static = os.path.relpath(os.path.join(markdown_dir_path, "static"), start=root)
        new_link = f'<a href="../{path_to_static}{asset_path}"><u>{link_text}</u></a>'
        return new_link

    pattern = r'\[\s*<u>(.*?)</u>\s*\]\((/assets/.*?\.(pdf|pptx|docx|zip))\)'
    adjusted_content = re.sub(pattern, replace_link, markdown_content, flags=re.IGNORECASE)

    # Function to replace iframe src with updated path
    def replace_iframe(match):
        asset_path = match.group(1)
        path_to_static = os.path.relpath(os.path.join(markdown_dir_path, "static"), start=root)
        new_iframe = f'<iframe src="../{path_to_static}{asset_path}" width="640" height="360" frameborder="0" allowfullscreen></iframe>'
        return new_iframe

    iframe_pattern = r'<iframe.*?src="(/assets/.*?\.mp4)".*?></iframe>'
    adjusted_content = re.sub(iframe_pattern, replace_iframe, adjusted_content, flags=re.IGNORECASE)

    # Additional step to replace '.md' with '.html' in links
    adjusted_content = re.sub(r'\.md', '.html', adjusted_content, flags=re.IGNORECASE)

    return adjusted_content


# Function to convert Markdown to HTML with specific styles and handling
def markdown_to_html_with_styles(md_content, root, markdown_dir_path):
    # Remove YAML front matter
    cleaned_markdown = re.sub(r'---\nsidebar_position: \d\n---', '', md_content, flags=re.MULTILINE)

    # Adjust links in markdown
    adjusted_markdown = adjust_links(cleaned_markdown, root, markdown_dir_path)

    # Convert Markdown to HTML
    converted_html = markdown.markdown(adjusted_markdown, extensions=['markdown.extensions.tables','markdown.extensions.toc','markdown.extensions.nl2br','markdown.extensions.fenced_code'])

    # Enhance table conversion if needed
    converted_html = enhance_table_conversion(converted_html)

    # Replace .md with .html in links
    converted_html = converted_html.replace('.md"', '.html"')

    # Apply CSS styles (including table and image styles)
    additional_css = """
body {
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    line-height: 1.6;
    background-color: #f5f5f5;
    color: #333333;
}

h1, h2, h3, h4, h5, h6 {
    font-weight: bold;
    margin-top: 1em;
    margin-bottom: 0.5em;
    line-height: 1.3;
}

h1 { font-size: 2em; }
h2 { font-size: 1.75em; }
h3 { font-size: 1.5em; }
h4 { font-size: 1.25em; }
h5 { font-size: 1.125em; }
h6 { font-size: 1em; }

a {
    color: #0066cc;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}

code, pre {
    font-family: 'Courier New', monospace;
    background-color: #eee;
    padding: 2px;
    border-radius: 4px;
}

pre {
    white-space: pre-wrap;
    word-wrap: break-word;
    padding: 10px;
}

img {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 10px 0;
}

table {
    width: 100%;
    margin-top: 20px;
    border-collapse: collapse;
}

th, td {
    border: 1px solid #ddd;
    padding: 8px;
}

th {
    background-color: #f2f2f2;
    text-align: left;
}

blockquote {
    border-left: 4px solid #ddd;
    padding-left: 16px;
    margin-left: 0;
    font-style: italic;
    color: #666;
}

@media (max-width: 600px) {
    body {
        padding: 10px; /* Smaller padding for smaller screens */
        font-size: 16px; /* Slightly smaller font size for small devices */
    }
}

    """
    
    enhanced_css = """
/* Enhancements based on reference website */

/* Background */

/* Text Styling */
body, h1, h2, h3, h4, h5, h6, a, p {
    font-family: 'Open Sans', sans-serif;
}
body {
    margin: 0 auto;
    max-width: 800px; /* Adjust this value based on your design requirements */
    padding: 20px; /* This adds some space inside the body, around the content */
    line-height: 1.6; /* Improves readability of your text */
    font-size: 18px; /* Adjust font size as needed */
    color: #333; /* Sets the default text color */
    background-color: #f5f5f5; /* A light background color */
}

/* Link Styling */
a {
    color: #007bff; /* Adjust for better visibility */
    transition: color 0.3s;
}

a:hover, a:focus {
    color: #0056b3;
    text-decoration: none;
}

/* Enhancing Tables */
table {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: #fff;
}

/* Code Block Enhancements */
code, pre {
    background-color: #f4f4f4; /* Lighter background for code blocks */
    border: 1px solid #ddd;
}

/* Blockquote Styling */
blockquote {
    border-left: 4px solid #007bff;
    color: #555;
}

/* Additional Styling for Responsiveness and Aesthetics */
@media screen and (max-width: 768px) {
    body {
        background-image: none; /* Optional: Remove background image for smaller screens */
    }
}

/* Importing Google Font */
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');
"""


# Add this vibrant_css to the existing css_with_additional variable in your script.


    css_with_additional = theme_css_content + additional_css + enhanced_css

    # Wrap HTML content with CSS
    final_html_output = f"""
    <html>
    <head>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
    <style>{css_with_additional}</style>
    </head>
    <body>{converted_html}</body>
    </html>
    """
    return final_html_output

# Directory path for Markdown files
markdown_dir_path = os.path.abspath('docs')

# CSS content from Typora's Whitey theme
theme_css_content = """
/* Your CSS content goes here */
"""

# Iterate over Markdown files and convert them
for root, dirs, files in os.walk(markdown_dir_path):
    for file in files:
        if file.endswith('.md'):
            md_file_path = os.path.join(root, file)
            with open(md_file_path, 'r', encoding='utf-8') as md_file:
                md_content = md_file.read()

            # Convert Markdown to HTML
            html_content = markdown_to_html_with_styles(md_content, root, markdown_dir_path)
            html_file_path = os.path.join(root, file.replace('.md', '.html'))
            with open(html_file_path, 'w', encoding='utf-8') as html_file:
                html_file.write(html_content)
