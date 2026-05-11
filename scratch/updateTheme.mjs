import fs from 'fs';
import path from 'path';

const cssPath = path.join('src', 'App.css');
let css = fs.readFileSync(cssPath, 'utf8');

// Theming replacements
css = css.replace(/color: #5be3d6;/g, 'color: var(--accent-primary);');
css = css.replace(/border: 4px solid #5be3d6;/g, 'border: 4px solid var(--accent-primary);');
css = css.replace(/border-left: 5px solid #5be3d6;/g, 'border-left: 5px solid var(--accent-primary);');
css = css.replace(/background: #5be3d6;/g, 'background: var(--accent-primary);');
css = css.replace(/color: #0d0d1f;/g, 'color: #ffffff;'); // button text
css = css.replace(/background: linear-gradient\(to right, #00ffe7, #5f5fff\);/g, 'background: var(--gradient-primary);');
css = css.replace(/background: linear-gradient\(145deg, #1a1a2e, #0e0e1a\);/g, 'background: var(--bg-card);');
css = css.replace(/border: 1px solid rgba\(0, 255, 213, 0\.3\);/g, 'border: 1px solid var(--border-color);');
css = css.replace(/box-shadow: 0 0 15px rgba\(0, 255, 213, 0\.1\);/g, 'box-shadow: 0 4px 15px var(--shadow-primary);');
css = css.replace(/box-shadow: 0 15px 30px rgba\(0, 255, 213, 0\.3\);/g, 'box-shadow: 0 15px 30px var(--shadow-primary);');
css = css.replace(/color: #ffffff;/g, 'color: var(--text-primary);');
css = css.replace(/color: #c2c2d6;/g, 'color: var(--text-secondary);');
css = css.replace(/color: #bcbcbc;/g, 'color: var(--text-secondary);');
css = css.replace(/color: #c7c7c7;/g, 'color: var(--text-muted);');
css = css.replace(/color: #dddddd;/g, 'color: var(--text-secondary);');
css = css.replace(/color: #9fa3ff;/g, 'color: var(--accent-primary);');
css = css.replace(/background: linear-gradient\(to bottom, #5be3d6 0%, #1a1a2e 100%\);/g, 'background: linear-gradient(to bottom, var(--accent-primary) 0%, transparent 100%);');
css = css.replace(/background-color: #151532;/g, 'background-color: var(--bg-secondary);');
css = css.replace(/box-shadow: 0 0 10px #5be3d6aa;/g, 'box-shadow: 0 0 10px var(--shadow-glow);');
css = css.replace(/background: linear-gradient\(145deg, #1e1e3f, #111126\);/g, 'background: var(--bg-timeline);');
css = css.replace(/box-shadow: 0 8px 24px rgba\(0, 0, 0, 0\.4\);/g, 'box-shadow: 0 8px 24px var(--shadow-primary);');
css = css.replace(/box-shadow: 0 12px 30px rgba\(91, 227, 214, 0\.25\);/g, 'box-shadow: 0 12px 30px var(--shadow-primary);');
css = css.replace(/background: linear-gradient\(to right, #00c9ff, #92fe9d\);/g, 'background: var(--bg-secondary); border: 1px solid var(--border-color); color: var(--text-primary);');
css = css.replace(/background-color: rgb\(1, 10, 7\);/g, 'background-color: var(--glass-bg); border: 1px solid var(--glass-border);');
css = css.replace(/background: linear-gradient\(135deg, #0e1a40, #1b2d6e\);/g, 'background: var(--bg-project);');
css = css.replace(/box-shadow: 0 8px 20px rgba\(0, 0, 0, 0\.3\);/g, 'box-shadow: 0 8px 20px var(--shadow-primary);');
css = css.replace(/box-shadow: 0 12px 25px rgba\(0, 132, 255, 0\.4\);/g, 'box-shadow: 0 12px 25px var(--shadow-primary);');
css = css.replace(/background: #1e2a50;/g, 'background: var(--accent-primary); color: #fff;');
css = css.replace(/background: rgba\(255, 255, 255, 0\.1\);/g, 'background: var(--glass-bg);');
css = css.replace(/border: 1px solid rgba\(255, 255, 255, 0\.18\);/g, 'border: 1px solid var(--glass-border);');
css = css.replace(/box-shadow: 0 8px 32px rgba\(0, 0, 0, 0\.25\);/g, 'box-shadow: 0 8px 32px var(--shadow-primary);');
css = css.replace(/background: rgba\(255, 255, 255, 0\.15\);/g, 'background: var(--glass-bg); color: var(--text-primary);');
css = css.replace(/background: rgba\(255, 255, 255, 0\.25\);/g, 'background: var(--border-color);');
css = css.replace(/color: #dcdcdc;/g, 'color: var(--text-muted);');
css = css.replace(/background-color: #0b0c2a;/g, 'background-color: var(--bg-secondary);');
css = css.replace(/color: #fff;/g, 'color: var(--text-primary);');
css = css.replace(/color: #d1d0d0;/g, 'color: var(--text-secondary);');
css = css.replace(/border-top: 1px solid rgba\(255, 255, 255, 0\.1\);/g, 'border-top: 1px solid var(--border-color);');
css = css.replace(/color: #999;/g, 'color: var(--text-muted);');
css = css.replace(/background: conic-gradient\(from 180deg at 50% 50%, #00ffd5, transparent, #00ffd5\);/g, 'background: conic-gradient(from 180deg at 50% 50%, var(--accent-primary), transparent, var(--accent-primary));');

fs.writeFileSync(cssPath, css, 'utf8');
console.log('App.css updated for theming!');
