import os
import re

def merge_js_files(input_html, output_html):
    # Get directory of HTML file
    base_dir = os.path.dirname(input_html) if os.path.dirname(input_html) else '.'
    
    # Read HTML content
    with open(input_html, 'r', encoding='utf-8') as f:
        html_content = f.read()

    # Find all .js files in the same directory
    js_files = [f for f in os.listdir(base_dir) if f.endswith('.js')]
    
    if not js_files:
        print("No JavaScript files found to merge")
        return

    # Combine all JS content
    combined_js = ''
    for js_file in js_files:
        print(f"Merging {js_file}...")
        with open(os.path.join(base_dir, js_file), 'r', encoding='utf-8') as f:
            combined_js += f'\n// Content from {js_file}\n'
            combined_js += f.read()
            combined_js += '\n'

    # Replace the placeholder comment with the merged JavaScript
    new_html = html_content.replace(
        '<script type="text/worker">\n    <!-- hold for merge -->\n</script>',
        f'<script type="text/worker">\n{combined_js}\n</script>'
    )

    # Write new merged content to output file
    with open(output_html, 'w', encoding='utf-8') as f:
        f.write(new_html)
    
    print(f"Successfully merged {len(js_files)} JavaScript files into {output_html}")
    print("Merged files:", ', '.join(js_files))

if __name__ == "__main__":
    input_html = "enhanced_shadowrun3e.html"
    output_html = "shadowrun3enhanced.html"
    merge_js_files(input_html, output_html)
