const template = `
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

{ed_name = data[affiliation]['signatures'][0]['ed']['name']}
{ed_title = data[affiliation]['signatures'][0]['ed']['title']}
{ed_pronouns = data[affiliation]['signatures'][0]['ed']['pronouns']}
{ed_headshot = data[affiliation]['signatures'][0]['ed']['headshot']}

{advo_name = data[affiliation]['signatures'][1]['advo']['name']}
{advo_title = data[affiliation]['signatures'][1]['advo']['title']}
{advo_pronouns = data[affiliation]['signatures'][1]['advo']['pronouns']}
{advo_headshot = data[affiliation]['signatures'][1]['advo']['headshot']}

{comms_name = data[affiliation]['signatures'][2]['comms']['name']}
{comms_title = data[affiliation]['signatures'][2]['comms']['title']}
{comms_pronouns = data[affiliation]['signatures'][2]['comms']['pronouns']}
{comms_headshot = data[affiliation]['signatures'][2]['comms']['headshot']}

{dev_name = data[affiliation]['signatures'][3]['dev']['name']}
{dev_title = data[affiliation]['signatures'][3]['dev']['title']}
{dev_pronouns = data[affiliation]['signatures'][3]['dev']['pronouns']}
{dev_headshot = data[affiliation]['signatures'][3]['dev']['headshot']}

{legal_name = data[affiliation]['signatures'][4]['legal']['name']}
{legal_title = data[affiliation]['signatures'][4]['legal']['title']}
{legal_pronouns = data[affiliation]['signatures'][4]['legal']['pronouns']}
{legal_headshot = data[affiliation]['signatures'][4]['legal']['headshot']}

{custom1_name = data[affiliation]['signatures'][5]['custom1']['name']}
{custom1_title = data[affiliation]['signatures'][5]['custom1']['title']}
{custom1_pronouns = data[affiliation]['signatures'][5]['custom1']['pronouns']}
{custom1_headshot = data[affiliation]['signatures'][5]['custom1']['headshot']}

{custom2_name = data[affiliation]['signatures'][6]['custom2']['name']}
{custom2_title = data[affiliation]['signatures'][6]['custom2']['title']}
{custom2_pronouns = data[affiliation]['signatures'][6]['custom2']['pronouns']}
{custom2_headshot = data[affiliation]['signatures'][6]['custom2']['headshot']}

{custom3_name = data[affiliation]['signatures'][7]['custom3']['name']}
{custom3_title = data[affiliation]['signatures'][7]['custom3']['title']}
{custom3_pronouns = data[affiliation]['signatures'][7]['custom3']['pronouns']}
{custom3_headshot = data[affiliation]['signatures'][7]['custom3']['headshot']}
`;

module.exports = template;
