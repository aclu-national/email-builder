const template = `
{affiliation = lower(split(blast.name, ' ')[1])}
{affiation_name = data[affiliation]["affiliate_name"]}

{affiliate_address_1 = data[affiliation]["address_1"]}
{affiliate_address_2 = data[affiliation]["address_2"]}
{affiliate_donation = data[affiliation]["donation_href"]}
{affiliate_facebook = data[affiliation]["facebook_href"]}
{affiliate_instagram = data[affiliation]["instagram_href"]}
{affiliate_logo = data[affiliation]["logo_url"]}
{affiliate_logo_width = data[affiliation]["logo_width"]}
{affiliate_twitter = data[affiliation]["twitter_href"]}
{affiliate_website = data[affiliation]["website"]}

{email_pref = "https://action.aclu.org/preference-center/aclu-" + affiliation + "-email-preference?eid=" + email_id + "&referral=" + affiliation + "&unsub_url=" + optout_confirm_url}

{facebook_logo = "https://media.sailthru.com/64d/1k3/a/o/5db1cb21b75bf.png"}
{instagram_logo = "https://media.sailthru.com/64d/1k3/a/o/5db1cb1be2cb6.png"}
{twitter_logo = "https://media.sailthru.com/64d/1k3/a/o/5db1cb153c9f8.png"}

{privacy_statement = "https://www.aclu.org/american-civil-liberties-union-privacy-statement"}

{ed_name = data[affiliation]['signatures'][0]['ed']['name']}
{ed_title = data[affiliation]['signatures'][0]['ed']['title']}
{ed_pronouns = data[affiliation]['signatures'][0]['ed']['pronouns']}
{ed_headshot = data[affiliation]['signatures'][0]['ed']['headshot']}

{advo_name = data[affiliation]['signatures'][1]['advo']['name']}
{advo_title = data[affiliation]['signatures'][1]['advo']['title']}
{advo_pronouns = data[affiliation]['signatures'][1]['advo']['pronouns']}
{advo_headshot = data[affiliation]['signatures'][1]['advo']['headshot']}
`;

module.exports = template;
