const fs = require('fs');
const path = require('path');
const marked = require('marked');

// Function to enhance table conversion in HTML
function enhanceTableConversion(htmlContent) {
    // Your logic to enhance table conversion goes here
    return htmlContent;
}

// Function to adjust links in Markdown content
function adjustLinks(markdownContent, root, markdownDirPath) {
    // Replace markdown links with HTML anchor tags
    const linkPattern = /\[\s*<u>(.*?)<\/u>\s*\]\((\/assets\/.*?\.(pdf|pptx|docx|zip))\)/gi;
    let adjustedContent = markdownContent.replace(linkPattern, (match, linkText, assetPath) => {
        let pathToStatic = path.relative(path.join(markdownDirPath, "static"), root);
        return `<a href="../${pathToStatic}${assetPath}"><u>${linkText}</u></a>`;
    });

    // Replace iframe src with updated path
    const iframePattern = /<iframe.*?src="(\/assets\/.*?\.mp4)".*?><\/iframe>/gi;
    adjustedContent = adjustedContent.replace(iframePattern, (match, assetPath) => {
        let pathToStatic = path.relative(path.join(markdownDirPath, "static"), root);
        return `<iframe src="../${pathToStatic}${assetPath}" width="640" height="360" frameborder="0" allowfullscreen></iframe>`;
    });

    // Additional step to replace '.md' with '.html' in links
    adjustedContent = adjustedContent.replace(/\.md/gi, '.html');

    return adjustedContent;
}

// Function to convert Markdown to HTML with specific styles and handling
function markdownToHtmlWithStyles(mdContent, root, markdownDirPath) {
    // Remove YAML front matter
    let cleanedMarkdown = mdContent.replace(/---\nsidebar_position: \d\n---/g, '');

    // Adjust links in markdown
    let adjustedMarkdown = adjustLinks(cleanedMarkdown, root, markdownDirPath);

    // Convert Markdown to HTML
    let convertedHtml = marked(adjustedMarkdown);

    // Enhance table conversion if needed
    convertedHtml = enhanceTableConversion(convertedHtml);

    // Replace .md with .html in links
    convertedHtml = convertedHtml.replace(/\.md"/g, '.html"');

    // Apply CSS styles (including table and image styles)
    let additionalCss = `/* Your CSS content */`;
    let enhancedCss = `/* Your Enhanced CSS content */`;

    let cssWithAdditional = themeCssContent + additionalCss + enhancedCss;

    // Wrap HTML content with CSS
    return `
    <html>
    <head>
    <style>${cssWithAdditional}</style>
    </head>
    <body>${convertedHtml}</body>
    </html>
    `;
}

// Directory path for Markdown files
const markdownDirPath = path.resolve('docs');

// CSS content from your theme
const themeCssContent = `/* Your CSS content from the theme */`;

// Iterate over Markdown files and convert them
fs.readdir(markdownDirPath, { withFileTypes: true }, (err, files) => {
    if (err) {
        console.error('Error reading directory', err);
        return;
    }
    files.forEach(file => {
        if (file.isFile() && file.name.endsWith('.md')) {
            let mdFilePath = path.join(markdownDirPath, file.name);
            fs.readFile(mdFilePath, 'utf8', (err, data) => {
                if (err) {
                    console.error(`Error reading file ${mdFilePath}`, err);
                    return;
                }
                let htmlContent = markdownToHtmlWithStyles(data, markdownDirPath, markdownDirPath);
                let htmlFilePath = path.join(markdownDirPath, file.name.replace('.md', '.html'));
                fs.writeFile(htmlFilePath, htmlContent, 'utf8', (err) => {
                    if (err) {
                        console.error(`Error writing file ${htmlFilePath}`, err);
                        return;
                    }
                    console.log(`The file ${htmlFilePath} has been saved!`);
                });
            });
        }
    });
});
