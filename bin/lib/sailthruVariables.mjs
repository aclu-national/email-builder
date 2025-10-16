const sailthruVariables = `
{affiliation = lower(split(blast.name, ' ')[1])}
{affiliation_name = data[affiliation]["affiliation_name"]}
{address1 = data[affiliation]["address1"]}
{address2 = data[affiliation]["address2"]}
{donation_url = data[affiliation]["donation_url"]}
{privacy_url = data[affiliation]["privacy_url"]}

{youtube_url = data[affiliation]['social']["youtube"]}
{website_url = data[affiliation]["website_url"]}
{email_pref = "https://action.aclu.org/preference-center/aclu-" + affiliation + "-email-preference?eid=" + email_id + "&referral=" + affiliation + "&unsub_url=" + optout_confirm_url}


{socials = data[affiliation]["social"]}

{bluesky_name = data[affiliation]["social"][0].name}
{facebook_name = data[affiliation]["social"][1].name}
{instagram_name = data[affiliation]["social"][2].name}
{threads_name = data[affiliation]["social"][3].name}
{tiktok_name = data[affiliation]["social"][4].name}
{x_name = data[affiliation]["social"][5].name}
{youtube_name = data[affiliation]["social"][6].name}

{bluesky_url = data[affiliation]["social"][0].url}
{facebook_url = data[affiliation]["social"][1].url}
{instagram_url = data[affiliation]["social"][2].url}
{threads_url = data[affiliation]["social"][3].url}
{tiktok_url = data[affiliation]["social"][4].url}
{x_url = data[affiliation]["social"][5].url}
{youtube_url = data[affiliation]["social"][6].url}

{bluesky_rank = data[affiliation]["social"][0].rank}
{facebook_rank = data[affiliation]["social"][1].rank}
{instagram_rank = data[affiliation]["social"][2].rank}
{threads_rank = data[affiliation]["social"][3].rank}
{tiktok_rank = data[affiliation]["social"][4].rank}
{x_rank = data[affiliation]["social"][5].rank}
{youtube_rank = data[affiliation]["social"][6].rank}

{icon_bluesky_blue = "https://media.sailthru.com/64d/1k9/8/j/68a49f38701c1.png"}
{icon_bluesky_red = "https://media.sailthru.com/64d/1k9/8/j/68a49f38eacc8.png"}
{icon_bluesky_white = "https://media.sailthru.com/64d/1k9/8/j/68a49f396cab9.png"}
{icon_facebook_blue = "https://media.sailthru.com/64d/1k9/8/j/68a49f3888919.png"}
{icon_facebook_red = "https://media.sailthru.com/64d/1k9/8/j/68a49f390e7e3.png"}
{icon_facebook_white = "https://media.sailthru.com/64d/1k9/8/j/68a49f3979649.png"}
{icon_instagram_blue = "https://media.sailthru.com/64d/1k9/8/j/68a49f389817a.png"}
{icon_instagram_red = "https://media.sailthru.com/64d/1k9/8/j/68a49f391e220.png"}
{icon_instagram_white = "https://media.sailthru.com/64d/1k9/8/j/68a49f398619b.png"}
{icon_threads_blue = "https://media.sailthru.com/64d/1k9/8/j/68a49f38a61a6.png"}
{icon_threads_red = "https://media.sailthru.com/64d/1k9/8/j/68a49f392da9a.png"}
{icon_threads_white = "https://media.sailthru.com/64d/1k9/8/j/68a49f39945d4.png"}
{icon_tiktok_blue = "https://media.sailthru.com/64d/1k9/8/j/68a49f38b8888.png"}
{icon_tiktok_red = "https://media.sailthru.com/64d/1k9/8/j/68a49f393b622.png"}
{icon_tiktok_white = "https://media.sailthru.com/64d/1k9/8/j/68a49f39a0f6b.png"}
{icon_x_blue = "https://media.sailthru.com/64d/1k9/8/j/68a49f38c5cd6.png"}
{icon_x_red = "https://media.sailthru.com/64d/1k9/8/j/68a49f394e4a9.png"}
{icon_x_white = "https://media.sailthru.com/64d/1k9/8/j/68a49f39b6c18.png"}
{icon_youtube_blue = "https://media.sailthru.com/64d/1k9/8/j/68a49f38d99fb.png"}
{icon_youtube_red = "https://media.sailthru.com/64d/1k9/8/j/68a49f395e481.png"}
{icon_youtube_white = "https://media.sailthru.com/64d/1k9/8/j/68a49f39c355d.png"}



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
