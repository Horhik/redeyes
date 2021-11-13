---
title: "PyAutoGUI for simplifying anki routine"
date: 2021-01-21T10:26:19+03:00
description: "How i used PyAutoGUI wit my WM"
type: draft
---


I had been adding some cards to Anki. 
It was lowercase word and word with stress in russian. like *торты тОрты.* 

I'm lazy and i wrote two simple scripts. All what i have to do is input words with stress into a file.  
First script for creating file with list of sequence of word with stress and lowercase word

```python
import os
f = open("/home/horhik/text.txt", 'r+')
lines = f.readlines()
for ind, line in enumerate(lines):
    print(line.lower(), " ", line)
```

After, i just pushed output to file and opened it it Emacs.  

Second script automatizing adding cards to A**nki**.  
I split my window by **Anki** "add card" window and **Emacs**. As i use `evil` mode in Emacs, script looks like that:

```python
import pyautogui

import os
while(True):
    pyautogui.hotkey("winleft", 'j') # toggle window
    pyautogui.press(["v", "$", "y"]) # copy string
    pyautogui.hotkey("winleft", 'j') # toggle window
    pyautogui.hotkey("ctrl", 'v')    # past text
    pyautogui.press("tab")           # next input field
    pyautogui.hotkey("winleft", 'j') # toggle window
    pyautogui.press(["j","0", "w", "v" , "$", "y", "0", "j", "j" ])
						         # move to next line beginning, copy it and go to next occurence
    pyautogui.hotkey("winleft", 'j') # toggle window
    pyautogui.hotkey("ctrl", 'v')    # paste text
    pyautogui.press("tab")           # ...
    pyautogui.press("tab")           # ...
    pyautogui.press("tab")           # ...
    pyautogui.press("tab")           # ... way to submit button
    pyautogui.press("space")         # pressing submit button
```

`while(true)` was my mistake. I launched script in terminal, with `sleep` 3 seconds before.  
But i couldn't shut script down without any strange effect when i opening not only 2 windows in my Window Manager.  
Some strange things happen before I cached terminal and pressed `Ctrl+C`  
