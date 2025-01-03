const sailthruVariables = `
{affiliation = lower(split(blast.name, ' ')[1])}
{affiliation_name = data[affiliation]["affiliation_name"]}
{address1 = data[affiliation]["address1"]}
{address2 = data[affiliation]["address2"]}
{donation_url = data[affiliation]["donation_url"]}
{privacy_url = data[affiliation]["privacy_url"]}
{facebook_url = data[affiliation]['social']["facebook_url"]}
{instagram_url = data[affiliation]['social']["instagram_url"]}
{threads_url = data[affiliation]['social']["threads_url"]}
{x_url = data[affiliation]['social']["x_url"]}
{website_url = data[affiliation]["website_url"]}
{email_pref = "https://action.aclu.org/preference-center/aclu-" + affiliation + "-email-preference?eid=" + email_id + "&referral=" + affiliation + "&unsub_url=" + optout_confirm_url}

{facebook_logo = "https://media.sailthru.com/64d/1k3/a/o/5db1cb21b75bf.png"}
{instagram_logo = "https://media.sailthru.com/64d/1k3/a/o/5db1cb1be2cb6.png"}
{threads_logo = "https://media.sailthru.com/64d/1k8/c/u/6772ff5288341.png"}
{x_logo = "https://media.sailthru.com/64d/1k8/3/f/65f4803d78db4.png"}

{logo_default_url = data[affiliation]['logo']['default']['url']}
{logo_default_size = data[affiliation]['logo']['default']['size']}
{logo_twenty_url = data[affiliation]['logo']['twenty']['url']}
{logo_twenty_size = data[affiliation]['logo']['twenty']['size']}
{logo_fifty_url = data[affiliation]['logo']['fifty']['url']}
{logo_fifty_size = data[affiliation]['logo']['fifty']['size']}
{logo_sixty_url = data[affiliation]['logo']['sixty']['url']}
{logo_sixty_size = data[affiliation]['logo']['sixty']['size']}
{logo_seventyFive_url = data[affiliation]['logo']['seventyFive']['url']}
{logo_seventyFive_size = data[affiliation]['logo']['seventyFive']['size']}
{logo_eighty_url = data[affiliation]['logo']['eighty']['url']}
{logo_eighty_size = data[affiliation]['logo']['eighty']['size']}
{logo_ninety_url = data[affiliation]['logo']['ninety']['url']}
{logo_ninety_size = data[affiliation]['logo']['ninety']['size']}
{logo_custom_url = data[affiliation]['logo']['custom']['url']}
{logo_custom_size = data[affiliation]['logo']['custom']['size']}
{logo_newsletter_url = data[affiliation]['logo']['newsletter']['url']}
{logo_newsletter_size = data[affiliation]['logo']['newsletter']['size']}
{logo_impact_url = data[affiliation]['logo']['impact']['url']}
{logo_impact_size = data[affiliation]['logo']['impact']['size']}
{logo_foundation_url = data[affiliation]['logo']['foundation']['url']}
{logo_foundation_size = data[affiliation]['logo']['foundation']['size']}

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
{custom1_name = data[affiliation]['signatures']['custom1']['name']}
{custom1_title = data[affiliation]['signatures']['custom1']['title']}
{custom1_pronouns = data[affiliation]['signatures']['custom1']['pronouns']}
{custom1_headshot = data[affiliation]['signatures']['custom1']['headshot']}
{custom2_name = data[affiliation]['signatures']['custom2']['name']}
{custom2_title = data[affiliation]['signatures']['custom2']['title']}
{custom2_pronouns = data[affiliation]['signatures']['custom2']['pronouns']}
{custom2_headshot = data[affiliation]['signatures']['custom2']['headshot']}
{custom3_name = data[affiliation]['signatures']['custom3']['name']}
{custom3_title = data[affiliation]['signatures']['custom3']['title']}
{custom3_pronouns = data[affiliation]['signatures']['custom3']['pronouns']}
{custom3_headshot = data[affiliation]['signatures']['custom3']['headshot']}
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
`;

export default sailthruVariables;
