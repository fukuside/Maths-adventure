from pathlib import Path
import sys,json
sys.path.insert(0,str(Path(__file__).parent/'cutout-tools'))
from scipy import ndimage as ndi
import numpy as np
from PIL import Image,ImageDraw
R=Path('C:/Users/user/子育てプロジェクト/maths-adventure-v1.4');V=Path(__file__).parent/'cutout-batch176';V.mkdir(exist_ok=True);A=R/'assets-source/ゲーム用透過原本'
records=[]
for key,batch in [('007-plus-emperor_UR',169)]:
 src=Path('C:/Users/user/.codex/generated_images/01a12e0b-5276-7060-9999-a044ffd69a64/exec-7d138484-6c09-4925-baa1-c14cd83bfbfb.png');arr=np.asarray(Image.open(src).convert('RGBA')).copy();a=arr[:,:,3];mask=a>=64;labels,n=ndi.label(mask);counts=np.bincount(labels.ravel());keep=counts>=60;keep[0]=False;mask=keep[labels];inside=ndi.distance_transform_edt(mask)
 # Remove a narrow contaminated matte rim. Preserve interior pixels and paint.
 newalpha=np.clip((inside-1.1)*255,0,255).astype(np.uint8)
 core=inside>=4;_,nearest=ndi.distance_transform_edt(~core,return_indices=True);edge=(newalpha>0)&(inside<3);arr[edge,:3]=arr[nearest[0][edge],nearest[1][edge],:3];arr[:,:,3]=newalpha;arr[newalpha==0,:3]=0
 out=Image.fromarray(arr);box=out.getbbox();character=out.crop(box);character.thumbnail((692,692),Image.Resampling.LANCZOS);final=Image.new('RGBA',(1080,1080));final.alpha_composite(character,((1080-character.width)//2,(1080-character.height)//2));png=V/f'{key}-1080.png';final.save(png);final.save(V/f'{key}.webp',quality=86,method=6)
 panels=[]
 for bg in ['#ffffff','#18303d','#e8b7c0']:
  panel=Image.new('RGBA',(1080,1080),bg);panel.alpha_composite(final);panels.append(panel.convert('RGB').resize((360,360)))
 sheet=Image.new('RGB',(1080,360));
 for i,panel in enumerate(panels):sheet.paste(panel,(i*360,0))
 sheet.save(V/f'{key}-review.jpg',quality=96)
 records.append({'key':key,'pendingBatch':batch,'input':str(src),'png':str(png),'webp':str(V/f'{key}.webp'),'alphaBounds':final.getchannel('A').getbbox(),'alphaExtrema':final.getchannel('A').getextrema(),'cleanup':'alpha>=64; components>=60px; inward matte trim 1.1 source pixels; nearest interior color for edge under3px; transparent zero RGB; centered 64% canvas with padding','retainedMaskPixels':int(mask.sum()),'removedSmallComponents':int(sum(counts[1:]<60))})
(V/'correction-records.json').write_text(json.dumps(records,ensure_ascii=False,indent=2),encoding='utf-8');print('six corrected candidates written')





