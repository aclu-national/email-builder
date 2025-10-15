# Social Rankings

The purpose of this is to test out the social ranking for each affiliate. We have 7 different social platform that affiliates can rank on a 1-7 grade. Only the top 4 socials will show in the footer.

```html
{socials[4].rank = "1"} <!-- tiktok -->
{socials[2].rank = "2"} <!-- instragram -->
{socials[0].rank = "3"} <!-- blueksy -->
{socials[3].rank = "4"} <!-- threads -->
{socials[6].rank = "5"} <!-- youtube -->
{socials[1].rank = "6"} <!-- facebook -->
{socials[5].rank = "7"} <!-- x -->
```

```html
{socials[0].url = "https://www.aclu.org/socials/bluesky"} <!-- blueksy -->
{socials[1].url = "https://www.aclu.org/socials/facebook"} <!-- facebook -->
{socials[2].url = "https://www.aclu.org/socials/instagram"} <!-- instragram -->
{socials[3].url = "https://www.aclu.org/socials/threads"} <!-- threads -->
{socials[4].url = "https://www.aclu.org/socials/tiktok"} <!-- tiktok -->
{socials[5].url = "https://www.aclu.org/socials/x"} <!-- x -->
{socials[6].url = "https://www.aclu.org/socials/youtube"} <!-- youtube -->
```

```html
{bluesky_url = "https://www.aclu.org/socials/bluesky"}
{facebook_url = "https://www.aclu.org/socials/facebook"}
{instagram_url = "https://www.aclu.org/socials/instagram"}
{threads_url = "https://www.aclu.org/socials/threads"}
{tiktok_url = "https://www.aclu.org/socials/tiktok"}
{x_url = "https://www.aclu.org/socials/x"}
{youtube_url = "https://www.aclu.org/socials/youtube"}
```

```
{if s.name == "bluesky"}{bluesky_url = s.url}{/if}
```