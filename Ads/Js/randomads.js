// Define the image path once
const imagePath = "https://bhupendrawasti.com.np/Ads/Image/";

// ads array with dynamic image paths using template literals
const ads = [
    // Ad 1 - Hajur AI
    `<a href="https://www.hajurai.com/join/BHUPEK7" target="_blank" rel="noopener" style="text-decoration:none;display:block;width:100%;margin:0 auto;">
  <div style="display:flex;align-items:center;gap:12px;background:#fff;border:2px solid #e63946;border-radius:12px;padding:12px;font-family:Arial,Helvetica,sans-serif;box-sizing:border-box;cursor:pointer;transition:box-shadow 0.2s;" onmouseover="this.style.boxShadow='0 4px 20px rgba(230,57,70,0.3)'" onmouseout="this.style.boxShadow='none'">    
    <div style="flex-shrink:0;width:80px;height:80px;border-radius:6px;overflow:hidden;border:1px solid #eee;">
      <img src="${imagePath}ads1.webp" alt="Hajur AI" style="width:100%;height:100%;object-fit:cover;">   
    </div>
    <div style="flex:1;min-width:0;">
      <div style="display:inline-block;background:#e63946;color:#fff;font-size:10px;font-weight:bold;padding:3px 8px;border-radius:10px;margin-bottom:6px;letter-spacing:0.5px;">💵 Earning App</div>
      <div style="font-size:14px;font-weight:bold;color:#1d3557;line-height:1.3;margin-bottom:3px;">🧠 Hajur AI</div>
      <div style="font-size:11px;color:#666;margin-bottom:6px;">नेपालीहरूको AI एप<br>📰 🎵 📚 💬</div>
      <div style="display:inline-block;background:#e63946;color:#fff;font-size:12px;font-weight:bold;padding:6px 14px;border-radius:20px;">⭐ Join हुनुहोस् & पाउनुहोस् Bonus 🎁</div>      
    </div>   
  </div> 
</a>`,

    // Ad 2 - Shakha Adhikrit IQ Vidhi
    `<a href="https://s.daraz.com.np/s.ZdDFN" target="_blank" rel="noopener" style="text-decoration:none;display:block;max-width:100%;margin:0 auto;">
        <div style="display:flex;align-items:center;gap:12px;background:#fff;border:2px solid #6c5ce7;border-radius:12px;padding:12px;font-family:Arial,Helvetica,sans-serif;box-sizing:border-box;cursor:pointer;transition:box-shadow 0.2s;" onmouseover="this.style.boxShadow='0 4px 20px rgba(108,92,231,0.3)'" onmouseout="this.style.boxShadow='none'">
            <div style="flex-shrink:0;width:80px;height:80px;border-radius:6px;overflow:hidden;border:1px solid #eee;">
                <img src="${imagePath}ads2.jpg" alt="Shakha Adhikrit IQ" style="width:100%;height:100%;object-fit:cover;">
            </div>
            <div style="flex:1;min-width:0;">
                <div style="display:flex;gap:4px;flex-wrap:wrap;margin-bottom:6px;">
                <span style="background:#6c5ce7;color:#fff;font-size:9px;font-weight:bold;padding:3px 7px;border-radius:10px;">      🧠 5th EDITION      </span>
                <span style="background:#f77f00;color:#fff;font-size:9px;font-weight:bold;padding:3px 7px;border-radius:10px;">📚 Best for Loksewa </span>
                <span style="background:#06d6a0;color:#fff;font-size:9px;font-weight:bold;padding:3px 7px;border-radius:10px;">🧠IQ</span>     </div>
                <div style="font-size:13px;font-weight:bold;color:#1d3557;line-height:1.3;margin-bottom:3px;">Shakha Adhikrit Hi Speed IQ Vidhi</div>
                <div style="font-size:11px;color:#666;margin-bottom:6px;">✍️ Bodhi Sir<br>📖 IQ Vidhi Publication</div>
                <div style="display:inline-block;background:#6c5ce7;color:#fff;font-size:12px;font-weight:bold;padding:6px 14px;border-radius:20px;">🛒 अहिले किन्नुहोस्</div>
            </div>
        </div>
    </a>`,

    // Ad 3 - GK Fast Track
    `<a href="https://s.daraz.com.np/s.ZdpRL" target="_blank" rel="noopener" style="text-decoration:none;display:block;max-width:100%;margin:0 auto;">
        <div style="display:flex;align-items:center;gap:12px;background:#fff;border:2px solid #2a9d8f;border-radius:12px;padding:12px;font-family:Arial,Helvetica,sans-serif;box-sizing:border-box;cursor:pointer;transition:box-shadow 0.2s;" onmouseover="this.style.boxShadow='0 4px 20px rgba(42,157,143,0.3)'" onmouseout="this.style.boxShadow='none'">
            <div style="flex-shrink:0;width:80px;height:80px;border-radius:6px;overflow:hidden;border:1px solid #eee;">
                <img src="${imagePath}ads3.jpg" alt="GK Fast Track" style="width:100%;height:100%;object-fit:cover;">
            </div>
            <div style="flex:1;min-width:0;">
                <div style="display:inline-block;background:#2a9d8f;color:#fff;font-size:10px;font-weight:bold;padding:3px 8px;border-radius:10px;margin-bottom:6px;letter-spacing:0.5px;">⚡ 12th EDITION</div>
                <div style="font-size:14px;font-weight:bold;color:#1d3557;line-height:1.3;margin-bottom:3px;">GK Fast Track</div>
                <div style="font-size:11px;color:#666;margin-bottom:6px;">✍️ Rajendra Rawat<br>📖 Rudraksha Publication</div>
                <div style="display:inline-block;background:#2a9d8f;color:#fff;font-size:12px;font-weight:bold;padding:6px 14px;border-radius:20px;">🛒 अहिले किन्नुहोस्</div>
            </div>
        </div>
    </a>`,

    // Ad 4 - Loksewa GK Handbook
    `<a href="https://s.daraz.com.np/s.ZdpUo" target="_blank" rel="noopener" style="text-decoration:none;display:block;max-width:100%;margin:0 auto;">
        <div style="display:flex;align-items:center;gap:12px;background:#fff;border:2px solid #e63946;border-radius:12px;padding:12px;font-family:Arial,Helvetica,sans-serif;box-sizing:border-box;cursor:pointer;transition:box-shadow 0.2s;" onmouseover="this.style.boxShadow='0 4px 20px rgba(230,57,70,0.3)'" onmouseout="this.style.boxShadow='none'">
            <div style="flex-shrink:0;width:80px;height:80px;border-radius:6px;overflow:hidden;border:1px solid #eee;">
                <img src="${imagePath}ads4.jpg" alt="Loksewa GK Handbook" style="width:100%;height:100%;object-fit:cover;">
            </div>
            <div style="flex:1;min-width:0;">
                <div style="display:inline-block;background:#e63946;color:#fff;font-size:10px;font-weight:bold;padding:3px 8px;border-radius:10px;margin-bottom:6px;letter-spacing:0.5px;">📚 BESTSBOOK</div>
                <div style="font-size:14px;font-weight:bold;color:#1d3557;line-height:1.3;margin-bottom:3px;">Loksewa GK Special Handbook 2082 Poush</div>
                <div style="font-size:11px;color:#666;margin-bottom:6px;">✍️ Prem Bahadur Baduwal<br>📖 Aditya Books</div>
                <div style="display:inline-block;background:#e63946;color:#fff;font-size:12px;font-weight:bold;padding:6px 14px;border-radius:20px;">🛒 अहिले किन्नुहोस्</div>
            </div>
        </div>
    </a>`,

    // Ad 5 - Bluetooth Weighing Scale Digital
    `<a href="https://s.daraz.com.np/s.ZdyQf" target="_blank" rel="noopener" style="text-decoration:none;display:block;width:100%;margin:0 auto;">
      <div style="display:flex;align-items:center;gap:12px;background:#fff;border:2px solid #0077b6;border-radius:12px;padding:12px;font-family:Arial,Helvetica,sans-serif;box-sizing:border-box;cursor:pointer;transition:box-shadow 0.2s;" onmouseover="this.style.boxShadow='0 4px 20px rgba(0,119,182,0.3)'" onmouseout="this.style.boxShadow='none'">
        <div style="flex-shrink:0;width:80px;height:80px;border-radius:8px;overflow:hidden;border:1px solid #eee;background:#f8fbff;">
          <img src="${imagePath}ads5.jpg" alt="Bluetooth Weighing Scale" style="width:100%;height:100%;object-fit:contain;">       
        </div>
        <div style="flex:1;min-width:0;">
          <div style="display:flex;gap:4px;flex-wrap:wrap;margin-bottom:6px;">           
            <span style="background:#0077b6;color:#fff;font-size:9px;font-weight:bold;padding:3px 7px;border-radius:10px;">📱 Bluetooth</span>            
            <span style="background:#00b4d8;color:#fff;font-size:9px;font-weight:bold;padding:3px 7px;border-radius:10px;">🌡️ Temperature</span>        
          </div>
          <div style="font-size:13px;font-weight:bold;color:#1d3557;line-height:1.3;margin-bottom:3px;">Bluetooth Weighing Scale Digital</div>
          <div style="font-size:10px;color:#666;margin-bottom:6px;line-height:1.4;">⚖️ Tempered Glass &bull; 🔋 Battery Included<br>👤 Human Body Weight Machine</div>
          <div style="display:inline-block;background:#0077b6;color:#fff;font-size:12px;font-weight:bold;padding:6px 14px;border-radius:20px;">🛒 अहिले किन्नुहोस्</div>      
        </div>
      </div>
    </a>`,

    // Ad 6 - Ultima Boost 30K Pro Powerbank 
    `<a href="https://s.daraz.com.np/s.ZdyjZ" target="_blank" rel="noopener" style="text-decoration:none;display:block;width:100%;margin:0 auto;">
      <div style="display:flex;align-items:center;gap:12px;background:#fff;border:2px solid #f77f00;border-radius:12px;padding:12px;font-family:Arial,Helvetica,sans-serif;box-sizing:border-box;cursor:pointer;transition:box-shadow 0.2s;" onmouseover="this.style.boxShadow='0 4px 20px rgba(247,127,0,0.3)'" onmouseout="this.style.boxShadow='none'">
        <div style="flex-shrink:0;width:80px;height:80px;border-radius:8px;overflow:hidden;border:1px solid #eee;background:#fafafa;">
          <img src="${imagePath}ads6.jpg" alt="Ultima Boost 30K Pro Powerbank" style="width:100%;height:100%;object-fit:contain;">
        </div>
        <div style="flex:1;min-width:0;">
          <div style="display:flex;gap:4px;flex-wrap:wrap;margin-bottom:6px;">
            <span style="background:#f77f00;color:#fff;font-size:9px;font-weight:bold;padding:3px 7px;border-radius:10px;">⚡ 22.5W FAST</span>
            <span style="background:#06d6a0;color:#fff;font-size:9px;font-weight:bold;padding:3px 7px;border-radius:10px;">🔋 30000mAh</span>      
          </div>
          <div style="font-size:13px;font-weight:bold;color:#1d3557;line-height:1.3;margin-bottom:3px;">Ultima Boost 30K Pro Powerbank</div>
          <div style="font-size:10px;color:#666;margin-bottom:6px;line-height:1.4;">🔌 4 Ports &bull; PD & QC3.0 &bull; LED Display<br>🛡️ Fire Protection &bull; 2 Way Charging</div>
          <div style="display:inline-block;background:#f77f00;color:#fff;font-size:12px;font-weight:bold;padding:6px 14px;border-radius:20px;">🛒 अहिले किन्नुहोस्</div>         
        </div>      
      </div>  
    </a>`,

    // Ad 7 - GK Sutra Sagar
    `<a href="https://s.daraz.com.np/s.Zdyvc" target="_blank" rel="noopener" style="text-decoration:none;display:block;width:100%;margin:0 auto;">  
      <div style="display:flex;align-items:center;gap:12px;background:#fff;border:2px solid #d62828;border-radius:12px;padding:12px;font-family:Arial,Helvetica,sans-serif;box-sizing:border-box;cursor:pointer;transition:box-shadow 0.2s;" onmouseover="this.style.boxShadow='0 4px 20px rgba(214,40,40,0.3)'" onmouseout="this.style.boxShadow='none'">
        <div style="flex-shrink:0;width:80px;height:80px;border-radius:6px;overflow:hidden;border:1px solid #eee;">
          <img src="${imagePath}ads7.jpg" alt="GK Sutra Sagar" style="width:100%;height:100%;object-fit:cover;">    
        </div>
        <div style="flex:1;min-width:0;">
          <div style="display:inline-block;background:#d62828;color:#fff;font-size:10px;font-weight:bold;padding:3px 8px;border-radius:10px;margin-bottom:6px;letter-spacing:0.5px;">📚 LOKSEWA 2082/83</div>
          <div style="font-size:14px;font-weight:bold;color:#1d3557;line-height:1.3;margin-bottom:3px;">GK Sutra Sagar</div>
          <div style="font-size:11px;color:#666;margin-bottom:6px;">✍️ Yogendra Bhujel<br>📖 For Loksewa Preparation</div>
          <div style="display:inline-block;background:#d62828;color:#fff;font-size:12px;font-weight:bold;padding:6px 14px;border-radius:20px;">🛒 अहिले किन्नुहोस्</div>      
        </div>    
      </div>
    </a>`
];

// Function to get random unique ads (no duplicates)
function getUniqueRandomAds(numberOfAds) {
    let shuffled = [...ads];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    
    let result = [];
    while (result.length < numberOfAds) {
        result.push(...shuffled);
    }
    
    return result.slice(0, numberOfAds);
}

// Load different random ads into all positions (NO DUPLICATES)
function loadAllAds() {
    const adSlots = document.querySelectorAll('.ad-position');
    const numberOfSlots = adSlots.length;
    
    const uniqueAds = getUniqueRandomAds(numberOfSlots);
    
    adSlots.forEach((adSlot, index) => {
        adSlot.innerHTML = uniqueAds[index];
    });
}

// Initial load
loadAllAds();

// Auto-rotate every 15 seconds
setInterval(loadAllAds, 15000);
