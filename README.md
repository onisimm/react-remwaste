# REMWaste React Refactoring for Skip Choosing page

## First Impression

1. **Repetitive Imagery**

   - all skip cards use the same image. This makes it harder to differentiate, and also, the user's eye may not be drawn directly to the key details

2. **Dark Color scheme and contrast**

   - this leads to lower visibility and readability

3. **Labeling could be more intuitive**

   - e.g: 'Private Property Only'

4. **Lack of explanation on skip sizes**

   - '4 yard Skip' or others may not be that meaningful to all users

5. **Lack of explanation in the footer, regarding the skip chosen**

## Steps Taken

1. **Remove Images**

   - I don't think the image is that important, so I removed the image on a skip card. This allows the user to focus on more important details, such as money, time, and size

2. **Increase visibility**

   - I wanted to keep the overall dark contrast, so to increase visibility, I've only increased contrast on skip hover. It lights up now.
   - Also changed the color of the prices to a lighter blue as it was a bit too dark for the background.
   - Increased the overall spacing

3. **Intuitive labeling**

   - Labeling shows clear and concise information now:
     - whether it's 7/14 days — bigger text, right under yard size, for more visibility
     - 'per week' description for the money is bigger, so it's clearer to the user that it's not necessarily the full amount.
     - heavy waste allowed, with a cross / tick to better showcase if it's allowed or not
     - public road placement, with a cross / tick to better showcase if it's allowed or not. This replaces the danger icon, with 'Private Property Only', keeping a constant feature throughout the skip cards.

4. **More explanation in the footer**

   - Added the yard size explicitly, and the full amount of money, for the full period of time, not per week.
   - Also added an animation, to better showcase when the skip selected changes, by animating the transition from an amount of money to another.

5. **Added information button**

   - In order to better showcase a yard size, I tried explaining it in bag sizes. I used a general formula for this, but ideally, the api should return a bag-size or something similar, accurate for each yard size.
   - The explanation is found on each skip, by hovering on the information button, or clicking it on mobile.

## Other Details

- Used Typescript with plain CSS for styling
- React Query with axios for retrieving the skip details from the api

Let me know how it went out!
