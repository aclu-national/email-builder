const sailthruVariables = `
{affiliation = lower(split(blast.name, ' ')[1])}
{affiliation_name = data[affiliation]["affiliation_name"]}
{address1 = data[affiliation]["address1"]}
{address2 = data[affiliation]["address2"]}
{donation_url = data[affiliation]["donation_url"]}
{facebook_url = data[affiliation]["facebook_url"]}
{instagram_url = data[affiliation]["instagram_url"]}
{logo_url = data[affiliation]["logo_url"]}
{logo_width = data[affiliation]["logo_width"]}
{twitter_url = data[affiliation]["twitter_url"]}
{website_url = data[affiliation]["website_url"]}
{email_pref = "https://action.aclu.org/preference-center/aclu-" + affiliation + "-email-preference?eid=" + email_id + "&referral=" + affiliation + "&unsub_url=" + optout_confirm_url}
{facebook_logo = "https://media.sailthru.com/64d/1k3/a/o/5db1cb21b75bf.png"}
{instagram_logo = "https://media.sailthru.com/64d/1k3/a/o/5db1cb1be2cb6.png"}
{twitter_logo = "https://media.sailthru.com/64d/1k3/a/o/5db1cb153c9f8.png"}
{privacy_statement = "https://www.aclu.org/american-civil-liberties-union-privacy-statement"}

{advo_name = data[affiliation]['signatures']['advo']['name']}
{advo_title = data[affiliation]['signatures']['advo']['title']}
{advo_pronouns = data[affiliation]['signatures']['advo']['pronouns']}
{advo_headshot = data[affiliation]['signatures']['advo']['headshot']}

{comms_name = data[affiliation]['signatures']['comms']['name']}
{comms_title = data[affiliation]['signatures']['comms']['title']}
{comms_pronouns = data[affiliation]['signatures']['comms']['pronouns']}
{comms_headshot = data[affiliation]['signatures']['comms']['headshot']}

{comms_name = data[affiliation]['signatures']['comms']['name']}
{comms_title = data[affiliation]['signatures']['comms']['title']}
{comms_pronouns = data[affiliation]['signatures']['comms']['pronouns']}
{comms_headshot = data[affiliation]['signatures']['comms']['headshot']}

{dev_name = data[affiliation]['signatures']['dev']['name']}
{dev_title = data[affiliation]['signatures']['dev']['title']}
{dev_pronouns = data[affiliation]['signatures']['dev']['pronouns']}
{dev_headshot = data[affiliation]['signatures']['dev']['headshot']}

{ed_name = data[affiliation]['signatures']['ed']['name']}
{ed_title = data[affiliation]['signatures']['ed']['title']}
{ed_pronouns = data[affiliation]['signatures']['ed']['pronouns']}
{ed_headshot = data[affiliation]['signatures']['ed']['headshot']}
{legal_name = data[affiliation]['signatures']['legal']['name']}
{legal_title = data[affiliation]['signatures']['legal']['title']}
{legal_pronouns = data[affiliation]['signatures']['legal']['pronouns']}
{legal_headshot = data[affiliation]['signatures']['legal']['headshot']}

{org_name = data[affiliation]['signatures']['org']['name']}
{org_title = data[affiliation]['signatures']['org']['title']}
{org_pronouns = data[affiliation]['signatures']['org']['pronouns']}
{org_headshot = data[affiliation]['signatures']['org']['headshot']}

{org_name = data[affiliation]['signatures']['org']['name']}
{org_title = data[affiliation]['signatures']['org']['title']}
{org_pronouns = data[affiliation]['signatures']['org']['pronouns']}
{org_headshot = data[affiliation]['signatures']['org']['headshot']}
`;

export default sailthruVariables;
