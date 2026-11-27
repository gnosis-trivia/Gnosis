const RAW=`
// SONGS: S^artists^tier^flags^Title|alias   flags: p = upbeat praise, m = same title, different songs (not a collab)
S^ld^1^^You Say^6Up545NUflOiXo8cEraH49
S^ld^1^^Rescue^7r9kOxiNDnkAg5QKqtyjVk
S^ld^2^^Trust in You^7tgdDDf9thHbkQZCxAcaGt
S^ld,ak^2^m^How Can It Be|How Can It Be?
S^ld^2^^Thank God I Do^3CHBC2oSwZOYjbhxAorkl7
S^ld^3^^Look Up Child
S^ld^3^p^Still Rolling Stones
S^ld^3^^O Lord
S^ld^3^^First
S^ld^4^^Come Alive (Dry Bones)
S^ld^4^^Light of the World
S^ld^4^^Hold On to Me
S^ld^4^^Everything
S^ld^4^^Love Like This
S^ld^5^p^These Are the Days
S^ld^5^^Remember
S^ld^5^^Here's My Heart
S^ld^5^^Salt & Light|Salt and Light
S^ld^6^^Your Wings
S^ak,ld^3^^Time
S^mcm^1^^Promises^0aZFEiDKLK2B4gzPaGCZVm
S^ew,mcm^1^^Jireh^1goiRWxiG3GTlODrdDZ7NR
S^mcm^4^p^Joyful, Joyful, We Adore Thee|Joyful Joyful
S^mcm^4^p^Joy of the Lord
S^mcm^5^p^Joy to the World / Joy of the Lord|Joy to the World Joy of the Lord
S^ew,mcm,bl^2^^Talking to Jesus^6O5A41opiGbG2PphOnzZ6b
S^mcm^2^^Man of Your Word^4hnAN0T27QaDD9ybPa6dvk
S^ew,mcm^2^^Wait on You^2p3qr3HQBgsjeE5rFobSDy
S^mcm^3^^Refiner^0bHcGi6iafYk4TUrqvDYya
S^ew,mcm,th^3^p^Million Little Miracles
S^mcm,ur,bl^2^^Rest on Us^6Np4CGDEhl5v3TmnqTDhik
S^mcm^3^p^Kingdom^1pAyPMHDHBOR3zlTK1eUb4
S^mcm,bl^3^p^Fear Is Not My Future
S^mcm^4^p^God Really Loves Us
S^mcm^4^p^Jubilee
S^mcm,bl^5^^Communion^0jPoy99PN9i9DNbwPZanCQ
S^mcm,ur,ag^4^^Getting Ready
S^ew,bl^1^p^Graves into Gardens^0pNizrRmvu5S16fH6ccm0v
S^ew^1^^Do It Again^3iOpiHDobxZO7S4p9Y2Fgu
S^ew^1^^O Come to the Altar^5kKP7JQmJqZOovWytUUyYZ
S^ew,kj,cc^1^^The Blessing^5O306r2a9Nl7rm5ZlaTqka
S^ew^1^p^See a Victory^3gtqd9P8kZblHf4I7Ybub2
S^ew^2^^Same God^7nrhv8ZemanddTfXk28rdy
S^ew,bl^1^p^Praise^7Ee6XgP8EHKDhTMYLIndu9
S^ew,th^3^^Here Again^2zUlHLyVNyZ4U9jPqBghYv
S^ew^2^^Resurrecting^1Rm7FKqMaGtavnexDRGscq
S^ew^3^p^Rattle!|Rattle
S^ew,cw^3^^Never Lost
S^ew^3^p^Worthy
S^ew^4^^Give Me Faith
S^ew^4^p^Unstoppable God
S^ew^3^p^Only King Forever
S^ew^5^^Mighty Cross
S^ew^5^^Raised to Life
S^ew^4^^Here as in Heaven^0fPwregqch9wLJj4yQH6Bk
S^ew,th,mcm^4^^More Than Able
S^ew^2^^Trust in God^5EHMPGhsQY5o1pcjOejbMj
S^ew^4^p^My Testimony
S^ew,bl^4^p^Lion
S^ew^4^p^Echo
S^ew^5^^Hallelujah Here Below
S^er^2^p^Never Walk Away^0HJ8YJ3KXYhEEO90gb1bjp
S^er^1^p^Praises^68KVmSqAOYem04YsC37U7B
S^er^1^p^Goodbye Yesterday^7xlWpsFcfpeoJK633zrVid
S^er,th,ag^2^^At the Altar^2QmFBXdMGeXlsE0AV8j5qA
S^er,ur^2^m^Washed
S^er^3^^Better With You
S^er^3^p^Everything Everything
S^er^3^p^Thank God I'm Free
S^er^3^^Quiet
S^er^4^p^Amazing!|Amazing
S^er^4^^Father's House
S^er^3^p^This Is the Gospel
S^er^4^^Wild Love
S^er^5^p^IYKYK
S^er^5^^You Will Be Saved
S^er^5^^This Moment
S^er^5^^Most High
S^er^4^p^Victory Lap
S^er^5^^Sing of Your Love
S^er^5^^I Was, But God|I Was But God
S^er^4^p^Joy!|Joy
S^ncw^1^^Finished^7gjdfUhIVmIq5WCroJSxRv
S^ncw^2^p^Grace Revolution^al:5v9Bzb2hSrhGumz2ltxCKZ
S^ncw^2^^Anthem of Grace^1tjFRJo3INnMHNK9UCnjkD
S^ncw^3^p^Hearts on Fire^6A2nHL8kDvVfW8EPG4DVoQ
S^ncw^3^^Sweeter Than Wine^4RaWnyXN5EAPTcPbz9u8l8
S^ncw^3^^Refuge^6JbGxLSnazkU7f5KZyuUrm
S^ncw^4^^Forgiven Much^al:5v9Bzb2hSrhGumz2ltxCKZ
S^ncw^4^p^Restore!|Restore^al:5v9Bzb2hSrhGumz2ltxCKZ
S^hw,ncw^3^m^I Surrender^1JIG2af0KECQskfOSmDL3U
S^ncw^4^^I Will Follow After You^2ISQnTf7BB4mN5r8EEvEea
S^ncw^3^^Sky^al:6ruFC8So9XZDIU3t8lwOqb
S^ncw^4^^Shadow of Grace^2OpQNZUDbWwnpbwBbBFAlm
S^ncw^4^^All of You^488bYapKgiWZDhvCkXD3fL
S^ncw^4^^For You So Loved Me^al:6ruFC8So9XZDIU3t8lwOqb
S^ncw,bw^5^m^Letting Go^0uwEogYW4pmLBP5SB9EQaU
S^ncw^3^^I See Grace
S^bw,cw,bjj^1^^Goodness of God^1O6OPFAXdTdjHtT7Z2Hlt8
S^cw^1^^Believe for It^09VSG1KLDlanpc5o0TNRJE
S^cw^2^^Alabaster Box^2aJW8mRNGhSVE4WWUjkqQP
S^cw^2^^Mercy Said No^5gY6aIvL2lEBY8WEk9QSF4
S^cw^3^p^Hallelujah Praise
S^cw^4^^Throne Room
S^cw^3^^Count on Me
S^cw^4^^Come Jesus Come
S^cw^4^^Never Have to Be Alone
S^cw^5^p^Addictive Love
S^hu,taya^1^^Oceans (Where Feet May Fail)^3nyvIJisyUAa06DNf4vjWg
S^hu,taya^2^^Touch the Sky^58yhHre6kOePZPD15hZWgP
S^hu^2^^So Will I (100 Billion X)^1IagKG5ZPo1LvnKHQQ1P06
S^hu,taya^2^p^Another in the Fire^61qO4kGJUDewOwM73MBP0W
S^hu,ur^2^m^Hosanna
S^hu^2^^From the Inside Out^3b9nwrlK3YZ0DrX7LvZZ9g
S^hu^2^^The Stand^0pG6ujrm7d4TxoGXWVOMTu
S^hu^3^^Lead Me to the Cross
S^hu^3^^Take Heart
S^hu^3^p^Wonder
S^hu^3^^Scandal of Grace
S^hu^3^^Even When It Hurts (Praise Song)
S^hu^4^^Relentless
S^hu^4^^Highlands (Song of Ascent)
S^hu^4^^Prince of Peace
S^hu^3^^Good Grace
S^hu^4^^Know You Will
S^hu^3^^Whole Heart (Hold Me Now)
S^hu^3^p^One Way
S^hu^5^^Search My Heart
S^hu^4^p^Break Free
S^hu^4^^Shadow Step
S^hu^5^^Captain
S^hyf^1^p^Alive^09dOS0pqQsYMwCZ5C0rhXI
S^hyf^1^p^Wake^5a3m7oIDLcQgKN4YpnYuE7
S^hyf^2^p^This Is Living^366pHoFPCkqh0tSLSeIaSn
S^hyf^2^^Sinking Deep^3QntQwzIBV704yqCHLLmyH
S^hyf^3^p^Real Love
S^hyf^3^p^Every Little Thing
S^hyf^3^^Love Won't Let Me Down
S^hyf^3^p^P E A C E|PEACE
S^hyf^4^p^Best Friends
S^hyf^5^^Uncomplicated
S^hyf^4^^Where You Are
S^hw^1^^What a Beautiful Name^0t63MSEFmHcfglXS6vDwqQ
S^hw^1^p^Mighty to Save^4nGDKwMpg0HZdGOMgCHF9u
S^hw^1^^Cornerstone^445AQlPNuZuN1Y7g1qTQCx
S^hw^2^^Shout to the Lord^54YVaGWx0y4wKTeCoXqaIj
S^hw^2^^Who You Say I Am^0jBu6T5GgOekdHuXA5hVQM
S^hw,ur^2^m^King of Kings
S^hw^2^^This I Believe (The Creed)^2nqtqJYNSanofaGLCGmjMT
S^hw^3^^Forever Reign
S^hw^3^^Desert Song
S^hw^3^^O Praise the Name (Anástasis)|O Praise the Name (Anastasis)
S^hw^3^^Broken Vessels (Amazing Grace)
S^hw^3^^Man of Sorrows
S^hw^3^^Christ Is Enough
S^hw^3^^Seasons
S^hw^4^^Glorious Ruins
S^hw,cc^5^^Hope of the Ages
S^hw^4^^Saviour King|Savior King
S^hw^4^^None but Jesus
S^hw^4^^Came to My Rescue
S^hw^4^^Behold (Then Sings My Soul)
S^hw^4^^Jesus I Need You
S^hw^3^^Still
S^hw^4^^Touch of Heaven
S^hw^4^^Power of Your Love
S^hw^3^^Lord I Give You My Heart
S^hw^4^p^God Is Able
S^hw^5^^Grace to Grace
S^ak,bw,mcm^3^m^Prepare the Way
S^ak^2^^Thank You So Much Jesus^4isb96lpcN6o7wJSnx4uHT
S^ak^3^^Without You
S^ak^4^^Yesterday, Today, & Tomorrow|Yesterday Today and Tomorrow
S^ct,ak^3^mp^Made to Worship
S^ak^4^^Pray You Never Leave
S^ak^5^^Free at Last
S^ak^5^^What Would It Be Like?|What Would It Be Like
S^ak^5^^Still Worthy
S^ak^5^^Whole World
S^ak^5^^My Last Refrain
S^ak^1^^Hallelujah (If Not For Your Love)^5u3lEROF6PYAItJ7nPUPHS
S^ak^5^^Beautiful
S^ak^5^^In Your Eyes
S^ak,mcm^5^m^Real Thing
S^ak^5^^Trust You In All Things
S^taya^2^^For All My Life^49gozhH6p55OJaH6s1zk2c
S^taya^3^^Getaway
S^taya^1^p^Gonna Be Good^5VDc4qtuFTbBmVyBeAEbJg
S^taya^3^p^Worship!|Worship
S^taya^4^^Simple Phrase
S^taya^4^^Burn the Bridges
S^taya^3^^Come Into the Light
S^taya^4^^Take Heart (Again)
S^taya^4^^All Eyes on You
S^taya^4^^All About Jesus
S^taya^4^^One and Only
S^taya^4^^The Glory of God
S^taya^5^^The Reminder^4ud36QHbIFElKuP3tgGPxB
S^taya^5^^Child of God
S^taya^5^^Jesus Over Everything
S^taya^5^^In This Place
S^taya^5^^Lover of My Soul
S^taya^5^^Not Ashamed
S^taya^5^^Glory Hallelujah
S^taya^5^^My Refuge
S^ct^1^^How Great Is Our God^0jOSpB2zK2O0SNxj8ZT5lp
S^ct^1^^Good Good Father^1mWdyqs6Zvg8b1lKjDc8yB
S^ct^1^p^Our God^47AZ8Cb4MsOT4lCk4PcGQf
S^ct^1^^Amazing Grace (My Chains Are Gone)^5W9Al2ewPfzbWHOV2BAtBR
S^ct,bw,bjj,cw^1^^Holy Forever^1bfRXeYRGJF8aCxUpQ4yOq
S^ct^2^^Indescribable^1GoE6xwwZ20NbxCKVA5nz2
S^ct^2^p^Whom Shall I Fear (God of Angel Armies)^3S5lJ9jDNozsK0utmxqbRI
S^ct^2^^Jesus Messiah^1MpJ8XHlbOsUdrCWIjmweZ
S^ct,kj,bw,bjj^2^mp^Forever
S^ct^3^^We Fall Down
S^ct^3^p^Famous One
S^ct^3^^At the Cross (Love Ran Red)
S^ct^4^^Lay Me Down
S^ct,bw^3^m^I Will Rise
S^ct^3^p^Holy Is the Lord^23HvFDV5Z1VdvViQ8bbrGV
S^ct^4^p^Waterfall
S^ct^4^^Resurrection Power
S^ct^4^^Is He Worthy?|Is He Worthy
S^ct^4^^Nobody Loves Me Like You
S^ct^3^^God of This City
S^ct^4^^The Wonderful Cross
S^ct^4^^White Flag
S^ct^4^p^God's Great Dance Floor
S^ct^4^^I Lift My Hands
S^ct^4^^Jesus
S^ct,bw,ur^5^m^Home^2aMb1asq5acm7cDYlFsYhY
S^ct^4^p^Everlasting God
S^ct^5^^Enough
S^ct^5^^Yes and Amen
S^pw,bw^1^p^This Is Amazing Grace^0RW1xWSPxmbXf012RN3yWl
S^pw,bw,bjj^1^^Living Hope^6nVm313QmsPlNllntTart1
S^pw^1^p^House of the Lord^1jLAfwuB7v9lBdwDcJF39G
S^pw,bjj,bw^2^pm^Battle Belongs^2pYazEOXRSlMfxZzrelFbu
S^pw,bjj,bw^2^m^Hymn of Heaven^6UwxHDz7vGUhbDSevNUUcj
S^pw^2^p^Great Things^0jceXOZ2D9ZSzsfl3CKlxg
S^pw^3^^Cannons
S^pw^4^^Heaven Song
S^pw^4^^At Your Name (Yahweh, Yahweh)
S^pw^4^^Your Love Awakens Me
S^pw^4^^Sunday Is Coming
S^pw^3^^You're Beautiful
S^bl^1^^Gratitude^4VI7berVSzuaBt1BGrBksC
S^bl^1^p^Praise You Anywhere
S^bl^1^p^Hard Fought Hallelujah^3XGyVFaeMPGvjCF3ZTnUI3
S^bl^2^p^That's Who I Praise^2XgEPY4cIYFsXFhAIrZ57U
S^bl^3^p^Count 'Em|Count Em
S^bw,bl,cc^2^p^Too Good to Not Believe^5F24AeQlGfBxwa8WrFR3QQ
S^bw,bl^3^p^We Praise You
S^bl^3^p^House of Miracles
S^bl^4^p^Tear Off the Roof
S^bl^2^p^This Is a Move
S^cc,mcm^1^^Firm Foundation (He Won't)^16UFXi7IGVGG1mUSBMHfh2
S^cc^2^^Run to the Father
S^cc^3^^Nothing Else
S^cc^3^^Christ Be Magnified
S^cc^3^p^Ain't Nobody|Aint Nobody
S^cc^4^^Take You at Your Word
S^kj^1^^Revelation Song^66QSW1IoC9wIONDH6Qe88q
S^kj^2^^I Am Not Alone
S^kj^3^^The More I Seek You
S^kj,bjj,bw^3^m^Love Came Down
S^kj^3^p^We Are
S^kj^3^^Steady My Heart|Steady Heart
S^kj^4^^Find You on My Knees
S^kj^4^^Breathe on Us
S^kj^3^p^Majestic
S^kj^5^^Let the Heavens Open
S^kj^5^^Speak to Me
S^kj,ur^4^m^Healer
S^kj^5^^Heal Our Land
S^bw^1^p^Raise a Hallelujah^6CdzB6ZB5Af8wfAfAAQwaq
S^bw^1^^No Longer Slaves^1Vrt1BmnEiUjlA4m4VTUtz
S^bw,ca^1^^Reckless Love^2uKwH2Wc0vtVXrRieOMxlu
S^bw^2^^King of My Heart
S^bw^2^^Jesus We Love You
S^bw^2^^You Make Me Brave
S^bw^3^^Ever Be
S^bw^2^p^Lion and the Lamb
S^bw^3^^It Is Well
S^bw,mcm,ur,bl^3^p^Champion
S^bw,ca^3^p^Egypt
S^bw^4^p^Victory Is Yours
S^bw,bl^4^p^Come Out of That Grave
S^bw,bjj^3^^We Will Not Be Shaken
S^bw^3^^Pieces
S^bw,bjj^4^^God I Look to You
S^ur^1^p^Surrounded (Fight My Battles)^14afN25jVBf6gWuhmrpsej
S^ur,ag^2^m^Give Me Jesus
S^msc,ur,ag^1^m^Tremble|Tiembla^0K8gpm7OjXQMywaLlAJxbi
S^msc^3^^Nvr Stp|Never Stop
S^msc^3^p^Glory & Wonder|Glory and Wonder
S^msc^4^^Across the Universe
S^msc^4^^Heartbeat
S^msc^5^^Splendor of the Son|Splendour of the Son
S^msc^5^p^Miracle
S^msc^3^^Fountain (I Am Good)
S^msc^4^^Different
S^msc^5^^Mi Salvador
S^hw^4^^Remembrance (Communion Song)|Remembrance
S^hw^4^^Let There Be Light
S^hw^4^^The Passion
S^hw^3^^New Wine
S^hw^4^^Awake My Soul
S^hw^3^^This Is Our God
S^hw^4^^Blessed
S^hw^3^^My Redeemer Lives
S^hw^4^^Hear Our Praises
S^hw^5^^Better Than Life
S^hw^3^^Worthy Is the Lamb
S^hw^3^^The Potter's Hand
S^hw^3^^At the Cross^1AnvnQ11FC3N4TAkdkwJ7A
S^hw^3^m^Stronger (Hillsong)|Stronger
S^hw^4^^Jesus, What a Beautiful Name|Jesus What a Beautiful Name
S^hw^5^^God He Reigns
S^hw^4^^No Other Name
S^hw^5^^Calvary
S^hw^5^^Transfiguration
S^hu^3^^With Everything
S^hu^3^^Take It All
S^hu^4^p^Salvation Is Here
S^hu^4^p^Everyday
S^hu^5^^Arms Open Wide
S^hu^4^^Aftermath
S^hu^5^^Tapestry
S^hu^4^^Empires
S^hu^4^^Here Now (Madness)
S^hu^5^^Not Today
S^hu^5^^Heart Like Heaven
S^hu^4^^As You Find Me
S^hu^5^^Street Called Mercy
S^bw^4^p^Ain't No Grave|Aint No Grave
S^bw^4^^Be Enthroned
S^bw^5^^You Don't Miss a Thing
S^bw^4^^Closer
S^bw,bjj^4^^Come to Me
S^bw^5^^Shepherd
S^bw^4^^Fall Afresh
S^bw^4^p^Furious
S^mr^4^^You Alone Can Rescue
S^mr^4^p^Let Everything That Has Breath
S^mr^4^p^Undignified
S^mr^4^^Your Grace Finds Me
S^mr^5^^One Day (When We All Get to Heaven)
S^mr^5^^Endless Hallelujah
S^ct^4^^I Will Follow
S^ct^5^^Glory in the Highest
S^ct^4^^How Can I Keep From Singing
S^ct^5^^Sovereign
S^ct^5^^Who You Are to Me
S^kj^4^^The Garden
S^kj^4^^The Cause of Christ
S^kj^5^^One Desire
S^pw^5^^Divine Romance
S^pw,bw^4^m^I Believe
S^pw^4^m^Beautiful (Phil Wickham)|Beautiful
S^cw^4^^Let Them Fall in Love
S^cw^5^^More Than What I Wanted
S^cw^4^^Worthy of It All
S^hyf^4^p^Highs & Lows|Highs and Lows
S^ew^4^^Nothing Is Wasted
S^ew^5^^Grace So Glorious
S^ew^5^^Last Word
S^ew,th^4^^When Wind Meets Fire
S^bl^4^^The Jesus I Know Now
S^bl^5^^Just Believe
S^bl^5^^The Author
S^msc^3^p^This Is How I Thank the Lord
S^msc^4^^Eyes on You
S^msc^5^^How Beautiful
S^msc^5^^Now & Forever|Now and Forever
S^msc,mcm^5^m^Not Afraid
S^msc^4^^Maker of the Heavens
S^msc^4^^Never Let Me Down
S^msc^4^^Matter
S^msc^4^m^Desperate
S^msc^4^^So Good to Me
S^msc^5^^Everlasting Light
S^msc^5^^Steady
S^msc^5^^Close to You
S^msc^5^^Can't Refuse|Cant Refuse
S^msc^5^^You Never Fail Me (All My Life)
S^msc^5^^Millions
S^msc^5^^Love of a Lifetime
S^msc^5^^Your Love Will Never Change
S^ncw^4^^Trust in the Lord^59aDYvH35khGsYBfI9KMU8
S^ncw^5^^YHVH|Y H V H^5UbQhxUzju6Vx3OfueBSFi
S^ncw^5^^Supply^1HGWFhaMf73CqygUUeGIiT
S^ncw^5^^Your Lavish Love^2fPAgsT74HFOkCDzSEdl3c
S^ncw^4^^As He Is, So Are We|As He Is So Are We^16EfTG9XheE8x1qIK9xFxU
S^ncw^5^^Whom Jesus Loves^3dfiDnBYd14D9g4GE7kTaJ
S^hw^4^^Love So Great
S^hw^5^^One Thing
S^hw^4^^Fresh Wind
S^hw^5^^No One but You
S^hw^5^^With Us
S^hw^5^^Rise
S^hw^5^^Peace Has Come
S^hw^4^^Open Heaven (River Wild)|Open Heaven
S^hw^5^^In Control
S^hw,bw^5^m^Elohim
S^hw^5^^Prince of Heaven
S^hw^4^^God So Loved
S^hw^5^^Be Still (Hillsong)|Be Still
S^hw^5^^You Are Life
S^hw^5^^Dawn
S^hw^5^m^Come Alive (Hillsong)|Come Alive
S^hw^5^^See the Light
S^hw^5^^Upper Room
S^hw^5^^Every Breath
S^ew^5^^Kingdom Come^2djeGIAIx7PIzYXlk3xwWZ
S^ew^4^^Won't Stop Now|Wont Stop Now
S^ew^4^^Here Comes Heaven
S^ew^5^^What a Miracle
S^ew^5^^New Thing Coming
S^ew^4^^God I'm Just Grateful|God Im Just Grateful^2ggP6WjaTsloaiBxXY5JB7
S^ew^5^^Nobody
S^ew^4^^What I See
S^ew^5^^This Is the Kingdom
S^ew^5^^In Your Presence
S^ew^5^^Jesus I Come
S^ew^5^^Overcome
S^ew^5^^Uncontainable Love
S^ew^5^^Here in the Presence
S^ew^5^^Paradoxology
S^ew^5^^Mighty God (Another Hallelujah)|Mighty God
S^ew^5^^Gone
S^ew^5^^It Is So
S^ew^5^^Love Won't Give Up|Love Wont Give Up
S^ew^5^^What Would You Do
S^ew^5^^There Is a King
S^ew^5^^No One Beside
S^ew,mcm^5^^Have My Heart
S^ew^5^^Authority
S^ew^5^^Bye Bye Babylon
S^ew^5^^Water Is Wild
S^ew^5^^Forever YHWH
S^ew^5^^Always on Time
S^ew^5^^Keep On
S^ew^5^^Your Name Is God
S^ew^5^^Thank You (Elevation)|Thank You
S^ew,bl^4^^I Know a Name^4TXK7iqOnXCr8XWyj3b4dJ
S^ew,pw,bl^4^p^So So Good
S^ew,mcm,bl^5^^Used to This
S^ew,mcm,th^5^^Names
S^ew,mcm^5^^Before and After
S^bw^4^^Take Courage
S^bw^4^^Stand in Your Love
S^bw^4^^Alabaster Heart
S^bw^5^^Revival's in the Air|Revivals in the Air
S^bw,bjj^5^^For the Sake of the World
S^bw,bjj^5^^Nearness
S^bw^5^^You Are My One Thing
S^bw,bjj^4^^In Over My Head (Crash Over Me)|In Over My Head
S^bw^5^^Shine on Us
S^bw^5^m^Mercy (Bethel)|Mercy
S^bw^4^^Spirit Move
S^bw^5^^Glory to Glory
S^bw^4^^Starlight
S^bw^5^^Extravagant
S^bw^5^^You Know Me
S^bw^5^^Walk in the Promise
S^bw^5^^My Dear
S^bw^5^^This Is What You Do
S^bw^5^^Draw Near
S^bw^5^^Angels
S^bw,bjj^5^^Who You Are
S^bw^5^^Freedom
S^bw^5^^In Your Light
S^bw,bjj^5^^Forgiven
S^bw^5^^Anchor
S^bw^5^^Who Can Compare to You
S^bw,bjj^4^^Heaven Come
S^bw^4^^You Came (Lazarus)|You Came
S^bw^5^^Tides
S^bw^5^^Ascend
S^bw^5^^Breaking Through
S^bw^5^^Come Awaken Love
S^bw^5^^Heaven's Song|Heavens Song
S^bw,bjj^5^^Strong in Us
S^bw^4^^We Dance
S^bw^5^^Faithful to the End
S^bw,bjj^5^^Greatness of Your Glory
S^bw^5^m^Praises (Be Lifted Up)
S^bw^5^^Old for New
S^bw^5^^There's No Other Name|Theres No Other Name
S^bw^5^^The War Is Over
S^bw^5^^There Is a Name
S^bw^5^^Promises Never Fail
S^bw^5^^Every Crown
S^bw^5^^How Great a King
S^bw^5^^Christ Is Risen
S^bw^5^^The Lamb (Alleluia)|The Lamb
S^bw,bjj^5^^No One Like the Lord
S^bw,bjj,ur,ag^4^^The Church|Church
S^bw^5^^Holy Song
S^bw,bjj^5^^He Has Done Great Things
S^bw^5^^If the Lord
S^bw,kj^4^^Even Though I Walk
S^bw,ak^5^^My Hallelujah
S^bw^5^^Another Like You
S^bw^5^^The Christ and Cornerstone
S^bw^5^^He's the One|Hes the One
S^bw,bjj^5^^Praise Chorus
S^bw,bjj^5^^Made for More
S^bw^5^^Oh What Love
S^bw^5^^Sing of This
S^bw,bjj^5^^One
S^bw^5^^Jesus Have It All
S^bw,bjj^5^^Seas of Crimson
S^ct^5^^The Way I Was Made
S^ct^4^^Sing Sing Sing^67omCMxaCY82KmHmpLlmp5
S^ct^5^^He Shall Reign Forevermore
S^ct^5^^God Who Listens
S^ct^5^^Thank You Lord
S^ct^5^^Always
S^ct^5^^Yahweh (No One)|Yahweh No One
S^ct^5^^The Answer
S^ct^5^^No Greater Love
S^ct^5^^The First Hymn
S^ct^5^^How Good It Is
S^ct^4^^Be a Light
S^ct^5^^Expressions of Your Love
S^ct^5^^Son of God (Chris Tomlin)|Son of God
S^ct^4^^Your Grace Is Enough
S^ct^5^^Greater
S^ct^5^^Adore
S^ct^5^^Holy Roar
S^ct^5^^Be the Moon
S^ct^5^^Sing
S^ct^5^^Forever Home
S^ct^5^^Good to Be Loved by You
S^ct^5^^Still the King
S^ct^5^^Whisper My Name
S^ct^5^^Salvation
S^ct^5^^Give Us Clean Hands
S^ct^5^^Satisfied
S^ct^5^^Lord I'm Gonna Love You|Lord Im Gonna Love You
S^ct^5^^You're the One|Youre the One
S^ct^5^^Heart of God
S^ct^4^^You Are My King (Amazing Love)|Amazing Love
S^ct^5^^Doesn't He|Doesnt He
S^ct^5^^Jesus Saves
S^ct,bl^4^^I See You
S^pw^5^^Grace
S^pw^5^^I Will Wait for You There
S^pw^5^^Mystery
S^pw^5^^True Love
S^pw^5^m^Home (Phil Wickham)|Home
S^pw^5^m^After Your Heart (Phil Wickham)|After Your Heart
S^pw^5^^Heaven & Earth|Heaven and Earth
S^pw^5^^Safe
S^pw^5^^Cielo
S^pw^5^^In My Love
S^pw^5^^This Is the Day
S^pw^5^^Glory
S^pw^5^^My All in All
S^pw^5^^Till I Found You
S^pw^5^^You Cannot Be Stopped
S^pw^5^m^Behold
S^pw^5^m^This Is Our God (Phil Wickham)|This Is Our God
S^pw^5^^The Jesus Way
S^pw^5^m^Angels (Glory to God)
S^pw^5^^Shepherd Boy
S^pw^5^^The King Is in the Room
S^pw^5^^What an Awesome God
S^pw^5^^Homesick for Heaven
S^pw^5^^Fear Has No Power
S^pw^5^^It Really Is Amazing Grace
S^pw^5^^Everyday Hallelujah
S^pw^5^^Then Christ Came
S^pw^5^^Song in My Soul
S^pw^5^^How Great Is Your Love
S^pw^5^^It's Always Been You|Its Always Been You
S^pw^5^^Reason I Sing
S^pw^5^^Song of the Saints
S^pw^5^^God Is Good
S^pw^5^^Able
S^pw^5^^Running to a Runaway
S^pw^5^^Psalm 8
S^pw^5^^Follow the Light
S^pw^5^^Eyes for You (Psalm 141)|Eyes for You
S^pw^5^^Messiah
S^pw^5^^Your Name
S^pw^5^^Because of Your Love
S^pw^5^^One Who Overcomes
S^pw,mcm^4^^Worthy of My Song (Worthy of It All)|Worthy of My Song
S^pw,bl^5^^People of Heaven
S^pw,bl^5^^Where I'm Standing Now|Where Im Standing Now
S^ld^5^^Back to God
S^ld^5^^Turbulent Skies
S^ld^5^^Let It Be a Hallelujah
S^ld^5^^You Lead Me
S^ld^5^^I Will Be Here
S^ld^5^^Hard Love
S^ld^4^^Peace Be Still
S^ld^5^^Come Back Home
S^ld^5^^A Place Called Earth
S^ld^5^^Desperate
S^ld^5^^Loyal
S^ld^5^^I Am Yours
S^ld^5^^My Revival
S^ld^5^^This Girl
S^ld^5^^Rebel Heart
S^ld^5^^Inevitable
S^ld^5^^To Know Me
S^ld^5^^Kaleidoscope Jesus
S^ld^5^^Watchmen
S^ld^5^^Waiting
S^ld^5^^New
S^ld^5^^Be Okay
S^ld^5^^Darkness Falls
S^ld^5^^Nothing More
S^ld^5^^Almost Human
S^ld^5^^Close
S^ld^5^^You Alone
S^mcm^5^^Breathe
S^mcm^5^^No Longer Bound (I'm Free)|No Longer Bound
S^mcm^5^^Constant
S^mcm^5^^All That I Need
S^mcm^5^^Lift Me Up
S^mcm^5^^Diamond (I See the Glory)|Diamond
S^mcm^5^^Run 2 U|Run to You
S^mcm^5^^You Are the Lord
S^mcm^5^^I Need Help
S^mcm^5^^Still Holy
S^mcm^5^^King of Heaven (Reign Jesus Reign)|King of Heaven
S^mcm^5^^Bless Me
S^mcm^5^^Exodus
S^mcm,bl^5^^The Name
S^mcm^5^^Your Way's Better|Your Ways Better
S^mcm,ur^5^m^Remember (Maverick City)|Remember
S^mcm,ur,bl^5^^When I Lock Eyes With You
S^mcm,bl^5^m^Closer (Maverick City)|Closer
S^mcm^5^^Make It Right
S^mcm^5^^Revelation 19:1
S^mcm^5^^Heal Our Land / Come & Move|Come and Move
S^mcm^5^^Jealous
S^mcm^5^^Talkin Bout (Love)|Talkin Bout Love
S^mcm^5^^God's Got Us|Gods Got Us
S^mcm^5^^Praise You Through It
S^mcm^5^^Love Made a Way
S^mcm^5^^I Was Made to Glorify Your Name
S^mcm^5^^Holy (Maverick City)|Holy
S^mcm^5^^No Doubt About It
S^mcm^5^^Child of Love
S^mcm^5^^Awesome
S^mcm^5^^Sweet Jesus
S^mcm^5^^Came Too Far
S^bl^5^m^Run to You (Brandon Lake)
S^bl^5^^Pour Me Out
S^bl^5^^I Need a Ghost
S^bl^5^^Just Like Heaven
S^bl^5^^Honey in the Rock
S^bl^5^^Help!|Help
S^bl^5^^Miracle Child
S^bl^5^^Love of God
S^bl^5^^Sevens
S^bl^5^^When a Cowboy Prays
S^bl^5^^No Idols
S^bl^5^^How Good God Is
S^bl^5^^Found
S^bl^5^^Fall on Us
S^bl^5^^New Stories
S^bl^5^^We Are the Kingdom
S^bl^5^^Bless His Name (I've Got That Joy)|Bless His Name
S^bl^5^^Hands Up to Heaven
S^bl^5^^Can't Steal My Joy|Cant Steal My Joy
S^bl^5^^Hope
S^bl^4^^Coat of Many Colors
S^bl^5^^Nothing New (I Do)|Nothing New
S^bl^5^^Daddy's DNA|Daddys DNA
S^bl^5^^Greater Still
S^bl^5^^Adoption Song
S^bl^5^^Plans
S^bl^5^^King of Hearts
S^bl^5^^As for Me & My Home|As for Me and My Home
S^bl^5^^The Great I Am Can
S^bl^5^^Remember the Miracles
S^bl^5^^Right in the Middle
S^bl^5^^But God
S^bl^5^^Watch This!|Watch This
S^bl^5^^Spare Change
S^bl^5^^1,000,000 Reasons Why|Million Reasons Why
S^bl^5^^Son of David
S^bl^5^^Strength and Victory
S^bl,mcm^5^^Fresh Fire
S^bl^5^^You Call Me Friend
S^bl,mcm^5^^Better
S^bl^5^^Forever and Ever Amen
S^bl,mcm^5^^Under the Blood
S^bl^5^^Blessings Everywhere
S^bl^5^^Abandoned
S^bl^5^^Courage
S^bl^5^^Stand
S^kj^3^^Holy Spirit
S^kj^5^^I'm Singing|Im Singing
S^kj^5^m^Pure (Kari Jobe)|Pure
S^kj^5^^Adore Him
S^kj^4^^You Are for Me
S^kj^5^^What Love Is This
S^kj^5^^Let Your Glory Fall
S^kj^5^^First Love
S^kj^5^^Let the Light In
S^kj^5^^Your Nature
S^kj^5^^Embers
S^kj^5^^Amazed (Obsession)|Obsession|Amazed
S^kj^5^^Love Wins
S^kj^5^^My God
S^kj^5^^Look Upon the Lord
S^kj^5^^Yours Forever
S^kj^5^^The One That Really Matters
S^kj^5^^Broken
S^kj^5^^Surrendered
S^kj^5^^Rooms
S^kj^5^m^Fall Afresh (Kari Jobe)|Fall Afresh
S^cw^5^^Well, Alright|Well Alright
S^cw^5^^Anybody Wanna Pray
S^cw^5^m^All That I Need (CeCe Winans)|All That I Need
S^cw^5^^He's Concerned|Hes Concerned
S^cw^5^^You Are Loved
S^cw^5^m^Let Everything That Has Breath (CeCe Winans)|Let Everything That Has Breath
S^cw^4^^Waging War
S^cw^5^^More
S^cw^5^^Hey Devil!|Hey Devil
S^cw^5^^Lowly
S^cw,bw^5^m^The Blood
S^cw^5^^I've Got Joy|Ive Got Joy
S^cw^5^^What Are We Waiting For?|What Are We Waiting For
S^cw^4^^That's My King|Thats My King
S^cw^5^^Oh My Soul (Psalm 103)|Oh My Soul
S^cw^5^^No Greater
S^cw^5^^More Than This
S^cw^5^^We Pray
S^cw,ag^5^m^Testimony
S^cw^5^^Tonight Tonight
S^cw^5^^Rest in Me
S^cw,mcm^5^m^Take Me Back
S^cw^5^^The River
S^cw^5^^He Set My Life to Music
S^cw^5^^Walking Away
S^ca^5^^Where I Belong
S^ca^5^^Shekinah
S^ca^5^^All Is for Your Glory
S^ca^5^^Holy Ghost Party
S^ca^5^^My Beloved
S^ca^5^^Reason to Dance
S^ca^5^^Never Gonna Leave Me Dry
S^ca^5^^All to Him
S^ca^5^^Ascribe
S^ca^5^^Fun
S^ca,bw^4^m^Son of God
S^cc^5^^Hold It All
S^cc^5^^Heaven Fall
S^cc^5^^The Commission
S^cc^5^^Be Glad
S^cc^5^^Good (Can't Be Anything Else)|Good
S^hyf^5^^Falling Into You
S^hyf^4^^Let Go
S^hyf^5^^Just Jesus
S^hyf^5^m^Heart of God (Young & Free)|Heart of God
S^hyf^5^^Never Have I Ever
S^hyf^5^^World Outside Your Window
S^hyf^5^^As I Am
S^hyf^4^^Phenomena (DA DA)|Phenomena
S^hyf,bw^5^m^Back to Life
S^hyf^5^^Energy
S^hyf^5^^Pursue
S^hyf^5^^To My Knees
S^hyf^5^m^First Love (Young & Free)|First Love
S^hyf^5^^Lord Send Revival
S^hyf^5^^Gracious Tempest
S^hyf^5^^Marching On
W^art:msc^Name a Mosaic MSC album or EP^Mosaic MSC's first album, MSC (Live in LA), was recorded at the historic Wiltern Theater on 24 May 2014.^Glory & Wonder|Glory and Wonder~1;MSC (Live in LA)|MSC Live in LA|MSC~3;Human~3;This Is How I Thank the Lord~3;Heaven~3;Tiembla~4;Sunday, Vol. 1|Sunday Vol 1|Sunday~5;Different (Live at Mosaic)|Different~5
S^ur^4^^The Joy of Surrender
S^ur,bjj,bw^4^m^Our Father
S^mr^2^^Gracefully Broken

S^mr^1^^10,000 Reasons (Bless the Lord)|10000 Reasons|Ten Thousand Reasons^16e4Q3plJrKkncoLKR1CQ1
S^mr^1^^The Heart of Worship|Heart of Worship^5IRIZH1jSBkX223xCzN4aS
S^mr^1^p^Blessed Be Your Name^14HrSWGYPCDwqAcVFUYKsq
S^mr^2^^You Never Let Go
S^mr^3^^Better Is One Day
S^mr^3^^Once Again
S^mr^3^^Never Once
S^mr^4^^Holy Moment
S^mr^4^^Facedown
S^mr^4^^Here for You
S^mr^5^p^We Are the Free
S^mr^5^^Fires
S^mr^4^^Unbroken Praise
S^mr^4^p^Glory Song
S^seu^1^^A Thousand Generations^3Qxb2DckqQv0hflAv0YuTx
S^seu^1^p^What a God^5nMW3w5lb46z6BD0hbcX0a
S^seu^2^^A Forgiving God
S^seu^2^p^Move of God
S^seu^3^p^FREE!|Free
S^seu^3^^After Your Heart
S^seu^3^^Monday Morning Faith
S^seu^3^p^Fire in My Bones
S^seu^3^^When You Arrived
S^seu^4^^Slower I Go
S^seu^4^^Won't Look Back|Wont Look Back
S^seu^4^^Familiar Song
S^seu,taya^4^m^Walk With You
S^seu^5^^Dwell
S^seu^5^^Fruit Takes Time
S^ag^1^^Eyes Locked on the King^7DEwpeWvezPMN0laniQQG7
S^ag^2^^Too Good
S^ur,ag^2^^Pure
S^ag^3^^Defender
S^ag^3^^Who Else
S^ag^4^^Ways of God
S^ag^4^^There Goes That Man
S^bw,ag,bjj^4^^Center
S^bw,bjj^5^^You Are Good
S^bw,bjj^5^^Be Lifted High
S^bw^5^^I Will Exalt
S^bw^5^^Hope's Anthem
S^bw^5^^Deep Cries Out
S^bw^5^^God of the Redeemed
S^bw^5^^One Thirst
S^bw^5^^Be Still
S^bw,mcm^5^m^Thank You
S^bw^5^^Catch the Wind
S^bw^5^^Drenched in Love
S^bw^4^^Peace
S^bw^5^^Anything Is Possible
S^bw^5^^Reign Above It All
S^bw,bjj^5^^Sing His Praise Again (Oh My Soul)
S^bw^5^^My Hands Are Open
S^bw^5^^Better Than
S^bw^5^^Always Good
S^bw,ca^5^^Homecoming
S^bw,mr,mcm^5^^Son of Suffering
S^bw^5^^Weathered
S^bw,ca^5^^Reason to Praise
S^bw^5^^I Belong to Jesus
S^bw,bjj^5^^Send Me
S^bw^5^^My King Forever
S^bw^5^^Standing in Miracles
S^bw^5^^Wherever You Lead
S^bw^5^^Ring and Robe (Welcome Home)
S^bw,bjj^5^^I'll Be Everything
S^bw^5^^I Belong to You
S^bw^5^^Beauty
S^bw^5^^Precious Blood
S^bw^5^^Surrounded by Holy
S^bw^5^^I Am Your Beloved
S^bw^5^^Time and Time Again
S^bw^5^^Inheritance
S^bw^5^^Our King Jesus (Holy)
S^bw,bjj^5^^Come Up Here
S^bw,bjj,mcm^5^m^My Soul Sings
S^bw,bjj^5^^What Does It Sound Like
S^bw^5^^Let Heaven Shout
S^bw^4^^Tend
S^bw^5^^Let My Life Be Worship
S^bw^5^^Our Jesus
S^bw^5^^Stand in Awe
S^bw^5^^Jesus My King
S^bw^5^^Forever Be Praised
S^bw^5^^Honesty
S^bw^5^^You're the Only One
S^bw^5^^I Want Jesus
S^bw^5^^Greatness
S^bw^5^^All the Glory
S^ag^4^^Lean In
S^ag^4^^Anyone Else
S^ur,ag^4^^Consider Him
S^ur^5^^Glorious Father
S^ur^5^^You Satisfy
S^ur^5^^Praise You Forever
S^ur^5^^Jesus, Come Be the Center
S^ur^5^^Hallelujah (I Will Run)
S^ur^5^^God You Are
S^ur^5^^This Is My Shepherd
S^ur^5^^Your Name Is Great
S^ur^5^^Worthy of a Song
S^ur^5^^Celebrate the Lord
S^ur^5^^Something Always Changes
S^ur^5^^The One We Love / You Are Holy
S^ur^5^^To the One Who Is Seated on the Throne
S^ur^5^^Beauty for Ashes / You're Good
S^ur^5^^East Gate
S^ur^5^^The Father's Song
S^ur^5^^You Always Restore (The Winter Is Over)
S^ur^5^^I Love You
S^ur^5^^This Is Where I Belong
S^ur^5^^On the Altar
S^ur^5^^No One Like You
S^ur^5^^Keep My Heart Tender
S^ur^5^^Fear of God
S^ur^5^^Good Shepherd
S^ur^5^^Fairest
S^ur^5^^Land of the Living
S^ur^5^^Oh the Cross
S^ur^5^^Into the Battle
S^ur^5^^I Just Love You
S^ur^5^^Unto the Lamb
S^ur^5^^Emmanuel (Champion of the World)
S^ur^5^^Abide
S^ur^4^^Blood of Jesus
S^ur^5^^Lamb of God
S^ur^4^^My Reward
S^ur^5^^Dream
S^ur^5^^Slow Down
S^ur^4^^Always and Forever
S^ur^5^^At Your Altar
S^ur^5^^Open the Scroll (Only You Are Worthy)
S^ur^5^^Where You Stand
S^ur^5^^How Holy
S^ur^5^^Pure Thing
S^ur^5^^Living Sacrifice
S^ur^5^^This Is Your Mercy
S^ur^5^^We Have the Holy Spirit
S^ur^4^^You and You Alone
S^ur^5^^To the One
S^ur^5^^Faith and Wonder
S^ur^5^^Thank You Song
S^ur^4^^Holy Spirit (We Love You)
S^ur^5^^After You
S^ur^5^^Show Me Your Face
S^ur^5^^Adoration
S^ur,ag^4^^The Earth Sings Worthy
S^ur^5^^Rest
S^ag^5^^Window for Glory to Slide In
S^ag,ur^5^^Love Note
S^ag^5^^Privilege
S^ag^5^^Obsessed
S^ag^5^^Behold the King
S^ag^5^^Everything You Ever Wanted
S^ag^5^^Why So Serious
S^ew,th^2^^Jesus Be the Name
S^ew,th^2^^Been So Good
S^ew,th^3^^So Be It
S^ew,th^4^p^All of a Sudden
S^ew,th^4^^God Is Not Against Me
S^ew,bl,th^3^p^Might Get Loud
S^ew,th^4^^Sure Been Good
S^th^3^^The Wonderful Blood|Wonderful Blood
S^th^4^^Room
S^th^4^^Jesus the Only
S^ca^1^^Sparrows^25J20ks60mOJOYEJjJ1rUc
S^ca^1^^The Father's House|Fathers House^1Bh8yFTRHBjCfhdvMtai86
S^ca^2^^Dear God
S^ca^2^^Good for Nothing
S^ca^3^^Canyons
S^ca^3^^Unraveling
S^ca^3^^Build My Life
S^ca^4^^Pioneer
S^ca^4^^Kind
S^ca^4^^The Prodigal Song
S^ca^4^^Only Ever
S^ca^4^^Death Where Is Your Sting
S^ca,bw^4^^Endless Alleluia
S^ca^5^^Crashing In
S^ca^5^^Nothing More Than You
S^ca^4^^Misunderstood
W^art:mr^Name a Matt Redman album^10,000 Reasons and Your Grace Finds Me were both recorded live in Atlanta.^10,000 Reasons~1;The Heart of Worship|Heart of Worship~2;Your Grace Finds Me~2;Facedown~3;Beautiful News~3;Unbroken Praise~3;Glory Song~3;Let There Be Wonder~3;Lamb of God~3;Blessed Be Your Name: The Songs of Matt Redman|Blessed Be Your Name~3;Intimacy~4;Where Angels Fear to Tread~4;Sing Like Never Before~4;Coming Back to the Heart~4
W^art:seu^Name an SEU Worship album or EP^SEU Worship's 2025 releases include A Forgiving God and the EP Songs We've Been Meaning to Release.^What a God~2;A Forgiving God~2;Move of God~2;Songs We've Been Meaning to Release~3;SEU Worship Song Sessions|Song Sessions~4;From the Vanguard Room~5
W^art:ag^Name an Abbie Gamboa album^Abbie Gamboa and Aodhán King released the joint album THROWING PAINT in 2025.^Pure~1;Throwing Paint~2;Ways of God~3
W^art:th^Name a hit Tiffany Hudson co-wrote for Elevation Worship^Tiffany Hudson's co-writes include “Graves into Gardens”, “Wait on You” and “Never Lost”.^Graves into Gardens~1;Wait on You~2;Never Lost~2;More Than Able~3
W^art:ca^Name a Cory Asbury album^To Love a Fool (2020) debuted at No. 4 on Billboard's Top Christian Albums chart.^Reckless Love~1;To Love a Fool~2;Pioneer~3

S^bjj,bw^1^^One Thing Remains (Your Love Never Fails)^3H6HjEBx1NpB0MsWlgT9Gt
S^bjj,bw^2^^You're Gonna Be OK|Youre Gonna Be OK|You're Gonna Be Okay
S^bjj,bw^2^^Have It All
S^bjj,bw^3^^To Our God
S^bjj,bw^3^^Simple
S^bjj^3^^Here Is Love
S^bjj,bw^4^^The Great Beyond
S^bjj,bw^4^^Isn't He Beautiful|Isnt He Beautiful
S^bjj,bw^4^^I Still Believe
S^bjj,bw^4^^For the Cross
S^bjj,bw^4^^Chasing You
S^bjj,bw^4^p^Praise Is a Highway
S^bjj,bw^4^^For the One
S^bjj,bw^4^^God of Revival
S^bjj,bw^5^^What Would I Have Done
S^bjj,bw^5^^I Can Feel You
S^bjj,bw^5^^A Little Longer
S^bjj,bw^5^^Forever and a Day
S^bjj,bw^5^^I Love Your Presence
S^bjj,bw^5^^You Have Won Me
S^bjj^5^^Here I Bow
S^bjj^5^^Mention of Your Name
S^bjj,bw^5^^By the Grace of God
W^art:bjj^Name a song Brian or Jenn Johnson co-wrote^Brian Johnson co-wrote CCLI Top 100 songs including “Love Came Down”, “No Longer Slaves”, “Forever” and “One Thing Remains”.^Goodness of God~1;No Longer Slaves~1;Holy Forever~1;Living Hope~2;One Thing Remains (Your Love Never Fails)|One Thing Remains~2;Love Came Down~3;Forever~3;Have It All~3;We Will Not Be Shaken~3;You're Gonna Be OK|Youre Gonna Be OK~3
W^art:bjj^Name a Brian & Jenn Johnson album^After All These Years (2017) was the couple's first album of new songs since We Believe in 2006.^After All These Years~1;We Believe~3;Undone~4;Come Up Here~4;We Must Respond~4

S^ew,th^3^p^Dancing
S^ew^3^^Jehovah
S^ew^3^^There Is a Cloud
S^ew,bl^4^^Make a Way
S^ew,mcm^4^^Build Your Church
S^ew^4^^Available
S^ew,mcm,bl^4^^Come Again
S^ew^4^^Call God
S^ew,th^4^p^Runnin'|Runnin|Running
S^ew^3^^Yours (Glory and Praise)
S^ew^4^^Alleluia^1g3vqhMSUGXV3IvVa1lTTk
S^ew^4^p^Another One
S^ew,mcm^4^^Old Church Basement
S^ew^4^p^I Got Saved
S^ew^4^^Yahweh We ♥ You|Yahweh We Love You|Yahweh We Heart You|Yahweh We 3 You
S^ew^4^^With You
S^ew^4^^Fullness
S^ew,mcm^3^^Shall Not Want
S^ew,mcm^4^^Mercy

S^mcm,ur^2^^Move Your Heart
S^mcm,ur^2^p^I Thank God
S^mcm,ur^4^^Come and Behold
S^mcm,ur^4^^Your Blood Is Strong Enough
S^mcm,ur^5^^Everything Is Yours
S^mcm,ur^5^^I Want to See You

S^ncw^5^^139|One Three Nine^3DbsPJdjd2I30MAVkvhIBK
S^ncw^4^^Stronger^7pCv3KSv2dneI5KGn0A82L
S^ncw^5^^Pearl of Great Price|Pearl of Great Price (song)^1RqHsVdi37YuDVWxBcELXN
S^ncw^5^^The Pearl
S^ncw^5^^The Real Deal
S^ncw^4^^A Heart to Hear^4dODoZAWmePh3KaQA0C5ZZ
S^ncw^5^^Betrayal
S^ncw^4^^So Much More^4qY3xYsWVUZpDu0ZHR0iNe
S^ncw^4^^Unseen^al:3BPKpVUyERvgpZGK9GZyhz
S^ncw^5^^Love Burns Bright^1PHpwH7ebWma8kyvj5msrC
S^ncw^3^^Called for More^0gpuRQmyi5DRw4musOazmA
S^ncw^5^^Light of the World (New Creation)|Light of the World^1sS7osOwjGzkdr6nwcMI3T
S^ncw^2^^Face to Face^1cHvWt8D8qPjQMzTR0ctca
S^ncw^2^^You Are the One
S^ncw^3^^This I Know^0j8TOnr3ox5r73XkENYEX7
S^ncw^3^p^Praise the Lord for He Is Good^368g4rzWU2JxNW9S5NCxbF
S^ncw^3^^Beauty of Holiness^0YEQ5O2wAyOJYRjM7ouR6t
S^ncw^3^^Your Life for Mine^1rA5aXDw8ubfrnf03UDeYN
S^ncw^4^^Light in Our Dwellings^1buAWsRJVQQywdHTIZWZKt
S^ncw^4^^Yeshua, My Saviour|Yeshua My Saviour|Yeshua My Savior^2VtDZU0jt9QNkXY92MrJfW
S^ncw^3^^Latter Rain^7w3COuwojafWRbF4z9Ox8f
S^ncw^4^^Love Magnificent
S^ncw^3^^Glorious and Beautiful|Glorious & Beautiful^3OfMnYaS809QqghufGx63i
S^ncw^4^^Sons and Daughters|Sons & Daughters^al:6ruFC8So9XZDIU3t8lwOqb
S^ncw^3^^Wonderful (Grace Made Real)^1YR5cWluRLRsdeqNA5AHow
S^ncw^4^p^First Light^3vpm0ny5cKhWs3hhGmGoUb
S^ncw^4^p^Let the Fire Burn
S^ncw^4^^Upon This Rock
S^ncw^4^^Call Upon Your Name
S^ncw^4^^Everlasting^al:4rXmJ1en0QdoRzBOI0Cqgm
S^ncw^5^^The Wind and Wave|The Wind and the Wave^7j6YG83f314VtxQy4QflWn
S^ncw^5^^Star of Promise^2LgjXayVeWxWEB84HAQRtc
S^ncw^4^p^Sing With Me, Singapore|Sing With Me Singapore^08QtEPO5ei4Y7JpygQ05kq
S^ncw^4^^Give Me This Mountain^7wT2D18GoBHVtCufYokzeq
S^ncw^5^^Hope of Glory^5yumjF546VA43jyzOyjxsl
S^ncw^4^^More Than Enough^4fpgNpRxuitpEXoaKDCio8
S^ncw^5^^Powered by One^3Jctj55J6EaQyom8ewHoeY
S^ncw^5^^Rain Upon My Life^6eQ48eTofJJfU3RNAjNZz8
S^ncw^4^^Psalm 91^6ahyPSUYsTd4Z7pyfJtK4r
S^ncw^5^p^Rejoice O Israel
S^ncw^5^p^Joy in My Soul
S^ncw^5^p^Come Alive (New Creation)|Come Alive
S^ncw^5^p^Shine|Shine Jesus Shine / Shine
S^cc,kj^3^^Cover the Earth
S^cc,kj^4^^Til the End of Time|Till the End of Time
S^cc^4^^The Cross Has the Final Word
S^cc^4^^What Freedom Feels Like
S^cc^5^^Who Is This Man
S^cc,bl^4^^Plead the Blood
S^mcm^3^^In the Room
S^mcm^5^^Fill the Room
S^mcm^5^^Love Is a Miracle
S^mcm^5^^Lean Back
S^mcm^5^^Holy Ghost
S^mcm^5^^Such an Awesome God
S^mcm^5^^My Heart Your Home
S^mcm^5^^Be Praised
S^mcm^5^^To You
S^mcm^5^^The Story I'll Tell
S^mcm^4^^Yahweh
S^mcm^5^^Never Leave
S^mcm^5^^Hymn of the Ages
S^mcm^5^^Open Door
S^mcm^5^^God of Midnight
S^mcm^5^^Isaiah Song
S^mcm^5^^Yes & Amen
S^mcm^5^^Put on Love
S^mcm^5^^You Keep on Getting Better
S^mcm^4^^Most Beautiful / So in Love
S^mcm,ur^5^m^History
S^mcm,ur^4^^You Hold It All Together
S^mcm,ur^5^^Take It All Away
S^mcm^5^^God of Israel
S^mcm^5^^The Blood Is Still the Blood
S^mcm^5^^Ruins
S^mcm^5^^Testify
S^mcm^5^^Mighty One
S^mcm^5^^Freedom Looks Good on You
S^mcm^5^^Keep Praying
S^mcm^5^^God Will Work It Out
S^mcm^5^^Sufficient for Today
S^mcm^5^^Same Blood
S^mcm^5^^Sunday Morning
S^mcm^5^^Pretty Brown Skin
S^mcm^5^^On and On
S^mcm^5^^God Don't Make Mistakes
S^mcm^5^^It's Ok
S^mcm,bl^5^^The One You Love
S^mcm^5^^I Am
S^mcm^5^^Hold Tight
S^mcm^5^^Conclusions
S^mcm^5^^I Found You
S^mcm^5^^Can't Nobody
S^mcm^5^^Crazy Love
S^mcm^5^^Good News
S^mcm^5^^YET
S^mcm^4^^God Problems
S^mcm^5^^For My Good
S^mcm^5^^Pull Me Close
S^mcm^5^^You Remain
S^mcm^5^^Broken Melodies
S^mcm^5^^Costly
S^mcm^5^^Nothing Is Better
S^mcm^5^^Shammah
S^mcm^5^^Waves
S^mcm^5^^Can't Take My Worship
S^mcm^5^^Stand Still
S^mcm^4^^Nobody But Jesus
S^mcm^5^^He Won't Fail
S^mcm^5^^You're Welcome in This Place
S^mcm^5^^I Am Loved
S^mcm^5^^Nothing Left to Prove
S^mcm^5^^High Praise
S^mcm^5^^Rumors
S^mcm^5^^I Love to Sing About It
S^mcm^5^^Grave Clothes
S^mcm^5^^Promised Land
S^mcm^5^^Love Sick
S^mcm^5^^Let Me Remind You
S^mcm^5^^Questions
S^mcm^5^^Well, Well, Well
S^mcm^5^^Ways for Me
S^mcm^5^^We Have Hope
S^mcm,bl^5^^Where Would I Be?
S^mcm^5^^Miracle in the Works

S^er^2^p^Takeover|Take Over
S^er^5^p^Takeover Pt. 2|Takeover Part 2|Takeover Pt 2
S^er,seu^3^^Welcome Home
S^seu^3^^Wild Rushing Wind
S^seu^4^^Bless the Blood
S^seu^4^^The Cost Is a Joy|Cost Is a Joy
S^seu^4^^Glory Arise
S^seu^4^^Keep Me Right Here
S^seu^4^^Higher Than Mine
S^seu^5^^Oil and Offering|Oil & Offering
S^seu^5^^Motives
S^seu^5^^Who Is Like the Lord
S^seu^5^m^Send Me
S^seu^5^^Holy Spirit / The Dove|The Dove
S^seu^5^^Just Like Jesus
S^er^5^^Casa del Padre
S^er^5^^I Still Believe It
S^er^4^^Over & Over|Over and Over
S^er^4^^Purify
S^er^4^^Growing Pains
S^er^5^^Streetlights
S^er^5^^Fake Love
S^er^5^^Where Oh Where
S^er^4^^Believe It

// ARTIST extras
W^art:ld^Name a Lauren Daigle album^Behold (2016) is Lauren Daigle's Christmas album; Look Up Child (2018) carried “You Say”.^How Can It Be~1;Look Up Child~1;Behold~2;Lauren Daigle~2
W^art:ew^Name an Elevation Worship album^Old Church Basement (2021) was recorded jointly with Maverick City Music and gave the world “Jireh” and “Talking to Jesus”.^Graves into Gardens~1;Old Church Basement~2;Lion~2;Hallelujah Here Below~3;There Is a Cloud~3;Here as in Heaven~3;Can You Imagine?|Can You Imagine~3;When Wind Meets Fire~3;Wake Up the Wonder~4;Nothing Is Wasted~5;For the Honor~5
W^art:mcm^Name a Maverick City Music album^Kingdom Book One was a joint project with gospel legend Kirk Franklin.^Old Church Basement~1;Kingdom Book One~2;Maverick City Vol. 3 Part 1|Maverick City Vol 3~3;Jubilee: Juneteenth Edition|Jubilee~4;Move Your Heart~3;Maverick City Vol. 1|Maverick City Vol 1~4;Maverick City Vol. 2|Maverick City Vol 2~4
W^art:er^Name an Elevation Rhythm album^Growing Pains (2022) was Elevation Rhythm's first full-length album.^Growing Pains~2;This Is the Gospel~2;Victory Lap~3;Washed~3
W^art:ncw^Name a New Creation Worship album^Be Still is New Creation Worship's Mandarin album, with new songs and translations of the church's English favourites.^Anthem of Grace~2;Encounter~2;Gospel Revolution~3;As He Is, So Are We|As He Is So Are We~3;You Alone I Praise~4;Be Still~4;Much More~5;Called for More~5;Face to Face~5;139|One Three Nine~6;Stronger~6;Pearl of Great Price|The Pearl of Great Price~6;So Much More~6;Whom Jesus Loves~3;Your Life for Mine~4;Behold|仰望~4;I Sing Hosanna~5;The Perfect Offering~5
W^art:cw^Name a CeCe Winans album^CeCe Winans' versions of “Goodness of God” and “Never Lost” are on her 2021 live album Believe for It.^Believe for It~1;Alabaster Box~2;Alone in His Presence~3;Throne Room~3;Let Them Fall in Love~4;Purified~4
W^art:hu^Name a Hillsong UNITED album^Zion (2013) gave Hillsong UNITED its biggest hit, “Oceans (Where Feet May Fail)”.^Zion~1;Empires~2;Wonder~2;Aftermath~2;People~3;United We Stand~4;All of the Above~4;Look to You~4;The I Heart Revolution~4;Of Dirt and Grace~4;Are We There Yet?|Are We There Yet~4;Across the Earth~5;To the Ends of the Earth~5;King of Majesty~5
W^art:hyf^Name a Hillsong Young & Free album or EP^“Alive” and “Wake” both come from Youth Revival (2016).^We Are Young & Free|We Are Young and Free~1;Youth Revival~1;This Is Living~2;III~3;All of My Best Friends~3
W^art:hw^Name a Hillsong Worship (Hillsong Live) album^“What a Beautiful Name” first appeared on Let There Be Light (2016).^Shout to the Lord~2;Mighty to Save~2;Cornerstone~2;Glorious Ruins~2;Let There Be Light~2;No Other Name~3;Open Heaven / River Wild|Open Heaven~3;There Is More~3;Awake~3;Saviour King|Savior King~3;This Is Our God~4;Faith + Hope + Love|Faith Hope Love~4;These Same Skies~4
W^art:ak^Name a song Aodhán King co-wrote for another artist^Aodhán King co-wrote Hillsong UNITED's “Whole Heart (Hold Me Now)” and Elevation Worship's “Great Is”.^Whole Heart (Hold Me Now)|Whole Heart~1;Touch of Heaven~2;Take You at Your Word~3;While I'm in the Wind|While Im in the Wind~4;What a Friend~4;Great Is~4
W^art:ct^Name a Chris Tomlin album^Hello Love (2008) included “Jesus Messiah” and “I Will Rise”.^Arriving~2;Burning Lights~2;Love Ran Red~2;Holy Roar~2;See the Morning~3;Hello Love~3;And If Our God Is For Us|And If Our God Is For Us...~3;Never Lose Sight~3;Chris Tomlin & Friends|Chris Tomlin and Friends~3;Not to Us~4;The Noise We Make~4;Always~4
W^art:pw^Name a Phil Wickham album^Hymn of Heaven (2021) carries “Battle Belongs” as well as its title track.^Living Hope~1;Hymn of Heaven~1;I Believe~2;Children of God~3;Cannons~3;The Ascension~3;Response~4;Heaven & Earth|Heaven and Earth~4;Phil Wickham~4
W^art:bl^Name a Brandon Lake album^Coat of Many Colors (2023) followed House of Miracles (2020).^House of Miracles~1;Coat of Many Colors~2;King of Hearts~2
W^art:kj^Name a Kari Jobe album^Majestic (2014) was recorded live and features “Forever” and “I Am Not Alone”.^Majestic~1;Kari Jobe~2;Where I Find You~2;The Garden~2
W^art:bw^Name a Bethel Music album^“No Longer Slaves” first appeared on We Will Not Be Shaken (2015).^Have It All~1;Victory~2;We Will Not Be Shaken~2;Tides~2;Starlight~3;Peace~3;Revival's in the Air|Revivals in the Air~4;For the Sake of the World~4;The Loft Sessions~4
W^art:taya^Name a Hillsong UNITED song TAYA has sung lead on^Taya's voice on “Oceans (Where Feet May Fail)” helped make it one of the best-known worship songs of the 2010s.^Oceans (Where Feet May Fail)|Oceans~1;Touch the Sky~2;Another in the Fire~2

// HYMNS
W^hymn^Name a hymn^“It Is Well with My Soul” was written by Horatio Spafford after his four daughters died when the Ville du Havre sank in 1873.^Amazing Grace~1;How Great Thou Art~1;It Is Well with My Soul|It Is Well~1;Great Is Thy Faithfulness~1;Holy, Holy, Holy|Holy Holy Holy~1;Be Thou My Vision~2;Blessed Assurance~2;The Old Rugged Cross|Old Rugged Cross~2;Rock of Ages~2;A Mighty Fortress Is Our God|A Mighty Fortress~2;Come Thou Fount of Every Blessing|Come Thou Fount~2;When I Survey the Wondrous Cross|When I Survey~2;What a Friend We Have in Jesus~2;Jesus Loves Me~2;In Christ Alone~2;To God Be the Glory~3;And Can It Be~3;Crown Him with Many Crowns~3;All Hail the Power of Jesus' Name|All Hail the Power~3;Nothing but the Blood~3;Abide with Me~3;Just As I Am~3;Turn Your Eyes Upon Jesus~3;I Surrender All~3;Jesus Paid It All~3;Because He Lives~3;Trust and Obey~3;Onward Christian Soldiers~3;Doxology|Praise God from Whom All Blessings Flow~3;Praise to the Lord, the Almighty|Praise to the Lord~4;Fairest Lord Jesus~4;Leaning on the Everlasting Arms~4;Standing on the Promises~4;O for a Thousand Tongues to Sing|O for a Thousand Tongues~4;Joyful, Joyful, We Adore Thee|Joyful Joyful~4;This Is My Father's World~4;'Tis So Sweet to Trust in Jesus|Tis So Sweet~4;Softly and Tenderly~4;Be Still, My Soul|Be Still My Soul~4;Guide Me, O Thou Great Jehovah|Bread of Heaven~4;Love Divine, All Loves Excelling|Love Divine~4;Nearer, My God, to Thee|Nearer My God to Thee~4;All Creatures of Our God and King~4;Christ the Lord Is Risen Today~4;I Need Thee Every Hour~4;Victory in Jesus~4;My Hope Is Built|The Solid Rock~4;Count Your Blessings~4;Before the Throne of God Above~4;Morning Has Broken~4;O Sacred Head, Now Wounded|O Sacred Head~5;How Firm a Foundation~5;Jesus Shall Reign~5;There Is a Fountain~5;The Love of God~5;Pass Me Not, O Gentle Saviour|Pass Me Not~5;Draw Me Nearer|I Am Thine, O Lord~5;Take My Life and Let It Be~5;For the Beauty of the Earth~5;Whiter Than Snow~6;He Hideth My Soul~6;Wonderful Grace of Jesus~6;Are You Washed in the Blood?|Washed in the Blood~6
W^hymn^Name a hymn by Fanny Crosby^Fanny Crosby lost her sight as a baby and still wrote over 8,000 hymns, often under pen names.^Blessed Assurance~1;To God Be the Glory~1;Pass Me Not, O Gentle Saviour|Pass Me Not~2;Jesus, Keep Me Near the Cross|Near the Cross~2;All the Way My Saviour Leads Me|All the Way~3;Rescue the Perishing~3;Draw Me Nearer|I Am Thine, O Lord~3;Safe in the Arms of Jesus~4;Praise Him! Praise Him!|Praise Him Praise Him~4;Tell Me the Story of Jesus~4;Redeemed, How I Love to Proclaim It|Redeemed~4;He Hideth My Soul|A Wonderful Saviour Is Jesus My Lord~5;Saved by Grace~5;Close to Thee|Thou My Everlasting Portion~5;Saviour, More Than Life to Me~6;Jesus Is Tenderly Calling~6
W^hymn^Name a hymn by Charles Wesley^Charles Wesley, brother of Methodism's founder John Wesley, wrote around 6,000 hymns.^Hark! The Herald Angels Sing|Hark the Herald Angels Sing~1;And Can It Be~1;O for a Thousand Tongues to Sing|O for a Thousand Tongues~2;Christ the Lord Is Risen Today~2;Love Divine, All Loves Excelling|Love Divine~2;Jesus, Lover of My Soul|Jesus Lover of My Soul~3;Come, Thou Long Expected Jesus|Come Thou Long Expected Jesus~3;Rejoice, the Lord Is King|Rejoice the Lord Is King~3;Soldiers of Christ, Arise~4;Arise, My Soul, Arise~4;Lo! He Comes with Clouds Descending|Lo He Comes~5;O Thou Who Camest from Above~5;A Charge to Keep I Have~5;Hail the Day That Sees Him Rise~6
W^hymn^Name a hymn by Isaac Watts^Isaac Watts, “the father of English hymnody”, based “Joy to the World” on Psalm 98.^Joy to the World~1;When I Survey the Wondrous Cross|When I Survey~1;O God, Our Help in Ages Past|O God Our Help~2;Alas! And Did My Saviour Bleed|At the Cross~3;Jesus Shall Reign~3;I Sing the Mighty Power of God~4;Come, We That Love the Lord|We're Marching to Zion|Marching to Zion~4;Am I a Soldier of the Cross?|Am I a Soldier of the Cross~4;I'll Praise My Maker~5;There Is a Land of Pure Delight~5;Before Jehovah's Awful Throne~6;Give Me the Wings of Faith~6
W^hymn^Name a Christmas hymn or carol^“Silent Night” was first sung on Christmas Eve 1818 in Oberndorf, Austria, accompanied by guitar.^Silent Night~1;O Come, All Ye Faithful|O Come All Ye Faithful~1;Joy to the World~1;Hark! The Herald Angels Sing|Hark the Herald~1;O Holy Night~1;Away in a Manger~1;The First Noel|The First Nowell~2;O Little Town of Bethlehem~2;Angels We Have Heard on High~2;God Rest Ye Merry, Gentlemen|God Rest Ye Merry Gentlemen~2;What Child Is This?|What Child Is This~2;It Came Upon the Midnight Clear~3;O Come, O Come, Emmanuel|O Come O Come Emmanuel~3;Once in Royal David's City~3;Go Tell It on the Mountain~3;Good King Wenceslas~3;Angels from the Realms of Glory~4;In the Bleak Midwinter~4;While Shepherds Watched Their Flocks~4;Come, Thou Long Expected Jesus~4;We Three Kings~3;Ding Dong Merrily on High~5;The Holly and the Ivy~5;See Amid the Winter's Snow~6;Infant Holy, Infant Lowly~6
W^hymn^Name an Easter or Good Friday hymn^“Thine Be the Glory” is sung to a tune from Handel's oratorio Judas Maccabaeus.^The Old Rugged Cross~1;Christ the Lord Is Risen Today~1;Because He Lives~2;Low in the Grave He Lay|Christ Arose|Up from the Grave He Arose~2;When I Survey the Wondrous Cross|When I Survey~2;Thine Be the Glory~2;Crown Him with Many Crowns~3;Were You There?|Were You There~3;He Lives|I Serve a Risen Saviour~3;Man of Sorrows, What a Name|Hallelujah, What a Saviour~4;O Sacred Head, Now Wounded|O Sacred Head~4;Jesus Christ Is Risen Today~4;The Strife Is O'er~5;At the Cross~4;Jesus Paid It All~3;Nothing but the Blood~3;Alleluia! Sing to Jesus~6;Lift High the Cross~5
W^hymn^Name a hymn written before 1800^The Doxology's words were written by Bishop Thomas Ken in 1674, and A Mighty Fortress goes back to Martin Luther in the 1520s.^Amazing Grace~1;A Mighty Fortress Is Our God|A Mighty Fortress~1;Joy to the World~1;Rock of Ages~2;When I Survey the Wondrous Cross|When I Survey~2;Come Thou Fount of Every Blessing|Come Thou Fount~2;O God, Our Help in Ages Past|O God Our Help~2;And Can It Be~2;Hark! The Herald Angels Sing|Hark the Herald~2;O Come, All Ye Faithful|O Come All Ye Faithful~2;Doxology|Praise God from Whom All Blessings Flow~3;O for a Thousand Tongues to Sing~3;Christ the Lord Is Risen Today~3;Love Divine, All Loves Excelling|Love Divine~3;All Hail the Power of Jesus' Name~3;How Firm a Foundation~4;Glorious Things of Thee Are Spoken~4;Praise to the Lord, the Almighty|Praise to the Lord~4;Now Thank We All Our God~4;Guide Me, O Thou Great Jehovah~4;Jesus, Lover of My Soul~4;All People That on Earth Do Dwell|Old Hundredth~5;O Sacred Head, Now Wounded~5;Jesus Shall Reign~5;There Is a Fountain~5
W^hymn^Name a hymn with “Jesus” in the title^“Turn Your Eyes Upon Jesus” was written by Helen Lemmel in 1922.^What a Friend We Have in Jesus~1;Jesus Loves Me~1;Turn Your Eyes Upon Jesus~2;Jesus Paid It All~2;I Have Decided to Follow Jesus~2;'Tis So Sweet to Trust in Jesus|Tis So Sweet~3;Jesus, Keep Me Near the Cross~3;Fairest Lord Jesus~3;All Hail the Power of Jesus' Name~3;Victory in Jesus~3;Jesus Shall Reign~4;Jesus, Lover of My Soul~4;Jesus Christ Is Risen Today~4;Come, Thou Long Expected Jesus~4;Wonderful Grace of Jesus~5;Safe in the Arms of Jesus~5;Tell Me the Story of Jesus~5;O How I Love Jesus~5;Jesus, the Very Thought of Thee~5;Take the Name of Jesus with You~6;Jesus Is All the World to Me~6;Jesus, Saviour, Pilot Me~6
W^hymn^Name a hymn or gospel song about heaven^Albert Brumley's “I'll Fly Away” (1929) became one of the most-recorded gospel songs of all time.^When We All Get to Heaven~1;I'll Fly Away~1;Shall We Gather at the River?|Shall We Gather at the River~2;When the Roll Is Called Up Yonder~2;In the Sweet By and By~2;Swing Low, Sweet Chariot~2;When the Saints Go Marching In~2;Beulah Land~3;Face to Face~4;It Is Well with My Soul~3;Because He Lives~4;Nearer, My God, to Thee~3;Abide with Me~4;Jerusalem the Golden~5;There Is a Land of Pure Delight~5;Marching to Zion|We're Marching to Zion~4
W^hymn^Name a hymn writer^John Newton, who wrote “Amazing Grace”, had captained slave ships before his conversion and later campaigned against the trade.^Fanny Crosby~1;Charles Wesley~1;Isaac Watts~1;John Newton~1;Martin Luther~2;Horatio Spafford~2;John Wesley~3;Augustus Toplady~3;Thomas Chisholm~3;Robert Robinson~3;George Bennard~3;Bill Gaither|Gloria Gaither|Gaither~3;Stuart Townend~3;Keith Getty|Kristyn Getty|Getty~3;Joseph Scriven~4;Philip Bliss~4;Carl Boberg~4;Stuart K. Hine|Stuart Hine~4;Reginald Heber~4;Henry Lyte~4;Charlotte Elliott~4;William Cowper~4;Frances Havergal~4;Ira Sankey~4;Helen Lemmel~4;Julia Ward Howe~4;Francis of Assisi~4;Edward Mote~5;Elisha Hoffman~5;Philip Doddridge~5;Annie Hawks~5;Cecil Frances Alexander~5;Sabine Baring-Gould~5;Edward Perronet~5;Thomas Ken~5;John Bunyan~5;Matthew Bridges~6;Folliott Pierpoint~6;Joachim Neander~6;Catherine Winkworth~6;William Williams~6
W@2026-11-25^hymn^Name a hymn from Olney Hymns by John Newton or William Cowper^Olney Hymns (1779) held 348 hymns: William Cowper wrote 67 and John Newton, curate of Olney, the other 281.^Amazing Grace|Faith's Review and Expectation~1;How Sweet the Name of Jesus Sounds|The Name of Jesus~2;Glorious Things of Thee Are Spoken|Zion, or the City of God~2;God Moves in a Mysterious Way|Light Shining Out of Darkness~2;There Is a Fountain|There Is a Fountain Filled with Blood|Praise for the Fountain Opened~3;O for a Closer Walk with God|Oh for a Closer Walk with God|Walking with God~4;Jesus, Where'er Thy People Meet|Jesus Where Ever Thy People Meet~5;Hark, My Soul! It Is the Lord|Hark My Soul It Is the Lord|Lovest Thou Me~5;Sometimes a Light Surprises|Joy and Peace in Believing~6;Begone, Unbelief|Begone Unbelief~6;Though Troubles Assail Us|Though Troubles Assail|The Lord Will Provide~6;Come, My Soul, Thy Suit Prepare|Ask What I Shall Give Thee~6
W@2026-11-26^hymn^Name a hymn written by a woman (other than Fanny Crosby)^Cecil Frances Alexander wrote “All Things Bright and Beautiful” and “Once in Royal David's City” for Hymns for Little Children (1848), to teach the Apostles' Creed.^Jesus Loves Me~1;Turn Your Eyes Upon Jesus|Turn Your Eyes upon Jesus~1;Nearer, My God, to Thee|Nearer My God to Thee~2;Just As I Am|Just As I Am, Without One Plea~2;All Things Bright and Beautiful~2;Take My Life and Let It Be|Take My Life~2;When We All Get to Heaven~3;His Eye Is on the Sparrow~3;Morning Has Broken~3;I Need Thee Every Hour~3;In the Bleak Midwinter~3;Jesus Paid It All~3;Have Thine Own Way, Lord|Have Thine Own Way~4;Be Still, My Soul|Be Still My Soul~4;'Tis So Sweet to Trust in Jesus|Tis So Sweet to Trust in Jesus~4;Beneath the Cross of Jesus~4;Once in Royal David's City~4;I Love to Tell the Story~4;Grace Greater Than Our Sin|Grace Greater than Our Sin~5;Break Thou the Bread of Life~5
W@2026-11-27^hymn^Name a hymn Keith Getty wrote with Stuart Townend^Keith Getty wrote the tune of “In Christ Alone” and Stuart Townend the words; it was their first song together, in 2001.^In Christ Alone~1;The Power of the Cross|Power of the Cross~2;Speak, O Lord|Speak O Lord~2;O Church, Arise|O Church Arise~3;See, What a Morning|See What a Morning~3;Behold the Lamb|Behold the Lamb (Communion Hymn)~4;Come, People of the Risen King|Come People of the Risen King~4;The Perfect Wisdom of Our God|Perfect Wisdom of Our God~4;Joy Has Dawned|Joy Has Dawned Upon the World~4;Across the Lands~4;My Heart Is Filled with Thankfulness~5;Jesus Is Lord~5;Every Promise~5;Fullness of Grace~5;Father, We Have Sinned|Father We Have Sinned~6;May the Peace of God~6

// ===== OLD TESTAMENT =====
B^Genesis^Name a person in Genesis^Methuselah lived 969 years, the longest lifespan recorded in the Bible (Genesis 5:27).^Adam~1~Genesis 2:7;Eve~1~Genesis 3:20;Noah~1~Genesis 6:8;Abraham|Abram~1~Genesis 12:1;Joseph~1~Genesis 37:3;Isaac~2~Genesis 21:3;Jacob|Israel~2~Genesis 25:26;Sarah|Sarai~2~Genesis 17:15;Cain~2~Genesis 4:1;Abel~2~Genesis 4:2;Esau~3~Genesis 25:25;Rebekah|Rebecca~3~Genesis 24:15;Rachel~3~Genesis 29:6;Leah~3~Genesis 29:16;Lot~3~Genesis 11:27;Ishmael~3~Genesis 16:11;Methuselah~3~Genesis 5:27;Hagar~4~Genesis 16:1;Enoch~4~Genesis 5:24;Laban~4~Genesis 24:29;Judah~4~Genesis 29:35;Benjamin~4~Genesis 35:18;Reuben~4~Genesis 29:32;Seth~4~Genesis 4:25;Melchizedek~4~Genesis 14:18;Potiphar~4~Genesis 39:1;Ephraim~4~Genesis 41:52;Manasseh~4~Genesis 41:51;Tamar~5~Genesis 38:6;Dinah~5~Genesis 30:21;Shem~5~Genesis 6:10;Ham~5~Genesis 6:10;Japheth~5~Genesis 6:10;Lamech~5~Genesis 4:19;Nimrod~5~Genesis 10:8;Abimelech~5~Genesis 20:2;Terah~5~Genesis 11:26;Simeon~5~Genesis 29:33;Levi~5~Genesis 29:34;Dan~5~Genesis 30:6;Eliezer~5~Genesis 15:2;Keturah~6~Genesis 25:1;Zilpah~6~Genesis 29:24;Bilhah~6~Genesis 29:29;Asenath~6~Genesis 41:45;Enosh~6~Genesis 4:26;Jared~6~Genesis 5:18;Kenan~6~Genesis 5:9;Mahalalel~6~Genesis 5:12;Nahor~6~Genesis 11:26;Bethuel~6~Genesis 22:22;Er~6~Genesis 38:3;Onan~6~Genesis 38:4;Perez~6~Genesis 38:29;Tubal-cain|Tubal cain~6~Genesis 4:22;Jubal~6~Genesis 4:21;Issachar~6~Genesis 30:18;Zebulun~6~Genesis 30:20;Naphtali~6~Genesis 30:8;Gad~6~Genesis 30:11;Asher~6~Genesis 30:13
B^Genesis^Name a place in Genesis^Bethel means “house of God” — Jacob named it after his dream of a stairway to heaven (Genesis 28:19).^Garden of Eden|Eden~1~Genesis 2:8;Egypt~1~Genesis 12:10;Babel|Tower of Babel~1~Genesis 11:9;Sodom~2~Genesis 19:24;Gomorrah~2~Genesis 19:24;Canaan~2~Genesis 12:5;Ur|Ur of the Chaldeans~3~Genesis 11:31;Haran~3~Genesis 11:31;Bethel~3~Genesis 28:19;Mount Ararat|Ararat~3~Genesis 8:4;Hebron~4~Genesis 13:18;Beersheba~4~Genesis 21:31;Mount Moriah|Moriah~4~Genesis 22:2;Goshen~4~Genesis 47:6;Shechem~4~Genesis 12:6;Bethlehem|Ephrath~5~Genesis 35:19;Nod|Land of Nod~5~Genesis 4:16;Peniel|Penuel~5~Genesis 32:30;Zoar~5~Genesis 19:22;Mamre~5~Genesis 13:18;Machpelah|Cave of Machpelah~5~Genesis 23:9;Dothan~5~Genesis 37:17;Salem~5~Genesis 14:18;Paddan Aram~6~Genesis 28:2;Gerar~6~Genesis 20:1;Luz~6~Genesis 28:19;Mizpah~6~Genesis 31:49;Nineveh~6~Genesis 10:11;Admah~6~Genesis 14:2;Zeboiim~6~Genesis 14:2;Gilead~6~Genesis 31:21
B^Genesis^Name something God made in the six days of creation^Light appears on day one, but the sun, moon and stars aren't made until day four (Genesis 1:14–19).^Light~1~Genesis 1:3;Man|Humans|Mankind|Adam~1~Genesis 1:27;Animals~1~Genesis 1:24;Sun~1~Genesis 1:16;Moon~1~Genesis 1:16;Stars~1~Genesis 1:16;Plants|Vegetation|Trees~2~Genesis 1:11;Fish~2~Genesis 1:21;Birds~2~Genesis 1:21;Woman|Eve~2~Genesis 2:22;Sky|Heavens|Firmament|Expanse~2~Genesis 1:8;Land|Earth|Dry land~2~Genesis 1:9;Sea|Seas|Oceans|Waters~2~Genesis 1:10;Day~3~Genesis 1:5;Night~3~Genesis 1:5;Livestock|Cattle~3~Genesis 1:25;Great sea creatures|Sea creatures|Sea monsters|Whales~4~Genesis 1:21;Creeping things|Creatures that move along the ground|Insects~4~Genesis 1:25;Grass|Seed-bearing plants~4~Genesis 1:11;Fruit trees~4~Genesis 1:11;Seasons~5~Genesis 1:14
B^Genesis^Name one of Jacob's twelve sons^Jacob's twelve sons came from four mothers: Leah, Rachel, Zilpah and Bilhah.^Joseph~1~Genesis 30:24;Benjamin~1~Genesis 35:18;Judah~2~Genesis 29:35;Reuben~2~Genesis 29:32;Levi~2~Genesis 29:34;Simeon~3~Genesis 29:33;Dan~3~Genesis 30:6;Gad~4~Genesis 30:11;Asher~4~Genesis 30:13;Naphtali~4~Genesis 30:8;Issachar~5~Genesis 30:18;Zebulun~5~Genesis 30:20
B^Genesis^Name an animal mentioned in Genesis^Noah sent out a raven first, then a dove three times; the second dove came back with an olive leaf (Genesis 8:6–11).^Serpent|Snake~1~Genesis 3:1;Dove~1~Genesis 8:8;Raven~2~Genesis 8:7;Ram~2~Genesis 22:13;Lamb~2~Genesis 22:7;Sheep~2~Genesis 4:2;Camel~3~Genesis 24:10;Goat~3~Genesis 15:9;Donkey~3~Genesis 22:3;Cattle|Cow|Cows~3~Genesis 1:24;Birds~3~Genesis 1:20;Fish~4~Genesis 1:26;Lion~4~Genesis 49:9;Heifer~5~Genesis 15:9;Turtledove~5~Genesis 15:9;Pigeon~5~Genesis 15:9;Horse~5~Genesis 49:17;Wolf~5~Genesis 49:27;Ox|Oxen~5~Genesis 12:16;Young goat|Kid~5~Genesis 37:31;Doe|Deer~6~Genesis 49:21
B^Genesis^Name an event in Genesis^Esau sold his birthright to Jacob for a bowl of red lentil stew (Genesis 25:29–34).^Creation~1~Genesis 1–2;The Fall|Fall of man|Eating the forbidden fruit~1~Genesis 3;Noah's Ark|The Flood|Great Flood~1~Genesis 6–8;Tower of Babel~1~Genesis 11:1–9;Cain kills Abel|Cain and Abel|First murder~2~Genesis 4:8;Sacrifice of Isaac|Binding of Isaac~2~Genesis 22:1–14;Destruction of Sodom and Gomorrah|Sodom and Gomorrah~2~Genesis 19;Jacob's ladder|Jacob's dream~2~Genesis 28:12;Joseph sold into slavery~2~Genesis 37:28;Joseph's coat of many colours|Coat of many colors~2~Genesis 37:3;Jacob wrestles with God|Jacob wrestles the angel~3~Genesis 32:24–30;Esau sells his birthright|Birthright~3~Genesis 25:29–34;Rainbow covenant|Rainbow~3~Genesis 9:13;Lot's wife turns to salt|Pillar of salt~3~Genesis 19:26;Pharaoh's dreams~3~Genesis 41;Jacob steals the blessing|Stolen blessing~3~Genesis 27;Joseph reunites with his brothers~3~Genesis 45;Call of Abram|Abraham leaves Ur~4~Genesis 12:1–3;Seven years of famine|Famine in Egypt~4~Genesis 41:54;Isaac marries Rebekah~4~Genesis 24;Birth of Isaac~4~Genesis 21:1–3;Abraham meets Melchizedek~5~Genesis 14:18–20;Hagar in the wilderness~5~Genesis 16:7–13;Enoch taken by God~5~Genesis 5:24;Jacob blesses his sons~5~Genesis 49;Circumcision covenant~5~Genesis 17:10
B^Exodus^Name one of the ten plagues of Egypt^Pharaoh's magicians copied the first plagues but failed at the gnats and said, “This is the finger of God” (Exodus 8:19).^Frogs~1~Exodus 8:2–6;Locusts~1~Exodus 10:12–15;Water turned to blood|Blood|River of blood~1~Exodus 7:20;Death of the firstborn|Firstborn~1~Exodus 12:29;Darkness~2~Exodus 10:21–23;Boils~2~Exodus 9:8–10;Hail~2~Exodus 9:23;Flies~3~Exodus 8:21–24;Gnats|Lice~3~Exodus 8:16–18;Death of livestock|Livestock|Plague on livestock~4~Exodus 9:3–6
B^Exodus^Name one of the Ten Commandments^Paul calls “Honour your father and mother” the first commandment with a promise (Ephesians 6:2).^Do not murder|Thou shalt not kill|No murder~1~Exodus 20:13;Do not steal|Thou shalt not steal~1~Exodus 20:15;Do not commit adultery|No adultery~1~Exodus 20:14;Honour your father and mother|Honor your father and mother|Honour your parents~1~Exodus 20:12;Do not bear false witness|Do not lie|False witness~2~Exodus 20:16;Keep the Sabbath holy|Remember the Sabbath|Sabbath~2~Exodus 20:8;You shall have no other gods|No other gods~2~Exodus 20:3;Do not covet|Coveting~3~Exodus 20:17;No idols|No graven images|Do not make idols~3~Exodus 20:4;Do not take the Lord's name in vain|Name in vain|Do not misuse God's name~3~Exodus 20:7
B^Exodus^Name a person in Exodus^Two Hebrew midwives, Shiphrah and Puah, defied Pharaoh's order to kill baby boys (Exodus 1:15–17).^Moses~1~Exodus 2:10;Pharaoh~1~Exodus 5:2;Aaron~1~Exodus 4:14;Miriam~2~Exodus 15:20;Joshua~3~Exodus 17:9;Jethro|Reuel~3~Exodus 3:1;Zipporah~3~Exodus 2:21;Pharaoh's daughter~4~Exodus 2:5;Jochebed~4~Exodus 6:20;Hur~4~Exodus 17:10;Amram~5~Exodus 6:20;Gershom~5~Exodus 2:22;Bezalel~5~Exodus 31:2;Shiphrah~5~Exodus 1:15;Puah~5~Exodus 1:15;Nadab~5~Exodus 24:1;Abihu~5~Exodus 24:1;Eleazar~5~Exodus 6:23;Eliezer~6~Exodus 18:4;Oholiab~6~Exodus 31:6;Ithamar~6~Exodus 6:23;Korah~6~Exodus 6:21
B^Exodus^Name something God provided for Israel in the wilderness^The manna stopped the day after Israel first ate the produce of Canaan (Joshua 5:12) — 40 years of daily bread.^Manna~1~Exodus 16:15;Quail~2~Exodus 16:13;Water from the rock|Water~2~Exodus 17:6;Pillar of cloud|Cloud~2~Exodus 13:21;Pillar of fire|Fire~2~Exodus 13:21;The Law|Ten Commandments|Tablets~2~Exodus 20:1–17;Tabernacle~4~Exodus 25:8–9;Sweet water at Marah|Marah~4~Exodus 15:25;Victory over Amalek~5~Exodus 17:13;Sabbath rest|Sabbath~5~Exodus 16:29–30
B^Exodus^Name an item in or part of the tabernacle^The mercy seat on the ark had two golden cherubim facing each other (Exodus 25:17–20).^Ark of the Covenant|Ark~1~Exodus 25:10;Holy of Holies|Most Holy Place~2~Exodus 26:33;Lampstand|Menorah|Golden lampstand~2~Exodus 25:31;Bronze altar|Altar|Altar of burnt offering~2~Exodus 27:1–2;Mercy seat|Atonement cover~2~Exodus 25:17;Table of showbread|Showbread|Bread of the Presence~3~Exodus 25:23–30;Altar of incense|Incense altar~3~Exodus 30:1;Veil|Curtain~3~Exodus 26:31;Holy Place~3~Exodus 26:33;Bronze laver|Laver|Basin~4~Exodus 30:18;Cherubim~4~Exodus 25:18;Courtyard~4~Exodus 27:9;Tent of meeting~4~Exodus 27:21;Ephod~5~Exodus 28:6;Breastpiece|Breastplate~5~Exodus 28:15;Urim and Thummim~5~Exodus 28:30
B^Exodus^Name a place in Exodus^At Marah the water was bitter until Moses threw in a piece of wood (Exodus 15:23–25).^Egypt~1~Exodus 1:1;Red Sea~1~Exodus 15:4;Mount Sinai|Sinai|Horeb~1~Exodus 19:20;Goshen~3~Exodus 8:22;Midian~3~Exodus 2:15;Canaan~3~Exodus 6:4;Marah~4~Exodus 15:23;Elim~5~Exodus 15:27;Rephidim~5~Exodus 17:1;Wilderness of Sin~5~Exodus 16:1;Massah|Meribah~5~Exodus 17:7;Pithom~5~Exodus 1:11;Rameses|Raamses~5~Exodus 1:11;Succoth~5~Exodus 12:37;Pi-hahiroth~6~Exodus 14:2;Migdol~6~Exodus 14:2
B^Leviticus^Name one of the offerings in Leviticus^Leviticus 1–7 sets out five main offerings: burnt, grain, peace, sin and guilt.^Burnt offering~1~Leviticus 1:3;Sin offering~1~Leviticus 4:3;Peace offering|Fellowship offering~2~Leviticus 3:1;Grain offering|Meal offering~2~Leviticus 2:1;Guilt offering|Trespass offering~3~Leviticus 5:15;Wave offering~4~Leviticus 7:30;Thank offering|Thanksgiving offering~4~Leviticus 7:12;Freewill offering~4~Leviticus 7:16;Drink offering~5~Leviticus 23:13;Heave offering~5~Leviticus 7:14
B^Leviticus^Name a feast or holy day in Leviticus 23^Leviticus 23 lists Israel's appointed feasts, from Passover in spring to Tabernacles in autumn.^Passover~1~Leviticus 23:5;Day of Atonement|Yom Kippur~1~Leviticus 23:27;Feast of Tabernacles|Booths|Sukkot~2~Leviticus 23:34;Feast of Weeks|Pentecost|Shavuot~2~Leviticus 23:15–16;Unleavened Bread~2~Leviticus 23:6;Feast of Trumpets|Rosh Hashanah~3~Leviticus 23:24;Firstfruits~3~Leviticus 23:10;Sabbath~3~Leviticus 23:3;Jubilee~4~Leviticus 25:10
B^Leviticus^Name an animal Leviticus calls unclean to eat^Leviticus 11 allows animals that both chew the cud and have split hooves — which rules out the camel and the pig.^Pig|Pork|Swine~1~Leviticus 11:7;Camel~2~Leviticus 11:4;Rabbit|Hare~3~Leviticus 11:6;Eagle~3~Leviticus 11:13;Vulture~3~Leviticus 11:13;Owl~4~Leviticus 11:16–17;Raven~4~Leviticus 11:15;Bat~4~Leviticus 11:19;Shellfish|Fish without fins and scales~4~Leviticus 11:10;Hyrax|Rock badger|Coney~5~Leviticus 11:5;Ostrich~5~Leviticus 11:16;Stork~5~Leviticus 11:19;Heron~5~Leviticus 11:19;Lizard~5~Leviticus 11:29;Mouse~5~Leviticus 11:29;Hawk~5~Leviticus 11:16;Weasel~6~Leviticus 11:29;Chameleon~6~Leviticus 11:30;Hoopoe~6~Leviticus 11:19;Gecko~6~Leviticus 11:30;Cormorant~6~Leviticus 11:17;Pelican~6~Leviticus 11:18
B^Leviticus^Name a person in Leviticus^Aaron's sons Nadab and Abihu offered “unauthorised fire” before the Lord and died (Leviticus 10:1–2).^Moses~1~Leviticus 1:1;Aaron~1~Leviticus 8:2;Nadab~3~Leviticus 10:1;Abihu~3~Leviticus 10:1;Eleazar~4~Leviticus 10:6;Ithamar~4~Leviticus 10:6;Mishael~5~Leviticus 10:4;Elzaphan~6~Leviticus 10:4;Shelomith~6~Leviticus 24:11
B^Numbers^Name an event in Numbers^The priestly blessing — “The Lord bless you and keep you” — comes from Numbers 6:24–26.^The census|Numbering of Israel~1~Numbers 1:2;Twelve spies|Spies sent into Canaan~1~Numbers 13:1–2;Bronze serpent|Brazen serpent~1~Numbers 21:9;Balaam's talking donkey|Balaam's donkey~1~Numbers 22:28;Moses strikes the rock|Water from the rock~2~Numbers 20:11;Korah's rebellion|Earth swallows Korah~2~Numbers 16:1–33;Aaron's staff buds|Aaron's rod~2~Numbers 17:8;Forty years of wandering|Wandering in the wilderness~2~Numbers 14:33–34;Miriam struck with leprosy~3~Numbers 12:10;Quail sent|Quail~3~Numbers 11:31;Priestly blessing~3~Numbers 6:24–26;Death of Aaron~4~Numbers 20:28;Daughters of Zelophehad inherit~4~Numbers 27:1–7;Nazirite vow~4~Numbers 6:2;Cities of refuge~4~Numbers 35:6;Joshua appointed~4~Numbers 27:18–23;Phinehas stops the plague~5~Numbers 25:7–8
B^Numbers^Name one of the twelve spies sent into Canaan^Moses renamed Hoshea son of Nun “Joshua” before sending him with the spies (Numbers 13:16).^Joshua|Hoshea|Oshea~1~Numbers 13:8;Caleb~1~Numbers 13:6;Shammua~5~Numbers 13:4;Shaphat~5~Numbers 13:5;Igal~5~Numbers 13:7;Palti~5~Numbers 13:9;Gaddiel~6~Numbers 13:10;Gaddi~6~Numbers 13:11;Ammiel~6~Numbers 13:12;Sethur~6~Numbers 13:13;Nahbi~6~Numbers 13:14;Geuel~6~Numbers 13:15
B^Numbers^Name a person in Numbers^Balaam was hired to curse Israel but could only bless them — after his donkey spoke to him (Numbers 22–24).^Moses~1~Numbers 1:1;Aaron~1~Numbers 1:3;Balaam~1~Numbers 22:5;Joshua~2~Numbers 11:28;Caleb~2~Numbers 13:30;Miriam~2~Numbers 12:1;Korah~3~Numbers 16:1;Balak~3~Numbers 22:2;Eleazar~3~Numbers 3:32;Phinehas~4~Numbers 25:7;Dathan~4~Numbers 16:1;Abiram~4~Numbers 16:1;Zelophehad~4~Numbers 27:1;Mahlah~5~Numbers 27:1;Og~5~Numbers 21:33;Sihon~5~Numbers 21:21;Hobab~6~Numbers 10:29;Zimri~6~Numbers 25:14;Cozbi~6~Numbers 25:15;Eldad~6~Numbers 11:26;Medad~6~Numbers 11:26;On~6~Numbers 16:1
B^Numbers^Name a food the Israelites missed from Egypt^“We remember the fish we ate in Egypt for nothing, the cucumbers, the melons, the leeks, the onions and the garlic” (Numbers 11:5).^Meat~1~Numbers 11:4;Fish~2~Numbers 11:5;Cucumbers~3~Numbers 11:5;Melons~3~Numbers 11:5;Onions~3~Numbers 11:5;Garlic~3~Numbers 11:5;Leeks~4~Numbers 11:5
B^Deuteronomy^Name a person in Deuteronomy^No one knows where Moses is buried: God buried him in a valley in Moab (Deuteronomy 34:6).^Moses~1~Deuteronomy 1:1;Joshua~1~Deuteronomy 31:7;Aaron~3~Deuteronomy 32:50;Caleb~3~Deuteronomy 1:36;Abraham~4~Deuteronomy 1:8;Og~4~Deuteronomy 3:1;Sihon~4~Deuteronomy 2:24;Isaac~5~Deuteronomy 1:8;Jacob~5~Deuteronomy 1:8;Balaam~5~Deuteronomy 23:4;Miriam~5~Deuteronomy 24:9;Dathan~6~Deuteronomy 11:6;Abiram~6~Deuteronomy 11:6;Eleazar~6~Deuteronomy 10:6
B^Deuteronomy^Name a famous teaching or phrase from Deuteronomy^Jesus answered each of the devil's three temptations with a line from Deuteronomy (Matthew 4; Deuteronomy 8:3, 6:16, 6:13).^Shema|Hear O Israel~1~Deuteronomy 6:4;Love the Lord your God with all your heart~1~Deuteronomy 6:5;Man shall not live by bread alone|Bread alone~2~Deuteronomy 8:3;Be strong and courageous~2~Deuteronomy 31:6;He will never leave you nor forsake you|Never leave you~2~Deuteronomy 31:8;Ten Commandments~3~Deuteronomy 5:6–21;Choose life~3~Deuteronomy 30:19;Blessings and curses~3~Deuteronomy 28;Underneath are the everlasting arms|Everlasting arms~4~Deuteronomy 33:27;Cities of refuge~4~Deuteronomy 19:2;Do not put the Lord your God to the test|Do not test the Lord~4~Deuteronomy 6:16;The secret things belong to the Lord~5~Deuteronomy 29:29;A prophet like Moses~5~Deuteronomy 18:15;Do not muzzle the ox|Muzzle an ox~5~Deuteronomy 25:4
B^Deuteronomy^Name a place in Deuteronomy^Moses viewed the Promised Land from Mount Nebo, at the top of Pisgah, before he died (Deuteronomy 34:1).^Canaan|Promised Land~1~Deuteronomy 32:49;Mount Nebo|Nebo~1~Deuteronomy 34:1;Moab~2~Deuteronomy 1:5;Jordan|Jordan River~2~Deuteronomy 3:27;Horeb|Sinai~2~Deuteronomy 1:6;Egypt~2~Deuteronomy 6:21;Pisgah~3~Deuteronomy 34:1;Jericho~3~Deuteronomy 34:1;Mount Gerizim|Gerizim~4~Deuteronomy 11:29;Mount Ebal|Ebal~4~Deuteronomy 11:29;Kadesh Barnea|Kadesh~4~Deuteronomy 1:19;Bashan~5~Deuteronomy 3:1;Edom|Seir~5~Deuteronomy 23:7;Beth Peor~6~Deuteronomy 34:6
B^Joshua^Name a person in the book of Joshua^Achan hid stolen silver, gold and a Babylonian robe under his tent after Jericho (Joshua 7:21).^Joshua~1~Joshua 1:1;Rahab~1~Joshua 2:1;Caleb~2~Joshua 14:6;Achan~3~Joshua 7:1;Moses~3~Joshua 1:1;Nun~4~Joshua 1:1;Eleazar~4~Joshua 14:1;Phinehas~5~Joshua 22:13;Othniel~5~Joshua 15:17;Adoni-Zedek~6~Joshua 10:1;Jabin~6~Joshua 11:1;Acsah|Achsah~6~Joshua 15:16
B^Joshua^Name a city or place in Joshua^Joshua asked the sun to stand still over Gibeon and the moon over the Valley of Aijalon (Joshua 10:12).^Jericho~1~Joshua 6:1;Jordan River|Jordan~1~Joshua 3:17;Canaan~2~Joshua 5:12;Ai~2~Joshua 8:1;Gibeon~3~Joshua 9:3;Gilgal~3~Joshua 4:19;Shechem~4~Joshua 24:1;Hebron~4~Joshua 14:13;Shiloh~4~Joshua 18:1;Hazor~5~Joshua 11:10;Valley of Aijalon|Aijalon~5~Joshua 10:12;Mount Ebal~5~Joshua 8:30;Bethel~5~Joshua 8:9;Makkedah~6~Joshua 10:16;Lachish~6~Joshua 10:31;Debir~6~Joshua 10:38;Valley of Achor|Achor~6~Joshua 7:26
B^Joshua^Name an event in Joshua^Rahab hung a scarlet cord from her window so her household would be spared (Joshua 2:18).^Fall of Jericho|Walls of Jericho~1~Joshua 6:20;Crossing the Jordan~1~Joshua 3:17;Rahab hides the spies~1~Joshua 2:4;As for me and my house we will serve the Lord~2~Joshua 24:15;Sun stands still~2~Joshua 10:13;Achan's sin~3~Joshua 7:1;Defeat at Ai~3~Joshua 7:4–5;Twelve memorial stones|Memorial stones~3~Joshua 4:20;Scarlet cord~3~Joshua 2:18;Gibeonites trick Joshua|Gibeonite deception~4~Joshua 9:3–15;Commander of the Lord's army~4~Joshua 5:14;Land divided among the tribes~4~Joshua 13–19;Circumcision at Gilgal~5~Joshua 5:2–9;Manna stops~5~Joshua 5:12;Cities of refuge~5~Joshua 20:2
B^Judges^Name a judge of Israel in the book of Judges^Ehud was left-handed and hid a double-edged sword on his right thigh (Judges 3:15–16).^Samson~1~Judges 13:24;Gideon|Jerubbaal~1~Judges 6:11;Deborah~1~Judges 4:4;Ehud~3~Judges 3:15;Jephthah~3~Judges 11:1;Othniel~4~Judges 3:9;Barak~4~Judges 4:6;Shamgar~4~Judges 3:31;Abimelech~5~Judges 9:1;Tola~6~Judges 10:1;Jair~6~Judges 10:3;Ibzan~6~Judges 12:8;Elon~6~Judges 12:11;Abdon~6~Judges 12:13
B^Judges^Name an enemy, villain or foreign ruler in Judges^Jael killed the Canaanite commander Sisera with a tent peg (Judges 4:21).^Delilah~1~Judges 16:4;Philistines~1~Judges 13:1;Sisera~1~Judges 4:2;Midianites~2~Judges 6:1;Eglon~2~Judges 3:12;Moabites~3~Judges 3:12;Jabin~3~Judges 4:2;Abimelech~4~Judges 9:5;Ammonites~4~Judges 10:7;Oreb~5~Judges 7:25;Zeeb~5~Judges 7:25;Zebah~5~Judges 8:5;Zalmunna~5~Judges 8:5;Amalekites~5~Judges 6:3;Cushan-Rishathaim~6~Judges 3:8
B^Judges^Name something from Samson's story^Samson killed a thousand Philistines with the fresh jawbone of a donkey (Judges 15:15).^Long hair|Hair~1~Judges 16:17;Delilah~1~Judges 16:4;Lion~1~Judges 14:5–6;Jawbone of a donkey|Donkey's jawbone|Jawbone~2~Judges 15:15;Philistines~2~Judges 14:4;Pillars|Temple of Dagon~2~Judges 16:29–30;Riddle~3~Judges 14:14;Honey|Bees~3~Judges 14:8–9;Foxes|300 foxes~3~Judges 15:4;Nazirite vow|Nazirite~3~Judges 13:5;Blinded~3~Judges 16:21;Dagon~4~Judges 16:23;Gates of Gaza~4~Judges 16:3;Manoah~5~Judges 13:2;Timnah~5~Judges 14:1;Grinding mill~5~Judges 16:21
B^Ruth^Name a person in the book of Ruth^Naomi asked to be called Mara, meaning “bitter” (Ruth 1:20).^Ruth~1~Ruth 1:4;Naomi~1~Ruth 1:2;Boaz~1~Ruth 2:1;Orpah~2~Ruth 1:4;Elimelech~3~Ruth 1:2;Obed~3~Ruth 4:17;David~3~Ruth 4:17;Mahlon~4~Ruth 1:2;Kilion|Chilion~4~Ruth 1:2;Jesse~4~Ruth 4:17;Perez~6~Ruth 4:12
B^Ruth^Name a place in Ruth^Bethlehem means “house of bread” — fitting for a story set during the barley harvest.^Bethlehem~1~Ruth 1:1;Moab~1~Ruth 1:1;Judah~3~Ruth 1:7;Threshing floor~3~Ruth 3:3;Boaz's field|Field~4~Ruth 2:3;City gate|Gate~5~Ruth 4:1;Ephrathah|Ephrath~5~Ruth 4:11
B^Ruth^Name an object or custom in Ruth's story^A man took off his sandal and handed it over to seal a transfer of property (Ruth 4:7).^Gleaning~1~Ruth 2:2;Kinsman-redeemer|Redeemer|Guardian-redeemer~1~Ruth 2:20;Barley~2~Ruth 1:22;Threshing floor~2~Ruth 3:6;Harvest~2~Ruth 1:22;Sandal~3~Ruth 4:7;Wheat~4~Ruth 2:23;Cloak|Corner of your garment|Wings~4~Ruth 3:9;Six measures of barley~5~Ruth 3:15;Roasted grain~5~Ruth 2:14;Wine vinegar|Vinegar~6~Ruth 2:14
B^1 Samuel^Name a person in 1 Samuel^Hannah prayed so intensely for a son that Eli thought she was drunk (1 Samuel 1:13).^Samuel~1~1 Samuel 1:20;Saul~1~1 Samuel 9:2;David~1~1 Samuel 16:13;Goliath~1~1 Samuel 17:4;Jonathan~1~1 Samuel 14:1;Hannah~2~1 Samuel 1:2;Eli~2~1 Samuel 1:9;Jesse~2~1 Samuel 16:1;Elkanah~3~1 Samuel 1:1;Michal~3~1 Samuel 18:20;Abigail~3~1 Samuel 25:3;Nabal~3~1 Samuel 25:3;Witch of Endor|Medium of Endor~3~1 Samuel 28:7;Peninnah~4~1 Samuel 1:2;Hophni~4~1 Samuel 1:3;Phinehas~4~1 Samuel 1:3;Abner~4~1 Samuel 14:50;Agag~4~1 Samuel 15:8;Doeg~5~1 Samuel 21:7;Ahimelech~5~1 Samuel 21:1;Achish~5~1 Samuel 21:10;Kish~5~1 Samuel 9:1;Eliab~5~1 Samuel 16:6;Merab~5~1 Samuel 18:17;Joab~5~1 Samuel 26:6;Abishai~5~1 Samuel 26:6;Ichabod~5~1 Samuel 4:21;Abiathar~5~1 Samuel 22:20;Abinadab~6~1 Samuel 16:8;Shammah~6~1 Samuel 16:9;Ahinoam~6~1 Samuel 25:43
B^1 Samuel^Name an event in 1 Samuel^“To obey is better than sacrifice” — Samuel's rebuke to Saul (1 Samuel 15:22).^David and Goliath~1~1 Samuel 17;God calls Samuel at night|Samuel hears God~1~1 Samuel 3:4–10;Samuel anoints David|David anointed~1~1 Samuel 16:13;Hannah's prayer~2~1 Samuel 2:1–10;Saul anointed king~2~1 Samuel 10:1;Israel asks for a king~2~1 Samuel 8:5;David spares Saul in the cave~2~1 Samuel 24:3–7;David plays the harp for Saul~2~1 Samuel 16:23;Ark captured by the Philistines~3~1 Samuel 4:11;Saul visits the witch of Endor~3~1 Samuel 28:7–19;Saul throws a spear at David~3~1 Samuel 18:10–11;Death of Saul~3~1 Samuel 31:4;Dagon falls before the ark~4~1 Samuel 5:3–4;Jonathan's arrows~4~1 Samuel 20:35–42;Saul spares Agag~4~1 Samuel 15:9;David and Abigail~4~1 Samuel 25
B^1 Samuel^Name an item from the David and Goliath story^Goliath's height is given as six cubits and a span — over nine feet (1 Samuel 17:4).^Sling~1~1 Samuel 17:40;Five smooth stones|Stones~1~1 Samuel 17:40;Sword~2~1 Samuel 17:51;Armour|Armor|Saul's armour~2~1 Samuel 17:38;Spear~3~1 Samuel 17:7;Shield~4~1 Samuel 17:7;Javelin~4~1 Samuel 17:6;Bronze helmet|Helmet~4~1 Samuel 17:5;Brook|Stream~4~1 Samuel 17:40;Staff|Shepherd's staff~4~1 Samuel 17:40;Shepherd's bag|Pouch~4~1 Samuel 17:40;Valley of Elah~4~1 Samuel 17:2;Bread and cheese|Cheese~5~1 Samuel 17:17–18
B^2 Samuel^Name a person in 2 Samuel^David showed kindness to Jonathan's lame son Mephibosheth, who ate at the king's table for life (2 Samuel 9).^David~1~2 Samuel 2:4;Bathsheba~1~2 Samuel 11:3;Uriah~1~2 Samuel 11:3;Nathan~1~2 Samuel 7:2;Absalom~2~2 Samuel 13:1;Joab~2~2 Samuel 2:13;Mephibosheth~2~2 Samuel 4:4;Amnon~3~2 Samuel 13:1;Tamar~3~2 Samuel 13:1;Solomon~3~2 Samuel 12:24;Abner~3~2 Samuel 2:8;Michal~3~2 Samuel 6:16;Ish-bosheth|Ishbosheth~4~2 Samuel 2:8;Uzzah~4~2 Samuel 6:6;Ahithophel~4~2 Samuel 15:12;Hushai~4~2 Samuel 15:32;Shimei~4~2 Samuel 16:5;Abishai~4~2 Samuel 2:18;Hiram~5~2 Samuel 5:11;Asahel~5~2 Samuel 2:18;Ziba~5~2 Samuel 9:2;Benaiah~5~2 Samuel 8:18;Rizpah~5~2 Samuel 21:10;Barzillai~5~2 Samuel 17:27;Sheba~5~2 Samuel 20:1;Amasa~5~2 Samuel 17:25;Araunah~5~2 Samuel 24:16;Gad~5~2 Samuel 24:11
B^2 Samuel^Name an event in 2 Samuel^Absalom's long hair caught in an oak tree, leaving him hanging as Joab approached (2 Samuel 18:9).^David and Bathsheba~1~2 Samuel 11;Nathan confronts David|You are the man~2~2 Samuel 12:1–7;David dances before the ark~2~2 Samuel 6:14;Absalom's rebellion~2~2 Samuel 15;Absalom caught in a tree~2~2 Samuel 18:9;David becomes king of Israel~2~2 Samuel 5:3;Uzzah touches the ark~3~2 Samuel 6:6–7;Capture of Jerusalem~3~2 Samuel 5:6–7;Kindness to Mephibosheth~3~2 Samuel 9:7;Covenant with David|Davidic covenant~3~2 Samuel 7:12–16;Death of Absalom~3~2 Samuel 18:14–15;David's lament for Saul and Jonathan~4~2 Samuel 1:17–27;Census and plague~4~2 Samuel 24;Amnon and Tamar~4~2 Samuel 13
B^2 Samuel^Name one of David's mighty men^Benaiah went down into a pit on a snowy day and killed a lion (2 Samuel 23:20).^Benaiah~2~2 Samuel 23:20;Uriah the Hittite|Uriah~2~2 Samuel 23:39;Abishai~3~2 Samuel 23:18;Eleazar~4~2 Samuel 23:9;Asahel~4~2 Samuel 23:24;Josheb-Basshebeth~5~2 Samuel 23:8;Shammah~5~2 Samuel 23:11;Elhanan~5~2 Samuel 23:24;Ittai son of Ribai~6~2 Samuel 23:29
B^1 Kings^Name a person in 1 Kings^Solomon's wisdom drew the Queen of Sheba, who arrived with spices, gold and hard questions (1 Kings 10).^Solomon~1~1 Kings 1:39;Elijah~1~1 Kings 17:1;Ahab~1~1 Kings 16:29;Jezebel~1~1 Kings 16:31;David~2~1 Kings 1:1;Queen of Sheba~2~1 Kings 10:1;Elisha~2~1 Kings 19:16;Rehoboam~3~1 Kings 12:1;Jeroboam~3~1 Kings 11:26;Bathsheba~3~1 Kings 1:11;Adonijah~3~1 Kings 1:5;Naboth~3~1 Kings 21:1;Widow of Zarephath~3~1 Kings 17:9;Nathan~3~1 Kings 1:11;Hiram~4~1 Kings 5:1;Obadiah~4~1 Kings 18:3;Micaiah~4~1 Kings 22:8;Asa~4~1 Kings 15:9;Jehoshaphat~4~1 Kings 22:41;Omri~4~1 Kings 16:16;Benaiah~4~1 Kings 1:8;Joab~4~1 Kings 2:28;Zadok~4~1 Kings 1:8;Baasha~5~1 Kings 15:33;Zimri~5~1 Kings 16:15;Abijah|Abijam~5~1 Kings 15:1;Shimei~5~1 Kings 2:8;Ben-Hadad~5~1 Kings 15:18;Ahijah~5~1 Kings 11:29;Shishak~5~1 Kings 14:25;Abishag~5~1 Kings 1:3;Nadab~6~1 Kings 15:25;Elah~6~1 Kings 16:8;Tibni~6~1 Kings 16:21
B^1 Kings^Name an event in 1 Kings^On Mount Carmel, fire from heaven consumed Elijah's sacrifice, the wood, the stones and the water in the trench (1 Kings 18:38).^Solomon builds the temple~1~1 Kings 6;Solomon asks for wisdom~1~1 Kings 3:9;Two women and the baby|Solomon's judgement~1~1 Kings 3:16–28;Elijah on Mount Carmel|Fire from heaven~1~1 Kings 18:20–40;Elijah fed by ravens~2~1 Kings 17:6;Queen of Sheba visits~2~1 Kings 10:1–13;The kingdom divides~2~1 Kings 12:16–20;Still small voice|Gentle whisper~2~1 Kings 19:12;Naboth's vineyard~3~1 Kings 21;Widow's flour and oil~3~1 Kings 17:14–16;Elijah calls Elisha~3~1 Kings 19:19–21;Dedication of the temple~3~1 Kings 8;Drought~3~1 Kings 17:1;Widow's son raised~4~1 Kings 17:22;Golden calves at Bethel and Dan~4~1 Kings 12:28–29;Death of Ahab~4~1 Kings 22:34–37
B^1 Kings^Name a king who reigns in 1 Kings^Zimri reigned over Israel for just seven days (1 Kings 16:15).^Solomon~1~1 Kings 1:39;Ahab~1~1 Kings 16:29;David~2~1 Kings 1:1;Rehoboam~2~1 Kings 14:21;Jeroboam~2~1 Kings 12:20;Asa~3~1 Kings 15:9;Jehoshaphat~3~1 Kings 22:41;Omri~3~1 Kings 16:23;Abijah|Abijam~4~1 Kings 15:1;Baasha~4~1 Kings 15:33;Zimri~4~1 Kings 16:15;Hiram~4~1 Kings 5:1;Nadab~5~1 Kings 15:25;Elah~5~1 Kings 16:8;Ahaziah~5~1 Kings 22:51;Ben-Hadad~5~1 Kings 20:1;Shishak~5~1 Kings 11:40;Tibni~6~1 Kings 16:21
B^2 Kings^Name a person in 2 Kings^Josiah became king at eight; in his reign the priest Hilkiah found the Book of the Law in the temple (2 Kings 22).^Elisha~1~2 Kings 2:1;Elijah~1~2 Kings 1:3;Naaman~1~2 Kings 5:1;Jezebel~2~2 Kings 9:30;Hezekiah~2~2 Kings 18:1;Josiah~2~2 Kings 22:1;Jehu~2~2 Kings 9:2;Shunammite woman~3~2 Kings 4:8;Gehazi~3~2 Kings 4:12;Isaiah~3~2 Kings 19:2;Sennacherib~3~2 Kings 18:13;Nebuchadnezzar~3~2 Kings 24:1;Athaliah~3~2 Kings 11:1;Joash|Jehoash~3~2 Kings 11:2;Manasseh~3~2 Kings 21:1;Zedekiah~3~2 Kings 24:17;Huldah~4~2 Kings 22:14;Hilkiah~4~2 Kings 22:8;Jehoiachin~4~2 Kings 24:8;Ahaz~4~2 Kings 16:1;Uzziah|Azariah~4~2 Kings 15:13;Jehoiada~4~2 Kings 11:4;Jehoiakim~4~2 Kings 23:34;Ahaziah~4~2 Kings 1:2;Jehoram|Joram~4~2 Kings 3:1;Jeroboam II~5~2 Kings 14:23;Rabshakeh~5~2 Kings 18:17;Hoshea~5~2 Kings 17:1;Shalmaneser~5~2 Kings 17:3;Tiglath-Pileser~5~2 Kings 15:29;Gedaliah~5~2 Kings 25:22;Jehoahaz~5~2 Kings 23:31;Amaziah~5~2 Kings 14:1;Pekah~5~2 Kings 15:25;Evil-Merodach~6~2 Kings 25:27;Menahem~6~2 Kings 15:14
B^2 Kings^Name an event in 2 Kings^An axe head that fell into the Jordan floated when Elisha threw a stick in after it (2 Kings 6:6).^Elijah taken up in a whirlwind|Chariot of fire~1~2 Kings 2:11;Naaman healed in the Jordan~1~2 Kings 5:14;Fall of Jerusalem|Babylonian exile~1~2 Kings 25:1–10;Elisha receives a double portion~2~2 Kings 2:9–15;Floating axe head~2~2 Kings 6:6;Widow's oil multiplied~2~2 Kings 4:1–7;Shunammite's son raised~2~2 Kings 4:32–35;Fall of Samaria|Assyrian exile~2~2 Kings 17:6;Bears maul the youths~3~2 Kings 2:24;Hezekiah's illness and the shadow on the steps~3~2 Kings 20:1–11;Josiah finds the Book of the Law~3~2 Kings 22:8;Jehu kills Jezebel~3~2 Kings 9:33;Angel strikes 185,000 Assyrians~3~2 Kings 19:35;Chariots of fire around Elisha~3~2 Kings 6:17;Death in the pot~4~2 Kings 4:38–41;Feeding of a hundred men~4~2 Kings 4:42–44;Dead man revived by Elisha's bones~4~2 Kings 13:21;Joash crowned at seven~5~2 Kings 11:21
B^2 Kings^Name a miracle of Elisha^Elisha asked Elijah for a double portion of his spirit (2 Kings 2:9).^Naaman healed|Healing Naaman~1~2 Kings 5:14;Widow's oil~1~2 Kings 4:1–7;Parting the Jordan~1~2 Kings 2:14;Floating axe head|Axe head~2~2 Kings 6:6;Raising the Shunammite's son~2~2 Kings 4:35;Healing the water at Jericho|Salt in the water~3~2 Kings 2:21;Bears~3~2 Kings 2:24;Death in the pot|Poison stew~3~2 Kings 4:41;Feeding a hundred men~3~2 Kings 4:42–44;Blinding the Arameans~3~2 Kings 6:18;Opening his servant's eyes|Chariots of fire~3~2 Kings 6:17;Dead man revived by his bones~4~2 Kings 13:21;Water for the armies~5~2 Kings 3:16–20;Gehazi's leprosy~5~2 Kings 5:27
B^1 Chronicles^Name a person in 1 Chronicles^1 Chronicles opens with nine chapters of genealogy starting from Adam; the prayer of Jabez is tucked into chapter 4.^David~1~1 Chronicles 11:3;Solomon~1~1 Chronicles 22:9;Jabez~1~1 Chronicles 4:9–10;Saul~2~1 Chronicles 10:13;Adam~3~1 Chronicles 1:1;Asaph~3~1 Chronicles 6:39;Joab~3~1 Chronicles 11:6;Nathan~3~1 Chronicles 17:1;Abraham~4~1 Chronicles 1:27;Heman~4~1 Chronicles 6:33;Jeduthun~4~1 Chronicles 16:41;Gad~4~1 Chronicles 21:9;Uzza|Uzzah~4~1 Chronicles 13:9;Michal~4~1 Chronicles 15:29;Zadok~4~1 Chronicles 16:39;Benaiah~4~1 Chronicles 11:22;Ornan|Araunah~4~1 Chronicles 21:15;Satan~5~1 Chronicles 21:1;Hiram~5~1 Chronicles 14:1;Obed-Edom~5~1 Chronicles 13:13;Jashobeam~6~1 Chronicles 11:11;Kenaniah|Chenaniah~6~1 Chronicles 15:22
B^1 Chronicles^Name an instrument or worship role David set up in 1 Chronicles^David appointed Levite musicians — Asaph, Heman and Jeduthun — to lead worship with instruments (1 Chronicles 25).^Harp|Harps~1~1 Chronicles 15:16;Lyre|Lyres~1~1 Chronicles 15:16;Cymbals~1~1 Chronicles 15:16;Trumpets~1~1 Chronicles 15:24;Singers~2~1 Chronicles 15:16;Levites~2~1 Chronicles 23:3;Priests~2~1 Chronicles 24:1;Musicians~2~1 Chronicles 25:1;Gatekeepers|Doorkeepers~3~1 Chronicles 26:1;Choir~3~1 Chronicles 15:27;Treasurers~5~1 Chronicles 26:20;Psalteries~5~1 Chronicles 15:16
B^2 Chronicles^Name a person in 2 Chronicles^2 Chronicles ends with Cyrus of Persia decreeing that the temple be rebuilt (2 Chronicles 36:23).^Solomon~1~2 Chronicles 1:1;Hezekiah~2~2 Chronicles 29:1;Josiah~2~2 Chronicles 34:1;Queen of Sheba~2~2 Chronicles 9:1;Jehoshaphat~2~2 Chronicles 17:1;Rehoboam~3~2 Chronicles 10:1;Asa~3~2 Chronicles 14:1;Uzziah~3~2 Chronicles 26:1;Manasseh~3~2 Chronicles 33:1;Cyrus~3~2 Chronicles 36:22;Joash~3~2 Chronicles 24:1;Nebuchadnezzar~3~2 Chronicles 36:6;Athaliah~4~2 Chronicles 22:10;Huram|Hiram~4~2 Chronicles 2:3;Jehoiada~4~2 Chronicles 23:1;Ahaz~4~2 Chronicles 28:1;Jeroboam~4~2 Chronicles 10:2;Abijah~4~2 Chronicles 13:1;Sennacherib~4~2 Chronicles 32:1;Zedekiah~4~2 Chronicles 36:11;Zechariah~5~2 Chronicles 24:20;Amaziah~5~2 Chronicles 25:1;Jotham~5~2 Chronicles 27:1;Huldah~5~2 Chronicles 34:22;Neco|Necho~5~2 Chronicles 35:20;Azariah~5~2 Chronicles 26:17;Micaiah~5~2 Chronicles 18:7;Hanani~6~2 Chronicles 16:7;Jahaziel~6~2 Chronicles 20:14
B^2 Chronicles^Name an event in 2 Chronicles^Jehoshaphat put singers at the front of the army; as they praised, the enemy armies turned on each other (2 Chronicles 20:21–23).^If my people humble themselves and pray|Heal their land~1~2 Chronicles 7:14;Solomon dedicates the temple|Glory fills the temple~1~2 Chronicles 6;Jehoshaphat's singers lead the army~2~2 Chronicles 20:21–22;Fire falls on Solomon's sacrifice~3~2 Chronicles 7:1;Uzziah struck with leprosy~3~2 Chronicles 26:19;Manasseh repents in Babylon~3~2 Chronicles 33:12–13;Cyrus's decree~3~2 Chronicles 36:23;Temple burned by Babylon~3~2 Chronicles 36:19;Queen of Sheba visits~3~2 Chronicles 9:1–12;Hezekiah's Passover~4~2 Chronicles 30;Josiah's reforms~4~2 Chronicles 34:3–7;Rehoboam's harsh answer~4~2 Chronicles 10:13–14;Joash repairs the temple~5~2 Chronicles 24:4–13
B^Ezra^Name a person in Ezra^Ezra was “a teacher well versed in the Law of Moses” who set his heart to study it, do it and teach it (Ezra 7:6, 10).^Ezra~1~Ezra 7:6;Cyrus~1~Ezra 1:1;Zerubbabel~2~Ezra 2:2;Artaxerxes~3~Ezra 4:7;Darius~3~Ezra 4:5;Haggai~3~Ezra 5:1;Zechariah~3~Ezra 5:1;Jeshua|Joshua the high priest~3~Ezra 3:2;Sheshbazzar~4~Ezra 1:8;Xerxes|Ahasuerus~5~Ezra 4:6;Tattenai~5~Ezra 5:3;Rehum~6~Ezra 4:8;Shimshai~6~Ezra 4:8;Shecaniah~6~Ezra 10:2;Mithredath~6~Ezra 1:8
B^Ezra^Name an event in Ezra^When the temple foundation was laid, old men who remembered Solomon's temple wept while others shouted for joy (Ezra 3:12).^Rebuilding the temple~1~Ezra 3:8;Cyrus's decree~1~Ezra 1:2–4;Return from exile~1~Ezra 2:1;Ezra teaches the Law~2~Ezra 7:10;Opposition halts the building~3~Ezra 4:24;Mixed marriages|Intermarriage~3~Ezra 9:1–2;Foundation laid with weeping and shouting~4~Ezra 3:12;Darius finds Cyrus's decree~4~Ezra 6:1–3;Temple articles returned~4~Ezra 1:7;Fasting at the Ahava canal~5~Ezra 8:21;Passover celebrated~5~Ezra 6:19
B^Nehemiah^Name a person in the book of Nehemiah^Sanballat, Tobiah and Geshem mocked the builders and plotted to stop the work (Nehemiah 2:19; 6:1–2).^Nehemiah~1~Nehemiah 1:1;Ezra~2~Nehemiah 8:1;Artaxerxes~2~Nehemiah 2:1;Sanballat~2~Nehemiah 2:10;Tobiah~3~Nehemiah 2:10;Geshem~4~Nehemiah 2:19;Eliashib~4~Nehemiah 3:1;Hanani~4~Nehemiah 1:2;Shemaiah~5~Nehemiah 6:10;Hananiah~5~Nehemiah 7:2;Noadiah~6~Nehemiah 6:14;Asaph~6~Nehemiah 2:8
B^Nehemiah^Name a gate of Jerusalem rebuilt in Nehemiah^The wall of Jerusalem was finished in just 52 days (Nehemiah 6:15).^Sheep Gate~1~Nehemiah 3:1;Fish Gate~2~Nehemiah 3:3;Water Gate~2~Nehemiah 3:26;Dung Gate|Refuse Gate~2~Nehemiah 3:14;Fountain Gate~3~Nehemiah 3:15;Valley Gate~3~Nehemiah 3:13;Horse Gate~3~Nehemiah 3:28;East Gate~3~Nehemiah 3:29;Old Gate|Jeshanah Gate~4~Nehemiah 3:6;Muster Gate|Inspection Gate|Miphkad Gate~5~Nehemiah 3:31;Ephraim Gate~5~Nehemiah 8:16;Prison Gate|Gate of the Guard~5~Nehemiah 12:39
B^Nehemiah^Name an event in Nehemiah^“The joy of the Lord is your strength” was spoken as the people wept over the reading of the Law (Nehemiah 8:10).^Rebuilding the wall~1~Nehemiah 6:15;The joy of the Lord is your strength~2~Nehemiah 8:10;Nehemiah's prayer~2~Nehemiah 1:5–11;Cupbearer asks the king~2~Nehemiah 2:1–5;Opposition from Sanballat~2~Nehemiah 4:1;Night inspection of the walls~3~Nehemiah 2:12–15;Building with a sword and a trowel~3~Nehemiah 4:17–18;Ezra reads the Law~3~Nehemiah 8:3;Festival of Booths~4~Nehemiah 8:14–17;Cancelling debts~4~Nehemiah 5:10–12;Covenant renewed~4~Nehemiah 9:38;Tobiah thrown out of the temple room~5~Nehemiah 13:8;Sabbath reforms~5~Nehemiah 13:15–22
B^Esther^Name a person in the book of Esther^Esther and Song of Songs are the two books of the Bible that never mention God by name.^Esther|Hadassah~1~Esther 2:7;Mordecai~1~Esther 2:5;Haman~1~Esther 3:1;Xerxes|Ahasuerus~2~Esther 1:1;Vashti~2~Esther 1:9;Hegai~4~Esther 2:3;Zeresh~4~Esther 5:10;Hathach~5~Esther 4:5;Bigthana|Bigthan~5~Esther 2:21;Teresh~5~Esther 2:21;Harbona~6~Esther 7:9;Memucan~6~Esther 1:16
B^Esther^Name an event or thing in Esther^Purim is named after the “pur”, the lot Haman cast to choose the day to destroy the Jews (Esther 3:7; 9:26).^Purim~1~Esther 9:26;Esther becomes queen~1~Esther 2:17;Haman's plot~1~Esther 3:6–9;For such a time as this~1~Esther 4:14;Vashti refuses the king~2~Esther 1:12;Three-day fast|Fasting~2~Esther 4:16;Haman hanged on his own gallows|Gallows~2~Esther 7:10;Golden sceptre|Sceptre|Scepter~2~Esther 5:2;King's sleepless night~3~Esther 6:1;Mordecai paraded on the king's horse~3~Esther 6:11;Esther's banquets|Banquet~3~Esther 5:4–8;Casting lots|Pur~3~Esther 3:7;Mordecai uncovers the assassination plot~4~Esther 2:21–23;Edict reversed~4~Esther 8:11
B^Job^Name a person in the book of Job^Job's three new daughters were Jemimah, Keziah and Keren-Happuch, the most beautiful women in the land (Job 42:14–15).^Job~1~Job 1:1;Satan|The accuser~1~Job 1:6;Eliphaz~2~Job 2:11;Bildad~2~Job 2:11;Zophar~2~Job 2:11;Elihu~3~Job 32:2;Job's wife~3~Job 2:9;Jemimah~5~Job 42:14;Keziah~5~Job 42:14;Keren-Happuch~5~Job 42:14
B^Job^Name something Job lost^God restored to Job twice as much as he had before (Job 42:10).^Children|Sons and daughters~1~Job 1:18–19;Health~1~Job 2:7;Wealth|Possessions~1~Job 1:13–19;Oxen~2~Job 1:14–15;Donkeys~2~Job 1:14–15;Camels~2~Job 1:17;Sheep~2~Job 1:16;Servants~2~Job 1:15;House~4~Job 1:19
B^Job^Name a creature God describes to Job^God's speeches from the whirlwind end with two giants: Behemoth and Leviathan (Job 40–41).^Leviathan~1~Job 41:1;Behemoth~1~Job 40:15;Horse|War horse~2~Job 39:19;Ostrich~3~Job 39:13;Eagle~3~Job 39:27;Lion~3~Job 38:39;Hawk~4~Job 39:26;Wild donkey~4~Job 39:5;Wild ox~4~Job 39:9;Mountain goat|Ibex~4~Job 39:1;Deer|Doe~4~Job 39:1;Raven~4~Job 38:41
B^Psalms^Name a famous psalm by number or opening line^Psalm 117 is the shortest chapter in the Bible; Psalm 119, an acrostic of 176 verses, is the longest.^Psalm 23|The Lord is my shepherd~1~Psalm 23;Psalm 91|He who dwells in the shelter~2~Psalm 91;Psalm 51|Create in me a clean heart~2~Psalm 51;Psalm 46|Be still and know~2~Psalm 46;Psalm 1|Blessed is the man~3~Psalm 1;Psalm 121|I lift up my eyes to the hills~3~Psalm 121;Psalm 100|Make a joyful noise~3~Psalm 100;Psalm 139|Fearfully and wonderfully made~3~Psalm 139;Psalm 103|Bless the Lord O my soul~3~Psalm 103;Psalm 119~3~Psalm 119;Psalm 27|The Lord is my light~4~Psalm 27;Psalm 150|Let everything that has breath~4~Psalm 150;Psalm 22|My God why have you forsaken me~4~Psalm 22;Psalm 42|As the deer~4~Psalm 42;Psalm 19|The heavens declare~4~Psalm 19;Psalm 34|Taste and see~4~Psalm 34;Psalm 37|Delight yourself in the Lord~4~Psalm 37;Psalm 118|This is the day the Lord has made~4~Psalm 118;Psalm 117~5~Psalm 117;Psalm 8~5~Psalm 8;Psalm 84|How lovely is your dwelling place~5~Psalm 84;Psalm 133|How good and pleasant~5~Psalm 133;Psalm 137|By the rivers of Babylon~5~Psalm 137
B^Psalms^Name someone credited in the psalm headings^Psalm 90 is credited to Moses, which would make it the oldest psalm.^David~1~Psalm 3;Asaph~2~Psalm 50;Sons of Korah|Korah~2~Psalm 42;Solomon~2~Psalm 72;Moses~3~Psalm 90;Heman~5~Psalm 88;Ethan~5~Psalm 89;Jeduthun~6~Psalm 39
B^Psalms^Name a word found in the Psalms' headings or text^“Selah” appears 71 times in the Psalms; no one is quite sure what it means — perhaps a pause.^Selah~1~Psalm 3:2;Hallelujah|Praise the Lord~1~Psalm 150:1;Lyre|Harp~2~Psalm 33:2;Song of ascents~3~Psalm 120;Amen~3~Psalm 41:13;Maskil~4~Psalm 32;Miktam~5~Psalm 16;Shiggaion~6~Psalm 7;Gittith~6~Psalm 8;Alamoth~6~Psalm 46;Sheminith~6~Psalm 6
B^Psalms^Name something the Psalms compare God to^“The Lord God is a sun and shield” (Psalm 84:11).^Shepherd~1~Psalm 23:1;Rock~1~Psalm 18:2;Fortress~1~Psalm 18:2;Refuge~1~Psalm 46:1;Shield~1~Psalm 3:3;Light~2~Psalm 27:1;King~2~Psalm 24:7;Deliverer~2~Psalm 18:2;Stronghold~2~Psalm 27:1;Hiding place~2~Psalm 32:7;Strong tower|Tower~3~Psalm 61:3;Judge~3~Psalm 7:11;Sun~4~Psalm 84:11;Father~4~Psalm 68:5;Keeper~4~Psalm 121:5;Shade~4~Psalm 121:5;Horn of salvation|Horn~4~Psalm 18:2;Wings|Shelter of his wings~4~Psalm 91:4
B^Psalms^Name a way to praise listed in Psalm 150^Psalm 150, the last psalm, ends: “Let everything that has breath praise the Lord.”^Trumpet~1~Psalm 150:3;Harp~1~Psalm 150:3;Cymbals|Loud cymbals|Clashing cymbals~1~Psalm 150:5;Lyre~2~Psalm 150:3;Tambourine|Timbrel~2~Psalm 150:4;Strings~3~Psalm 150:4;Pipe|Flute~3~Psalm 150:4;Dance|Dancing~3~Psalm 150:4
B^Proverbs^Name an animal mentioned in Proverbs^Proverbs 30 praises four small but wise creatures: ants, hyraxes, locusts and lizards.^Ant~1~Proverbs 6:6;Lion~2~Proverbs 28:1;Dog~2~Proverbs 26:11;Eagle~3~Proverbs 23:5;Bear~4~Proverbs 17:12;Horse~4~Proverbs 21:31;Hyrax|Rock badger|Coney~4~Proverbs 30:26;Locust~4~Proverbs 30:27;Pig|Swine~4~Proverbs 11:22;Snake|Serpent~4~Proverbs 23:32;Ox~4~Proverbs 14:4;Lizard|Spider~5~Proverbs 30:28;Sparrow~5~Proverbs 26:2;Bird~5~Proverbs 1:17;Raven~5~Proverbs 30:17;Goat~5~Proverbs 27:26;Sheep|Lambs~5~Proverbs 27:23;Deer|Doe|Gazelle~5~Proverbs 5:19;Leech~6~Proverbs 30:15;Rooster~6~Proverbs 30:31
B^Proverbs^Name a type of person Proverbs warns about or praises^“Go to the ant, you sluggard; consider its ways and be wise” (Proverbs 6:6).^Fool~1~Proverbs 26:11;Wise man|Wise~1~Proverbs 9:9;Sluggard|Lazy~1~Proverbs 6:6;Wife of noble character|Proverbs 31 woman|Virtuous woman~1~Proverbs 31:10;Adulteress|Immoral woman~2~Proverbs 5:3;Scoffer|Mocker~2~Proverbs 9:7;Gossip|Talebearer~2~Proverbs 16:28;Righteous~2~Proverbs 10:7;Wicked~2~Proverbs 10:7;Diligent~3~Proverbs 10:4;Quarrelsome wife~3~Proverbs 21:9;Simple|Naive~3~Proverbs 1:22;Friend~3~Proverbs 17:17;Liar~4~Proverbs 19:22;Drunkard~4~Proverbs 23:21;Prudent~4~Proverbs 12:23;Glutton~5~Proverbs 23:21;King~5~Proverbs 21:1
B^Proverbs^Name someone whose words are recorded in Proverbs^Proverbs 31's portrait of the noble wife is presented as teaching King Lemuel learned from his mother.^Solomon~1~Proverbs 1:1;Agur~3~Proverbs 30:1;Lemuel~3~Proverbs 31:1;Wisdom|Lady Wisdom~3~Proverbs 8:1;Lemuel's mother~5~Proverbs 31:1;Hezekiah's men~5~Proverbs 25:1;Folly|Lady Folly~5~Proverbs 9:13
B^Ecclesiastes^Name one of the pairs from “a time for everything”^Ecclesiastes 3:1–8 lists 14 pairs of opposites, from “a time to be born” to “a time for peace”.^Born and die|Birth and death|Born|Die~1~Ecclesiastes 3:2;Weep and laugh|Weep|Laugh~1~Ecclesiastes 3:4;Mourn and dance|Mourn|Dance~1~Ecclesiastes 3:4;Love and hate|Love|Hate~2~Ecclesiastes 3:8;War and peace|War|Peace~2~Ecclesiastes 3:8;Plant and uproot|Plant|Uproot|Harvest~2~Ecclesiastes 3:2;Kill and heal|Kill|Heal~3~Ecclesiastes 3:3;Tear down and build|Build|Tear down~3~Ecclesiastes 3:3;Be silent and speak|Silent|Speak~3~Ecclesiastes 3:7;Scatter stones and gather them|Scatter stones|Gather stones~4~Ecclesiastes 3:5;Embrace and refrain|Embrace|Refrain~4~Ecclesiastes 3:5;Keep and throw away|Keep|Throw away~4~Ecclesiastes 3:6;Tear and mend|Tear|Mend|Sew~4~Ecclesiastes 3:7;Search and give up|Search|Give up|Lose~5~Ecclesiastes 3:6
B^Ecclesiastes^Name a key word or phrase in Ecclesiastes^The narrator calls himself Qoheleth, usually translated “the Teacher” or “the Preacher”.^Vanity of vanities|Meaningless|Vanity~1~Ecclesiastes 1:2;Under the sun~1~Ecclesiastes 1:3;Time for everything~1~Ecclesiastes 3:1;Nothing new under the sun~2~Ecclesiastes 1:9;Chasing the wind|Chasing after wind~2~Ecclesiastes 1:14;A cord of three strands|Threefold cord~2~Ecclesiastes 4:12;The Teacher|Preacher|Qoheleth~2~Ecclesiastes 1:1;Fear God and keep his commandments~3~Ecclesiastes 12:13;Eat, drink and be merry|Eat and drink~3~Ecclesiastes 8:15;Remember your Creator~3~Ecclesiastes 12:1;Eternity in their hearts~3~Ecclesiastes 3:11;Cast your bread upon the waters~4~Ecclesiastes 11:1;Of making many books there is no end~5~Ecclesiastes 12:12
B^Song of Songs^Name an image used in the Song of Songs^“His banner over me is love” (Song of Songs 2:4).^Rose of Sharon~1~Song of Songs 2:1;Lily of the valleys|Lily~1~Song of Songs 2:1;Dove~2~Song of Songs 2:14;Gazelle~2~Song of Songs 2:9;Young stag|Stag~3~Song of Songs 2:9;Apple tree~3~Song of Songs 2:3;Garden~3~Song of Songs 4:12;Wine~3~Song of Songs 1:2;Seal upon your heart|Seal~3~Song of Songs 8:6;Fountain~4~Song of Songs 4:15;Tower of David~4~Song of Songs 4:4;Pomegranate~4~Song of Songs 4:3;Myrrh~4~Song of Songs 1:13;Banner~4~Song of Songs 2:4;Little foxes~4~Song of Songs 2:15;Mare~5~Song of Songs 1:9;Henna~5~Song of Songs 1:14;Cedars of Lebanon~5~Song of Songs 5:15
B^Song of Songs^Name a place mentioned in the Song of Songs^The beloved's dark skin is compared to “the tents of Kedar” (Song of Songs 1:5).^Lebanon~1~Song of Songs 4:8;Jerusalem~1~Song of Songs 1:5;Sharon~2~Song of Songs 2:1;Gilead~3~Song of Songs 4:1;En Gedi~3~Song of Songs 1:14;Tirzah~4~Song of Songs 6:4;Kedar~4~Song of Songs 1:5;Hermon~4~Song of Songs 4:8;Carmel~4~Song of Songs 7:5;Heshbon~5~Song of Songs 7:4;Damascus~5~Song of Songs 7:4;Amana~6~Song of Songs 4:8;Senir~6~Song of Songs 4:8;Baal Hamon~6~Song of Songs 8:11
B^Isaiah^Name a title of the Messiah from Isaiah^“Wonderful Counsellor, Mighty God, Everlasting Father, Prince of Peace” (Isaiah 9:6).^Wonderful Counsellor|Wonderful Counselor~1~Isaiah 9:6;Mighty God~1~Isaiah 9:6;Everlasting Father~1~Isaiah 9:6;Prince of Peace~1~Isaiah 9:6;Immanuel|Emmanuel~1~Isaiah 7:14;Suffering Servant|Servant~2~Isaiah 52:13–53:12;Man of sorrows~2~Isaiah 53:3;Branch~3~Isaiah 11:1;Root of Jesse~3~Isaiah 11:10;Light to the nations|Light to the Gentiles~3~Isaiah 49:6;Lamb~3~Isaiah 53:7;Cornerstone|Precious cornerstone~4~Isaiah 28:16;Shoot from the stump of Jesse~4~Isaiah 11:1;Arm of the Lord~5~Isaiah 53:1
B^Isaiah^Name a famous promise or image from Isaiah^Isaiah 53, the suffering servant, is the passage the Ethiopian official was reading when Philip met him (Acts 8:32–35).^Wings like eagles|Mount up with wings like eagles~1~Isaiah 40:31;By his stripes we are healed|By his wounds we are healed~1~Isaiah 53:5;Here am I, send me~1~Isaiah 6:8;No weapon formed against you shall prosper~1~Isaiah 54:17;Swords into ploughshares|Swords into plowshares~2~Isaiah 2:4;The wolf and the lamb~2~Isaiah 11:6;Your sins shall be white as snow~2~Isaiah 1:18;Fear not, for I am with you~2~Isaiah 41:10;Beauty for ashes~2~Isaiah 61:3;A voice crying in the wilderness~2~Isaiah 40:3;A virgin shall conceive~2~Isaiah 7:14;Holy, holy, holy~3~Isaiah 6:3;Live coal on his lips~3~Isaiah 6:6–7;Comfort my people~3~Isaiah 40:1;Garment of praise~3~Isaiah 61:3;I am doing a new thing|Streams in the desert~3~Isaiah 43:19;My thoughts are not your thoughts~3~Isaiah 55:8;Arise, shine, for your light has come~3~Isaiah 60:1;Every valley shall be lifted up~4~Isaiah 40:4;The grass withers~4~Isaiah 40:8
B^Isaiah^Name a person in Isaiah^Isaiah gave his sons sign-names: Shear-Jashub (“a remnant will return”) and Maher-Shalal-Hash-Baz.^Isaiah~1~Isaiah 1:1;Hezekiah~1~Isaiah 36:1;Uzziah~2~Isaiah 6:1;Ahaz~2~Isaiah 7:1;Cyrus~2~Isaiah 45:1;Sennacherib~3~Isaiah 36:1;Jotham~4~Isaiah 1:1;Amoz~4~Isaiah 1:1;Maher-Shalal-Hash-Baz~4~Isaiah 8:3;Lucifer|Day star|Morning star~4~Isaiah 14:12;Rabshakeh~5~Isaiah 36:2;Shebna~5~Isaiah 22:15;Eliakim~5~Isaiah 22:20;Shear-Jashub~5~Isaiah 7:3;Merodach-Baladan~6~Isaiah 39:1;Tirhakah~6~Isaiah 37:9
B^Isaiah^Name something from Isaiah's temple vision (Isaiah 6)^Each seraph had six wings: two covered its face, two its feet, and with two it flew (Isaiah 6:2).^Holy, holy, holy|Holy holy holy~1~Isaiah 6:3;Seraphim~1~Isaiah 6:2;Throne~1~Isaiah 6:1;Six wings|Wings~2~Isaiah 6:2;Live coal|Coal~2~Isaiah 6:6;Train of his robe|Robe~2~Isaiah 6:1;Temple~2~Isaiah 6:1;Smoke~3~Isaiah 6:4;Altar~3~Isaiah 6:6;Unclean lips~3~Isaiah 6:5;Tongs~4~Isaiah 6:6;Doorposts shook~4~Isaiah 6:4
B^Jeremiah^Name a person in Jeremiah^Ebed-Melech, an Ethiopian official, pulled Jeremiah out of a muddy cistern with ropes and old rags (Jeremiah 38:7–13).^Jeremiah~1~Jeremiah 1:1;Nebuchadnezzar~1~Jeremiah 21:2;Baruch~2~Jeremiah 32:12;Zedekiah~2~Jeremiah 21:1;Jehoiakim~3~Jeremiah 36:1;Josiah~3~Jeremiah 1:2;Hananiah~3~Jeremiah 28:1;Ebed-Melech~3~Jeremiah 38:7;Pashhur~4~Jeremiah 20:1;Gedaliah~4~Jeremiah 40:5;Jehoiachin|Jeconiah|Coniah~4~Jeremiah 52:31;Ishmael~5~Jeremiah 41:1–2;Johanan~5~Jeremiah 40:13;Hilkiah~5~Jeremiah 1:1;Nebuzaradan~5~Jeremiah 39:9;Rechabites~5~Jeremiah 35:2;Shaphan~5~Jeremiah 36:10;Seraiah~6~Jeremiah 51:59;Jehudi~6~Jeremiah 36:23
B^Jeremiah^Name an image, object or promise in Jeremiah^King Jehoiakim cut up Jeremiah's scroll column by column and burned it — so Jeremiah dictated it again (Jeremiah 36).^Potter and the clay|Potter~1~Jeremiah 18:6;Plans to prosper you|Jeremiah 29:11|I know the plans I have for you~1~Jeremiah 29:11;Yoke~2~Jeremiah 27:2;Scroll burned in the fire|Scroll~2~Jeremiah 36:23;Balm in Gilead~2~Jeremiah 8:22;New covenant~2~Jeremiah 31:31;Linen belt|Loincloth|Waistband~3~Jeremiah 13:1;Almond branch~3~Jeremiah 1:11;Boiling pot~3~Jeremiah 1:13;Broken cisterns~3~Jeremiah 2:13;Two baskets of figs|Figs~3~Jeremiah 24:1;Smashed clay jar~3~Jeremiah 19:10;Cistern|Mud pit~3~Jeremiah 38:6;Fire shut up in my bones~3~Jeremiah 20:9;Field at Anathoth~4~Jeremiah 32:9;Cup of wrath~4~Jeremiah 25:15;Hammer that breaks the rock~4~Jeremiah 23:29;Wine jars~5~Jeremiah 13:12
B^Jeremiah^Name a place in Jeremiah^Jeremiah came from a priestly family in Anathoth, a village in Benjamin (Jeremiah 1:1).^Jerusalem~1~Jeremiah 1:3;Babylon~1~Jeremiah 20:4;Egypt~2~Jeremiah 43:7;Judah~2~Jeremiah 1:3;Anathoth~3~Jeremiah 1:1;Mizpah~4~Jeremiah 40:6;Ramah~4~Jeremiah 31:15;Valley of Hinnom|Topheth|Ben Hinnom~4~Jeremiah 7:31;Gilead~4~Jeremiah 8:22;Euphrates~4~Jeremiah 13:4;Moab~4~Jeremiah 48:1;Edom~4~Jeremiah 49:7;Tahpanhes~5~Jeremiah 43:7;Shiloh~5~Jeremiah 7:12;Carchemish~5~Jeremiah 46:2;Ammon~5~Jeremiah 49:1;Damascus~5~Jeremiah 49:23;Kedar~5~Jeremiah 49:28;Elam~5~Jeremiah 49:34;Riblah~6~Jeremiah 52:9
B^Lamentations^Name a phrase or theme from Lamentations^Four of Lamentations' five chapters are acrostic poems that run through the Hebrew alphabet.^Great is your faithfulness~1~Lamentations 3:23;New every morning|His mercies are new every morning~1~Lamentations 3:23;Fall of Jerusalem|Destruction of Jerusalem~1~Lamentations 1:1;The Lord is my portion~2~Lamentations 3:24;The steadfast love of the Lord never ceases~2~Lamentations 3:22;Jeremiah|Weeping prophet~2~2 Chronicles 35:25;How lonely sits the city~3~Lamentations 1:1;It is good to wait quietly~3~Lamentations 3:26;Acrostic|Alphabet poem~3~Lamentations 1–4;Zion~3~Lamentations 1:4;Daughter of Zion~4~Lamentations 2:1;Restore us to yourself~4~Lamentations 5:21;Is it nothing to you, all you who pass by~5~Lamentations 1:12
B^Lamentations^Name a mourning image in Lamentations^“My eyes fail from weeping” (Lamentations 2:11) — the city is pictured as a weeping widow.^Tears|Weeping~1~Lamentations 1:2;Widow~2~Lamentations 1:1;Ashes|Dust~2~Lamentations 3:16;Sackcloth~2~Lamentations 2:10;Wormwood|Gall~3~Lamentations 3:15;Bitterness~3~Lamentations 3:15;Darkness~4~Lamentations 3:2;Jackals~4~Lamentations 5:18;Broken teeth|Gravel~5~Lamentations 3:16;Ostrich~5~Lamentations 4:3
B^Ezekiel^Name a vision or image in Ezekiel^In the valley of dry bones, Ezekiel prophesied and the bones came together, “bone to bone” (Ezekiel 37:7).^Valley of dry bones|Dry bones~1~Ezekiel 37:1–14;Wheels within wheels|Wheel~1~Ezekiel 1:16;Four living creatures|Living creatures~2~Ezekiel 1:5;Heart of stone, heart of flesh|Heart of flesh~2~Ezekiel 36:26;River flowing from the temple|River~2~Ezekiel 47:1–12;Watchman~2~Ezekiel 3:17;Eating the scroll|Scroll~3~Ezekiel 3:1–3;Cherubim~3~Ezekiel 10:1;Gog and Magog~3~Ezekiel 38:2;New temple~3~Ezekiel 40–48;Glory of the Lord leaves the temple~4~Ezekiel 10:18;Two sticks~4~Ezekiel 37:16–17;Shepherds of Israel~4~Ezekiel 34:2;Lying on his side~4~Ezekiel 4:4–6;Bread baked over dung~4~Ezekiel 4:12–15;Two eagles and a vine~5~Ezekiel 17:3–8
B^Ezekiel^Name a person or nation in Ezekiel^Ezekiel 14:14 names Noah, Daniel and Job as three righteous men.^Ezekiel~1~Ezekiel 1:3;Gog~2~Ezekiel 38:2;Tyre|King of Tyre~2~Ezekiel 26:2;Egypt|Pharaoh~2~Ezekiel 29:2;Nebuchadnezzar~2~Ezekiel 26:7;Daniel~3~Ezekiel 14:14;Noah~3~Ezekiel 14:14;Job~3~Ezekiel 14:14;Magog~3~Ezekiel 38:2;Oholah~4~Ezekiel 23:4;Oholibah~4~Ezekiel 23:4;Edom~4~Ezekiel 25:12;Ammon~4~Ezekiel 25:2;Moab~4~Ezekiel 25:8;Philistines~4~Ezekiel 25:15;Assyria~4~Ezekiel 31:3;Pelatiah~5~Ezekiel 11:13;Buzi~5~Ezekiel 1:3;Tammuz~5~Ezekiel 8:14;Sidon~5~Ezekiel 28:21;Jaazaniah~6~Ezekiel 8:11
B^Ezekiel^Name a place in Ezekiel^Ezekiel saw his first visions among the exiles by the Kebar River in Babylonia (Ezekiel 1:1).^Babylon~1~Ezekiel 12:13;Jerusalem~1~Ezekiel 16:2;Kebar River|Chebar~2~Ezekiel 1:1;Tyre~2~Ezekiel 26:3;Egypt~2~Ezekiel 29:3;Temple~2~Ezekiel 40:5;Samaria~3~Ezekiel 16:46;Valley~3~Ezekiel 37:1;Eden~4~Ezekiel 28:13;Tel Aviv|Tel-abib~4~Ezekiel 3:15;Dead Sea~4~Ezekiel 47:8;Sodom~4~Ezekiel 16:46;En Gedi~5~Ezekiel 47:10
B^Daniel^Name a person in the book of Daniel^Daniel's friends were renamed in Babylon: Hananiah became Shadrach, Mishael became Meshach and Azariah became Abednego (Daniel 1:7).^Daniel|Belteshazzar~1~Daniel 1:6;Shadrach|Hananiah~1~Daniel 1:7;Meshach|Mishael~1~Daniel 1:7;Abednego|Azariah~1~Daniel 1:7;Nebuchadnezzar~1~Daniel 1:1;Belshazzar~2~Daniel 5:1;Darius~2~Daniel 6:1;Gabriel~3~Daniel 8:16;Michael~3~Daniel 10:13;Cyrus~3~Daniel 10:1;Ancient of Days~3~Daniel 7:9;Ashpenaz~4~Daniel 1:3;Son of Man~4~Daniel 7:13;Arioch~5~Daniel 2:14
B^Daniel^Name an event in Daniel^The writing on the wall read “Mene, Mene, Tekel, Parsin” — Belshazzar's kingdom was weighed and found wanting (Daniel 5:25–28).^Daniel in the lions' den|Lions' den~1~Daniel 6:16;Fiery furnace~1~Daniel 3:20–23;Writing on the wall~1~Daniel 5:5;Nebuchadnezzar's statue dream~2~Daniel 2:31;Daniel refuses the king's food|Vegetables and water~2~Daniel 1:8;Golden image~2~Daniel 3:1;Fourth man in the fire~2~Daniel 3:25;Mene Mene Tekel Parsin|Mene Mene Tekel Upharsin~2~Daniel 5:25;Nebuchadnezzar eats grass like an ox~3~Daniel 4:33;Vision of four beasts~3~Daniel 7:3;Daniel prays three times a day~3~Daniel 6:10;Ram and the goat~4~Daniel 8:3–8;Seventy weeks~4~Daniel 9:24
B^Daniel^Name a beast or material from Daniel's visions^Nebuchadnezzar's statue had a head of gold, chest of silver, belly of bronze, legs of iron and feet of iron mixed with clay (Daniel 2:32–33).^Gold~1~Daniel 2:32;Silver~1~Daniel 2:32;Lion~1~Daniel 7:4;Bear~1~Daniel 7:5;Leopard~1~Daniel 7:6;Bronze~2~Daniel 2:32;Iron~2~Daniel 2:33;Clay~2~Daniel 2:33;Ram~2~Daniel 8:3;Goat|Male goat~2~Daniel 8:5;Fourth beast|Terrifying beast~3~Daniel 7:7;Little horn~3~Daniel 7:8;Stone cut without hands|Stone~3~Daniel 2:34;Eagle's wings~4~Daniel 7:4
B^Hosea^Name a person or name in Hosea^Hosea's children were named Jezreel, Lo-Ruhamah (“not loved”) and Lo-Ammi (“not my people”) (Hosea 1).^Hosea~1~Hosea 1:1;Gomer~1~Hosea 1:3;Jezreel~2~Hosea 1:4;Lo-Ruhamah~3~Hosea 1:6;Lo-Ammi~3~Hosea 1:9;Ephraim~3~Hosea 4:17;Diblaim~5~Hosea 1:3;Beeri~5~Hosea 1:1;Jeroboam~5~Hosea 1:1;Uzziah~5~Hosea 1:1
B^Hosea^Name an image or saying from Hosea^Hosea bought his wife back for fifteen shekels of silver and some barley (Hosea 3:2).^Unfaithful wife|Marriage~1~Hosea 1:2;They sow the wind and reap the whirlwind|Whirlwind~2~Hosea 8:7;Out of Egypt I called my son~2~Hosea 11:1;My people are destroyed for lack of knowledge~2~Hosea 4:6;Morning cloud|Dew~2~Hosea 6:4;Silly dove|Dove~3~Hosea 7:11;Valley of Achor a door of hope|Door of hope~3~Hosea 2:15;Cords of love|Bands of love~3~Hosea 11:4;Half-baked cake|Cake not turned~4~Hosea 7:8;Lion~4~Hosea 5:14;Heifer~4~Hosea 4:16;Bought for silver and barley~4~Hosea 3:2;Leopard~5~Hosea 13:7;Bear robbed of her cubs~5~Hosea 13:8
B^Joel^Name an image or promise in Joel^Peter quoted Joel 2 at Pentecost: “I will pour out my Spirit on all people” (Acts 2:16–21).^Locusts~1~Joel 1:4;Pour out my Spirit on all flesh|Outpouring of the Spirit~1~Joel 2:28;Day of the Lord~1~Joel 2:1;Restore the years the locusts have eaten|Restore the years~1~Joel 2:25;Sons and daughters will prophesy~2~Joel 2:28;Old men will dream dreams|Dreams~2~Joel 2:28;Young men will see visions|Visions~2~Joel 2:28;Rend your hearts, not your garments~2~Joel 2:13;Valley of decision|Valley of Jehoshaphat~3~Joel 3:14;Blow the trumpet in Zion~3~Joel 2:1;Moon turned to blood~3~Joel 2:31;Ploughshares into swords|Plowshares into swords~4~Joel 3:10;Wine and oil~5~Joel 2:24
B^Joel^Name an insect or crop in Joel's plague^Joel describes waves of locusts stripping vines and fig trees bare (Joel 1:4–7).^Locust|Swarming locust~1~Joel 1:4;Grain|Corn~2~Joel 1:10;Grapes|New wine|Vine~2~Joel 1:7;Olive oil|Oil~2~Joel 1:10;Fig tree|Figs~2~Joel 1:7;Wheat~3~Joel 1:11;Barley~3~Joel 1:11;Cutting locust|Palmerworm~3~Joel 1:4;Hopping locust|Cankerworm~3~Joel 1:4;Destroying locust|Caterpillar~3~Joel 1:4;Pomegranate~4~Joel 1:12;Palm~4~Joel 1:12;Apple tree~4~Joel 1:12
B^Amos^Name an image or saying from Amos^Amos was a shepherd and a dresser of sycamore figs from Tekoa — not a professional prophet (Amos 1:1; 7:14).^Let justice roll down like waters~1~Amos 5:24;Plumb line~1~Amos 7:7–8;Basket of summer fruit~2~Amos 8:1;Cows of Bashan~2~Amos 4:1;Shepherd from Tekoa|Herdsman~2~Amos 1:1;Famine of hearing the word of the Lord|Famine~2~Amos 8:11;Can two walk together unless they agree~2~Amos 3:3;Locusts~3~Amos 7:1;Fire~3~Amos 7:4;Sycamore fig~3~Amos 7:14;Prepare to meet your God~3~Amos 4:12;The Lord roars from Zion|Lion~3~Amos 1:2;For three sins and for four~3~Amos 1:3;Booth of David|Tabernacle of David~3~Amos 9:11;Seek me and live~4~Amos 5:4
B^Amos^Name a nation or city Amos prophesies against^Amos circles Israel's neighbours with judgement before turning to Israel itself (Amos 1–2).^Israel~1~Amos 2:6;Judah~1~Amos 2:4;Damascus|Aram|Syria~2~Amos 1:3;Gaza|Philistia~2~Amos 1:6;Tyre~2~Amos 1:9;Edom~2~Amos 1:11;Ammon~3~Amos 1:13;Moab~3~Amos 2:1
B^Obadiah^Name a person, nation or place in Obadiah^Obadiah is the shortest book in the Old Testament: one chapter, 21 verses.^Edom~1~Obadiah 1:1;Esau~1~Obadiah 1:6;Obadiah~1~Obadiah 1:1;Jacob~2~Obadiah 1:10;Mount Zion|Zion~2~Obadiah 1:17;Jerusalem~2~Obadiah 1:11;Mount Esau~3~Obadiah 1:21;Teman~4~Obadiah 1:9;Philistines~4~Obadiah 1:19;Ephraim~5~Obadiah 1:19;Samaria~5~Obadiah 1:19;Gilead~5~Obadiah 1:19;Benjamin~5~Obadiah 1:19;Zarephath~5~Obadiah 1:20;Negev|Negeb~5~Obadiah 1:19;Sepharad~6~Obadiah 1:20;Shephelah~6~Obadiah 1:19
B^Obadiah^Name a sin Edom is condemned for in Obadiah^“The pride of your heart has deceived you, you who live in the clefts of the rocks” (Obadiah 1:3).^Pride~1~Obadiah 1:3;Violence~2~Obadiah 1:10;Gloating~2~Obadiah 1:12;Standing aloof|Standing by~3~Obadiah 1:11;Looting~3~Obadiah 1:13;Handing over survivors|Betrayal~3~Obadiah 1:14;Rejoicing over Judah's ruin~3~Obadiah 1:12;Cutting off fugitives~4~Obadiah 1:14
B^Jonah^Name something from Jonah's story^God sent a worm to kill the plant that shaded Jonah, then a scorching east wind (Jonah 4:7–8).^Big fish|Great fish|Whale~1~Jonah 1:17;Nineveh~1~Jonah 1:2;Storm~1~Jonah 1:4;Ship|Boat~2~Jonah 1:3;Tarshish~2~Jonah 1:3;Three days and three nights~2~Jonah 1:17;Plant|Vine|Gourd~2~Jonah 4:6;Thrown overboard~2~Jonah 1:15;Repentance~2~Jonah 3:10;Joppa~3~Jonah 1:3;Casting lots|Lots~3~Jonah 1:7;Sailors~3~Jonah 1:5;Worm~3~Jonah 4:7;Sackcloth~3~Jonah 3:5;Forty days~3~Jonah 3:4;Prayer from the fish~3~Jonah 2:1;East wind|Scorching wind~4~Jonah 4:8;Fasting~4~Jonah 3:5;Cattle~5~Jonah 4:11;Sun~5~Jonah 4:8
B^Jonah^Name a person or group in Jonah^Jesus called Jonah's three days in the fish “the sign of Jonah” (Matthew 12:39–41).^Jonah~1~Jonah 1:1;God|The Lord~1~Jonah 1:2;King of Nineveh~2~Jonah 3:6;Ninevites|People of Nineveh~2~Jonah 3:5;Sailors|Mariners~2~Jonah 1:5;Captain~2~Jonah 1:6;Amittai~4~Jonah 1:1
B^Micah^Name an image or promise from Micah^Micah 5:2 names Bethlehem as the ruler's birthplace; the chief priests quoted it to Herod (Matthew 2:5–6).^Bethlehem~1~Micah 5:2;Act justly, love mercy, walk humbly|Do justice, love mercy, walk humbly~1~Micah 6:8;Swords into ploughshares|Swords into plowshares~2~Micah 4:3;Our sins cast into the depths of the sea|Depths of the sea~2~Micah 7:19;A ruler from Bethlehem~2~Micah 5:2;Everyone under their own vine and fig tree|Vine and fig tree~3~Micah 4:4;Who is a God like you~3~Micah 7:18;The mountain of the Lord's house~3~Micah 4:1;Shepherd his flock~4~Micah 5:4;Remnant~4~Micah 2:12;Samaria a heap of rubble~5~Micah 1:6
B^Micah^Name a place in Micah^Micah came from Moresheth, a town in Judah's lowlands (Micah 1:1).^Bethlehem|Ephrathah~1~Micah 5:2;Jerusalem~1~Micah 1:1;Samaria~2~Micah 1:1;Zion~2~Micah 4:2;Judah~2~Micah 1:9;Assyria~3~Micah 5:5;Egypt~3~Micah 7:15;Babylon~3~Micah 4:10;Lachish~4~Micah 1:13;Gath~4~Micah 1:10;Moresheth~4~Micah 1:1;Mareshah~5~Micah 1:15;Adullam~5~Micah 1:15;Land of Nimrod~6~Micah 5:6
B^Nahum^Name a person, place or image in Nahum^Nahum foretold the fall of Nineveh, which came in 612 BC — over a century after Jonah's preaching.^Nineveh~1~Nahum 1:1;Assyria~1~Nahum 3:18;Nahum~1~Nahum 1:1;The Lord is good, a stronghold in the day of trouble|Stronghold~2~Nahum 1:7;The feet of him who brings good news|Good news~3~Nahum 1:15;Jealous and avenging God~3~Nahum 1:2;Lion's den~3~Nahum 2:11;Chariots~3~Nahum 2:4;Flood~3~Nahum 1:8;Elkosh|Elkoshite~4~Nahum 1:1;Thebes|No-Amon~4~Nahum 3:8;Locusts~4~Nahum 3:15;Bashan~5~Nahum 1:4;Carmel~5~Nahum 1:4;Lebanon~5~Nahum 1:4
B^Habakkuk^Name an image or phrase from Habakkuk^Habakkuk 2:4 — “the righteous shall live by faith” — is quoted three times in the New Testament.^The righteous shall live by faith|The just shall live by faith~1~Habakkuk 2:4;Write the vision, make it plain|Write the vision~1~Habakkuk 2:2;Though the fig tree does not blossom|Fig tree~2~Habakkuk 3:17;Feet like a deer|Hinds' feet~2~Habakkuk 3:19;Chaldeans|Babylonians~2~Habakkuk 1:6;How long, O Lord~2~Habakkuk 1:2;Watchtower|Rampart~3~Habakkuk 2:1;The earth filled with the knowledge of the glory of the Lord~3~Habakkuk 2:14;Wait for it, it will surely come~3~Habakkuk 2:3;Rejoice in the Lord~3~Habakkuk 3:18;In wrath remember mercy~4~Habakkuk 3:2;Woes~4~Habakkuk 2:6–20;The stone will cry out from the wall~5~Habakkuk 2:11;Shigionoth~6~Habakkuk 3:1
B^Zephaniah^Name a phrase, person or theme in Zephaniah^Zephaniah traces his ancestry back four generations to King Hezekiah (Zephaniah 1:1).^Day of the Lord~1~Zephaniah 1:14;He will rejoice over you with singing|Rejoice over you with singing~1~Zephaniah 3:17;The Lord your God is in your midst|Mighty to save~2~Zephaniah 3:17;Remnant~3~Zephaniah 3:13;Seek the Lord, all you humble~3~Zephaniah 2:3;Josiah~4~Zephaniah 1:1;Pure lips|Purified lips~4~Zephaniah 3:9;Nineveh made a desolation~4~Zephaniah 2:13;Hezekiah~5~Zephaniah 1:1;Cushi~5~Zephaniah 1:1;Fish Gate~6~Zephaniah 1:10
B^Haggai^Name a person or theme in Haggai^All four of Haggai's messages are dated to 520 BC, within about four months.^Haggai~1~Haggai 1:1;Zerubbabel~1~Haggai 1:1;Rebuild the temple|Temple~1~Haggai 1:8;Joshua|Jeshua~2~Haggai 1:1;Darius~2~Haggai 1:1;Consider your ways~2~Haggai 1:5;Wages in a purse with holes|Bag with holes~2~Haggai 1:6;Panelled houses|Paneled houses~3~Haggai 1:4;Signet ring~3~Haggai 2:23;The glory of this latter house~3~Haggai 2:9;The silver is mine and the gold is mine~3~Haggai 2:8;Shake the heavens and the earth~4~Haggai 2:6;Drought~4~Haggai 1:11
B^Zechariah^Name a vision or saying in Zechariah^Zechariah 9:9 pictures a king riding on a donkey — fulfilled when Jesus entered Jerusalem (Matthew 21:5).^Not by might nor by power but by my Spirit~1~Zechariah 4:6;King riding on a donkey~1~Zechariah 9:9;Thirty pieces of silver~2~Zechariah 11:12;They will look on me whom they have pierced|Pierced~2~Zechariah 12:10;Flying scroll~2~Zechariah 5:1;Golden lampstand~2~Zechariah 4:2;Two olive trees~2~Zechariah 4:3;Four horns and four craftsmen~3~Zechariah 1:18–21;Man with a measuring line~3~Zechariah 2:1;Four chariots~3~Zechariah 6:1;Horses among the myrtle trees~3~Zechariah 1:8;Joshua's filthy clothes~3~Zechariah 3:3–4;Strike the shepherd and the sheep will scatter~3~Zechariah 13:7;Mount of Olives split in two~3~Zechariah 14:4;Day of small things~3~Zechariah 4:10;Prisoners of hope~3~Zechariah 9:12;Woman in a basket~4~Zechariah 5:7;Living waters from Jerusalem~4~Zechariah 14:8;Holy to the Lord on the horses' bells~5~Zechariah 14:20
B^Zechariah^Name a person or being in Zechariah^Zechariah sees Satan standing to accuse Joshua the high priest — and the Lord rebukes Satan (Zechariah 3:1–2).^Zechariah~1~Zechariah 1:1;Zerubbabel~1~Zechariah 4:6;Joshua|Jeshua~2~Zechariah 3:1;Angel of the Lord~2~Zechariah 1:11;Satan~3~Zechariah 3:1;Darius~3~Zechariah 1:1;Berekiah~4~Zechariah 1:1;Iddo~4~Zechariah 1:1;Heldai~6~Zechariah 6:10;Tobijah~6~Zechariah 6:10;Jedaiah~6~Zechariah 6:10
B^Malachi^Name a phrase or theme from Malachi^Malachi is the last book of the Old Testament; roughly 400 years pass before John the Baptist appears.^Bring the whole tithe|Tithes~1~Malachi 3:10;Windows of heaven~1~Malachi 3:10;Robbing God~2~Malachi 3:8;Elijah~2~Malachi 4:5;Sun of righteousness with healing in its wings|Healing in his wings~2~Malachi 4:2;My messenger|Messenger~2~Malachi 3:1;Refiner's fire~2~Malachi 3:2;I the Lord do not change~2~Malachi 3:6;Fuller's soap|Launderer's soap~3~Malachi 3:2;Jacob I loved, Esau I hated~3~Malachi 1:2–3;Book of remembrance~3~Malachi 3:16;Blemished sacrifices~3~Malachi 1:8;I hate divorce~3~Malachi 2:16;Turn the hearts of fathers to their children~3~Malachi 4:6;Day of the Lord~3~Malachi 4:5;Calves leaping from the stall~4~Malachi 4:2
B@2026-11-25^Habakkuk^Name an animal or plant mentioned in Habakkuk^Habakkuk 3:17–18 pictures failed figs, vines, olives, sheep and cattle — “Yet I will rejoice in the Lord” (KJV).^Fig tree|Fig|Figs~1~Habakkuk 3:17;Deer|Hind|Hinds' feet~1~Habakkuk 3:19;Horses|Horse~1~Habakkuk 1:8;Vine|Vines|Grapes|Grapevine~2~Habakkuk 3:17;Olive|Olive tree|Olives~2~Habakkuk 3:17;Sheep|Flock~2~Habakkuk 3:17;Cattle|Herd|Herds|Cows~2~Habakkuk 3:17;Fish~4~Habakkuk 1:14;Leopards|Leopard~5~Habakkuk 1:8;Wolves|Wolf|Evening wolves~5~Habakkuk 1:8;Eagle|Vulture~5~Habakkuk 1:8;Sea creatures|Creeping things|Crawling things~6~Habakkuk 1:14
B@2026-11-27^Malachi^Name a person or group mentioned in Malachi^Paul quotes Malachi 1:2–3, “Jacob have I loved, but Esau have I hated”, in Romans 9:13 (KJV).^Elijah|Elias|Elijah the prophet~1~Malachi 4:5;Malachi~1~Malachi 1:1;Israel|Children of Israel~1~Malachi 1:1;Jacob~2~Malachi 1:2;Esau~2~Malachi 1:2–3;Moses~2~Malachi 4:4;Priests|The priests~2~Malachi 1:6;The Lord of hosts|Lord of hosts~2~Malachi 1:4;Levi|Sons of Levi|Levites~3~Malachi 2:4;My messenger|The messenger|Messenger of the covenant~3~Malachi 3:1;Judah~3~Malachi 2:11;Edom|Edomites~3~Malachi 1:4;The wife of thy youth|Wife of your youth|Wife of thy youth~4~Malachi 2:14;Widow|Widows|The widow~4~Malachi 3:5;Fatherless|The fatherless|Orphans~4~Malachi 3:5;Fathers and children|Fathers|Children~4~Malachi 4:6;Sorcerers~5~Malachi 3:5;Adulterers~5~Malachi 3:5;Hireling|Hired worker|Hired workers~5~Malachi 3:5;False swearers|Perjurers~6~Malachi 3:5

// ===== NEW TESTAMENT =====
B^Matthew^Name someone in Matthew's genealogy of Jesus^Matthew's genealogy names four women before Mary: Tamar, Rahab, Ruth and “Uriah's wife” Bathsheba (Matthew 1).^Abraham~1~Matthew 1:2;David~1~Matthew 1:6;Joseph~1~Matthew 1:16;Mary~1~Matthew 1:16;Isaac~2~Matthew 1:2;Jacob~2~Matthew 1:2;Solomon~2~Matthew 1:6;Ruth~2~Matthew 1:5;Judah~3~Matthew 1:2;Boaz~3~Matthew 1:5;Rahab~3~Matthew 1:5;Jesse~3~Matthew 1:5;Tamar~4~Matthew 1:3;Bathsheba|Uriah's wife~4~Matthew 1:6;Obed~4~Matthew 1:5;Hezekiah~4~Matthew 1:9;Josiah~4~Matthew 1:10;Perez~5~Matthew 1:3;Rehoboam~5~Matthew 1:7;Zerubbabel~5~Matthew 1:12;Jeconiah|Jehoiachin~5~Matthew 1:11;Asa~5~Matthew 1:7;Jehoshaphat~5~Matthew 1:8;Uzziah~5~Matthew 1:8;Ahaz~5~Matthew 1:9;Manasseh~5~Matthew 1:10;Jotham~6~Matthew 1:9;Amon~6~Matthew 1:10;Shealtiel~6~Matthew 1:12;Abiud~6~Matthew 1:13;Eliakim~6~Matthew 1:13;Azor~6~Matthew 1:13;Zadok~6~Matthew 1:14;Akim|Achim~6~Matthew 1:14;Eliud~6~Matthew 1:14;Eleazar~6~Matthew 1:15;Matthan~6~Matthew 1:15;Nahshon~6~Matthew 1:4;Salmon~6~Matthew 1:4;Ram~6~Matthew 1:3;Hezron~6~Matthew 1:3;Zerah~6~Matthew 1:3;Amminadab~6~Matthew 1:4;Abijah~6~Matthew 1:7;Joram~6~Matthew 1:8
B^Matthew^Name a parable in Matthew^Matthew 13 gathers seven parables of the kingdom in a single chapter.^Sower~1~Matthew 13:3–9;Mustard seed~1~Matthew 13:31–32;Lost sheep~1~Matthew 18:12–14;Talents~1~Matthew 25:14–30;Wise and foolish builders~1~Matthew 7:24–27;Wheat and weeds|Wheat and tares~2~Matthew 13:24–30;Ten virgins|Ten bridesmaids|Wise and foolish virgins~2~Matthew 25:1–13;Pearl of great price~2~Matthew 13:45–46;Unforgiving servant|Unmerciful servant~2~Matthew 18:23–35;Sheep and goats~2~Matthew 25:31–46;Hidden treasure~3~Matthew 13:44;Workers in the vineyard~3~Matthew 20:1–16;Wedding banquet~3~Matthew 22:1–14;Yeast|Leaven~3~Matthew 13:33;Two sons~4~Matthew 21:28–32;Wicked tenants~4~Matthew 21:33–41;Net|Dragnet~4~Matthew 13:47–50;Faithful and wise servant~5~Matthew 24:45–51
B^Matthew^Name something from the Sermon on the Mount^The Sermon on the Mount fills Matthew 5–7 and ends with the wise man who built his house on the rock.^Beatitudes~1~Matthew 5:3–12;Lord's Prayer|Our Father~1~Matthew 6:9–13;Salt of the earth~1~Matthew 5:13;Light of the world~1~Matthew 5:14;Turn the other cheek~1~Matthew 5:39;Blessed are the meek~2~Matthew 5:5;Blessed are the poor in spirit~2~Matthew 5:3;Golden Rule|Do to others~2~Matthew 7:12;Love your enemies~2~Matthew 5:44;Treasures in heaven~2~Matthew 6:20;Do not worry|Consider the lilies~2~Matthew 6:25;Seek first the kingdom~2~Matthew 6:33;Narrow gate~2~Matthew 7:13;Wise and foolish builders~2~Matthew 7:24–27;Do not judge|Judge not~2~Matthew 7:1;Ask, seek, knock~2~Matthew 7:7;Speck and plank|Log in your eye~2~Matthew 7:3;Birds of the air~3~Matthew 6:26;Pearls before swine~3~Matthew 7:6;Wolves in sheep's clothing~3~Matthew 7:15;Go the extra mile~3~Matthew 5:41;City on a hill~3~Matthew 5:14
B^Matthew^Name something from Matthew's nativity story^Joseph is guided by four dreams in Matthew 1–2, including the warning to flee to Egypt.^Wise men|Magi~1~Matthew 2:1;Star~1~Matthew 2:2;Gold~1~Matthew 2:11;Frankincense~1~Matthew 2:11;Myrrh~1~Matthew 2:11;Herod~1~Matthew 2:1;Bethlehem~1~Matthew 2:1;Flight to Egypt|Egypt~2~Matthew 2:14;Joseph's dream|Dream~2~Matthew 1:20;Angel~2~Matthew 1:20;Massacre of the innocents~3~Matthew 2:16;Nazareth~3~Matthew 2:23;Jerusalem~3~Matthew 2:1;Rachel weeping in Ramah~5~Matthew 2:18
B^Matthew^Name one of the Twelve as Matthew lists them^Matthew calls himself “Matthew the tax collector” in his own list of the Twelve (Matthew 10:3).^Peter|Simon Peter~1~Matthew 10:2;Andrew~1~Matthew 10:2;James~1~Matthew 10:2;John~1~Matthew 10:2;Matthew|Levi~1~Matthew 10:3;Judas Iscariot|Judas~1~Matthew 10:4;Thomas~2~Matthew 10:3;Philip~2~Matthew 10:3;Bartholomew~3~Matthew 10:3;James son of Alphaeus~4~Matthew 10:3;Thaddaeus~4~Matthew 10:3;Simon the Zealot|Simon the Cananaean~4~Matthew 10:4
B^Mark^Name a miracle in Mark^Four friends lowered a paralysed man through a roof to reach Jesus (Mark 2:4).^Feeding the 5,000|Feeding the 5000|5000|Feeding of the five thousand~1~Mark 6:30–44;Calming the storm~1~Mark 4:35–41;Walking on water~1~Mark 6:48;Healing the paralytic through the roof~2~Mark 2:3–12;Raising Jairus's daughter~2~Mark 5:41–42;Woman with the issue of blood~2~Mark 5:25–34;Healing blind Bartimaeus|Bartimaeus~2~Mark 10:46–52;Legion|Demons sent into pigs~2~Mark 5:1–20;Feeding the 4,000|Feeding the 4000|4000~3~Mark 8:1–9;Healing a leper~3~Mark 1:40–42;Peter's mother-in-law~3~Mark 1:30–31;Man with the withered hand~3~Mark 3:1–5;Cursing the fig tree~3~Mark 11:12–14;Deaf and mute man|Ephphatha~4~Mark 7:32–35;Blind man at Bethsaida~4~Mark 8:22–25;Syrophoenician woman's daughter~4~Mark 7:25–30;Boy with an evil spirit~4~Mark 9:17–27
B^Mark^Name a person in Mark^Only Mark tells of a young man in a linen cloth who fled naked when Jesus was arrested (Mark 14:51–52).^Jesus~1~Mark 1:1;Peter~1~Mark 1:16;John the Baptist~1~Mark 1:4;Herod|Herod Antipas~2~Mark 6:14;Pilate~2~Mark 15:1;Bartimaeus~2~Mark 10:46;Jairus~2~Mark 5:22;Mary Magdalene~2~Mark 15:40;Judas~2~Mark 14:10;James~2~Mark 1:19;John~2~Mark 1:19;Barabbas~3~Mark 15:7;Simon of Cyrene~3~Mark 15:21;Herodias~3~Mark 6:17;Joseph of Arimathea~3~Mark 15:43;Levi~3~Mark 2:14;Andrew~3~Mark 1:16;Salome~4~Mark 15:40;Legion~4~Mark 5:9;Centurion~4~Mark 15:39;Young man who fled naked~5~Mark 14:51–52;Mary the mother of James~5~Mark 16:1;Alexander and Rufus~6~Mark 15:21
B^Mark^Name an Aramaic word Mark keeps in his Gospel^Mark keeps Jesus' own Aramaic words, like “Talitha koum” — “Little girl, I say to you, get up” (Mark 5:41).^Talitha koum|Talitha cumi~1~Mark 5:41;Abba~1~Mark 14:36;Ephphatha~2~Mark 7:34;Eloi, Eloi, lema sabachthani|Eloi~2~Mark 15:34;Golgotha~2~Mark 15:22;Corban~3~Mark 7:11;Boanerges~3~Mark 3:17;Rabboni~3~Mark 10:51;Hosanna~3~Mark 11:9;Amen~4~Mark 3:28
B^Luke^Name a parable found only in Luke^The Good Samaritan and the Prodigal Son both appear only in Luke.^Good Samaritan~1~Luke 10:30–37;Prodigal son|Lost son~1~Luke 15:11–32;Lost coin~2~Luke 15:8–10;Rich fool~2~Luke 12:16–21;Rich man and Lazarus~2~Luke 16:19–31;Pharisee and the tax collector~2~Luke 18:9–14;Persistent widow|Unjust judge~2~Luke 18:1–8;Shrewd manager|Unjust steward~3~Luke 16:1–8;Friend at midnight~3~Luke 11:5–8;Barren fig tree~3~Luke 13:6–9;Two debtors~4~Luke 7:41–43;Tower builder|Counting the cost~4~Luke 14:28–30;Minas~5~Luke 19:11–27;Unworthy servants~5~Luke 17:7–10
B^Luke^Name someone in Luke's birth stories (Luke 1–2)^Zechariah was struck silent until baby John was named (Luke 1:20, 63–64).^Mary~1~Luke 1:27;Joseph~1~Luke 1:27;Elizabeth~1~Luke 1:5;Gabriel~1~Luke 1:26;Shepherds~1~Luke 2:8;Zechariah|Zacharias~2~Luke 1:5;John the Baptist~2~Luke 1:57–63;Simeon~3~Luke 2:25;Anna~3~Luke 2:36;Caesar Augustus|Augustus~3~Luke 2:1;Quirinius~4~Luke 2:2;Herod~4~Luke 1:5;Phanuel~6~Luke 2:36;Abijah~6~Luke 1:5
B^Luke^Name an event or person found only in Luke^Only Luke records the twelve-year-old Jesus staying behind in the temple (Luke 2:41–52).^Zacchaeus~1~Luke 19:1–10;Road to Emmaus|Emmaus~1~Luke 24:13–35;Ten lepers~2~Luke 17:11–19;Martha and Mary's dinner|Martha distracted~2~Luke 10:38–42;Boy Jesus in the temple~2~Luke 2:41–52;Shepherds at the manger~2~Luke 2:15–16;Thief on the cross repents|Repentant thief~2~Luke 23:40–43;Widow of Nain's son~3~Luke 7:11–15;Simeon and Anna~3~Luke 2:25–38;Healing the ear of the high priest's servant~3~Luke 22:51;Jesus sent to Herod~4~Luke 23:7;Sweat like drops of blood~4~Luke 22:44;Woman bent over for 18 years~4~Luke 13:10–13;Man with dropsy~5~Luke 14:1–4
B^John^Name one of Jesus' “I am” sayings in John^John records seven “I am” sayings with pictures, from bread of life to true vine.^Bread of life~1~John 6:35;Light of the world~1~John 8:12;Good shepherd~1~John 10:11;The way, the truth and the life|Way truth life~1~John 14:6;Resurrection and the life~1~John 11:25;True vine|Vine~1~John 15:1;Door|Gate|Door of the sheep~2~John 10:9;Before Abraham was, I am|I am~3~John 8:58
B^John^Name one of the signs in John's Gospel^John calls water into wine at Cana “the first of the signs” (John 2:11).^Water into wine~1~John 2:1–11;Feeding the 5,000~1~John 6:1–14;Raising Lazarus~1~John 11:43–44;Walking on water~2~John 6:19;Healing at the pool of Bethesda~2~John 5:1–9;Healing the man born blind~2~John 9:1–7;Healing the official's son~3~John 4:46–54;Catch of 153 fish~4~John 21:11
B^John^Name a person in John's Gospel^Nicodemus came to Jesus at night, later defended him, and helped bury him with about 75 pounds of spices (John 3; 7:50; 19:39).^Jesus~1~John 1:29;John the Baptist~1~John 1:6;Peter~1~John 1:42;Lazarus~1~John 11:1;Nicodemus~1~John 3:1;Woman at the well|Samaritan woman~1~John 4:7;Mary~2~John 11:2;Martha~2~John 11:1;Thomas~2~John 20:24;Andrew~2~John 1:40;Philip~2~John 1:43;Judas~2~John 13:26;Pilate~2~John 18:29;Mary Magdalene~2~John 20:1;Nathanael~3~John 1:45;Caiaphas~3~John 11:49;Malchus~3~John 18:10;Joseph of Arimathea~3~John 19:38;Beloved disciple~3~John 13:23;Man born blind~3~John 9:1;Annas~4~John 18:13;Barabbas~4~John 18:40;Mary the wife of Clopas~5~John 19:25;Judas (not Iscariot)~6~John 14:22
B^John^Name a place in John's Gospel^The pool of Bethesda had five covered colonnades (John 5:2).^Cana~1~John 2:1;Jerusalem~1~John 2:13;Galilee~1~John 1:43;Bethany~2~John 11:1;Samaria|Sychar~2~John 4:4;Pool of Bethesda~2~John 5:2;Sea of Tiberias|Sea of Galilee~2~John 21:1;Jacob's well~2~John 4:6;Pool of Siloam~3~John 9:7;Capernaum~3~John 2:12;Golgotha~3~John 19:17;Garden|Kidron Valley~4~John 18:1;Bethsaida~4~John 1:44;Solomon's Colonnade~5~John 10:23;Stone Pavement|Gabbatha~5~John 19:13;Aenon near Salim~6~John 3:23;Ephraim~6~John 11:54
B^Acts^Name a person in Acts^Eutychus fell asleep during Paul's long sermon, fell from a third-storey window — and was raised (Acts 20:9–12).^Paul|Saul~1~Acts 13:9;Peter~1~Acts 1:15;Stephen~1~Acts 6:5;Barnabas~1~Acts 4:36;Philip~2~Acts 8:5;Silas~2~Acts 15:22;Timothy~2~Acts 16:1;Cornelius~2~Acts 10:1;Lydia~2~Acts 16:14;Ananias~2~Acts 5:1;Sapphira~2~Acts 5:1;Priscilla~2~Acts 18:2;Aquila~2~Acts 18:2;Ethiopian eunuch~2~Acts 8:27;Apollos~3~Acts 18:24;Eutychus~3~Acts 20:9;Dorcas|Tabitha~3~Acts 9:36;Simon the sorcerer|Simon Magus~3~Acts 8:9;Gamaliel~3~Acts 5:34;Felix~3~Acts 23:24;Festus~3~Acts 24:27;Agrippa~3~Acts 25:13;Rhoda~3~Acts 12:13;John Mark|Mark~3~Acts 12:12;Matthias~3~Acts 1:26;James~3~Acts 15:13;Herod~3~Acts 12:1;Agabus~4~Acts 11:28;Simon the tanner~4~Acts 9:43;Theophilus~4~Acts 1:1;Bernice~5~Acts 25:13;Drusilla~5~Acts 24:24;Dionysius~5~Acts 17:34;Damaris~5~Acts 17:34;Sergius Paulus~5~Acts 13:7;Elymas|Bar-Jesus~5~Acts 13:8;Jason~5~Acts 17:5;Julius~5~Acts 27:1;Publius~5~Acts 28:7;Claudius Lysias|Lysias~5~Acts 23:26;Demetrius~5~Acts 19:24;Sosthenes~5~Acts 18:17;Crispus~5~Acts 18:8;Aeneas~5~Acts 9:33;Tertullus~6~Acts 24:1;Joseph Barsabbas|Justus~6~Acts 1:23
B^Acts^Name an event in Acts^Peter's shadow was thought to heal; people laid the sick in the streets as he passed (Acts 5:15).^Pentecost~1~Acts 2:1–4;Ascension~1~Acts 1:9;Road to Damascus|Conversion of Saul~1~Acts 9:3–6;Stoning of Stephen~1~Acts 7:58–60;Ananias and Sapphira~2~Acts 5:1–11;Peter's vision of the sheet~2~Acts 10:9–16;Peter freed from prison by an angel~2~Acts 12:7–10;Earthquake in the Philippian jail|Paul and Silas in prison~2~Acts 16:26;Shipwreck on Malta|Shipwreck~2~Acts 27:41–44;Lame man healed at the Beautiful Gate~2~Acts 3:2–8;Philip and the Ethiopian~2~Acts 8:26–39;Snake bite on Malta~3~Acts 28:3–5;Council of Jerusalem~3~Acts 15:6–29;Eutychus falls from the window~3~Acts 20:9–12;Paul at the Areopagus|Mars Hill~3~Acts 17:22–31;Dorcas raised~3~Acts 9:40;Cornelius baptised~3~Acts 10:47–48;Matthias chosen~4~Acts 1:26;Riot in Ephesus~4~Acts 19:23–41;Paul appeals to Caesar~4~Acts 25:11
B^Acts^Name a place in Acts^Believers were first called Christians in Antioch (Acts 11:26).^Jerusalem~1~Acts 1:8;Damascus~1~Acts 9:3;Rome~1~Acts 28:16;Antioch~2~Acts 11:26;Ephesus~2~Acts 19:1;Corinth~2~Acts 18:1;Philippi~2~Acts 16:12;Athens~2~Acts 17:16;Malta~2~Acts 28:1;Samaria~2~Acts 8:5;Cyprus~3~Acts 13:4;Thessalonica~3~Acts 17:1;Berea~3~Acts 17:10;Lystra~3~Acts 14:8;Caesarea~3~Acts 10:1;Joppa~3~Acts 9:36;Tarsus~3~Acts 9:11;Derbe~4~Acts 14:20;Iconium~4~Acts 14:1;Troas~4~Acts 16:8;Crete~4~Acts 27:7;Miletus~4~Acts 20:15;Gaza~4~Acts 8:26;Lydda~5~Acts 9:32;Paphos~5~Acts 13:6;Perga~5~Acts 13:13;Pisidian Antioch~5~Acts 13:14;Salamis~5~Acts 13:5;Tyre~5~Acts 21:3;Neapolis~6~Acts 16:11;Puteoli~6~Acts 28:13;Myra~6~Acts 27:5;Fair Havens~6~Acts 27:8;Azotus~6~Acts 8:40;Seleucia~6~Acts 13:4;Attalia~6~Acts 14:25;Cenchreae~6~Acts 18:18;Syracuse~6~Acts 28:12;Rhegium~6~Acts 28:13;Ptolemais~6~Acts 21:7;Amphipolis~6~Acts 17:1;Apollonia~6~Acts 17:1
B^Romans^Name a famous phrase or verse from Romans^“There is now no condemnation for those who are in Christ Jesus” (Romans 8:1).^All have sinned and fall short of the glory of God~1~Romans 3:23;The wages of sin is death~1~Romans 6:23;Nothing can separate us from the love of God~1~Romans 8:38–39;All things work together for good~1~Romans 8:28;No condemnation~1~Romans 8:1;Renewing of your mind|Do not be conformed~1~Romans 12:2;Living sacrifice~2~Romans 12:1;Justified by faith~2~Romans 5:1;Where sin increased, grace abounded~2~Romans 5:20;Not ashamed of the gospel~2~Romans 1:16;If God is for us, who can be against us~2~Romans 8:31;More than conquerors~2~Romans 8:37;Confess with your mouth~2~Romans 10:9;Faith comes by hearing~2~Romans 10:17;Abba, Father~3~Romans 8:15;How beautiful are the feet~3~Romans 10:15;Overcome evil with good~3~Romans 12:21;The Spirit helps us in our weakness~3~Romans 8:26;Love is the fulfilment of the law~4~Romans 13:10
B^Romans^Name someone Paul greets or mentions in Romans 16^Tertius, who actually wrote Romans down for Paul, slips in his own greeting (Romans 16:22).^Phoebe~1~Romans 16:1;Priscilla|Prisca~1~Romans 16:3;Aquila~1~Romans 16:3;Tertius~2~Romans 16:22;Junia~3~Romans 16:7;Andronicus~3~Romans 16:7;Rufus~3~Romans 16:13;Gaius~3~Romans 16:23;Erastus~3~Romans 16:23;Timothy~3~Romans 16:21;Epaenetus~4~Romans 16:5;Mary~4~Romans 16:6;Ampliatus~5~Romans 16:8;Urbanus~5~Romans 16:9;Stachys~5~Romans 16:9;Apelles~5~Romans 16:10;Aristobulus~5~Romans 16:10;Herodion~5~Romans 16:11;Narcissus~5~Romans 16:11;Tryphena~5~Romans 16:12;Tryphosa~5~Romans 16:12;Persis~5~Romans 16:12;Lucius~5~Romans 16:21;Jason~5~Romans 16:21;Asyncritus~6~Romans 16:14;Phlegon~6~Romans 16:14;Hermes~6~Romans 16:14;Patrobas~6~Romans 16:14;Hermas~6~Romans 16:14;Philologus~6~Romans 16:15;Julia~6~Romans 16:15;Nereus~6~Romans 16:15;Olympas~6~Romans 16:15;Sosipater~6~Romans 16:21;Quartus~6~Romans 16:23
B^Romans^Name an Old Testament figure Paul discusses in Romans^Romans 4 uses Abraham to show that righteousness comes by faith.^Abraham~1~Romans 4:3;Adam~1~Romans 5:14;David~2~Romans 4:6;Moses~2~Romans 5:14;Isaac~3~Romans 9:7;Jacob~3~Romans 9:13;Esau~3~Romans 9:13;Sarah~3~Romans 4:19;Elijah~3~Romans 11:2;Pharaoh~3~Romans 9:17;Isaiah~3~Romans 10:16;Hosea~4~Romans 9:25;Rebekah~4~Romans 9:10
B^1 Corinthians^Name a quality of love from 1 Corinthians 13^“And now these three remain: faith, hope and love. But the greatest of these is love” (1 Corinthians 13:13).^Patient~1~1 Corinthians 13:4;Kind~1~1 Corinthians 13:4;Never fails~1~1 Corinthians 13:8;Does not envy|Not jealous~2~1 Corinthians 13:4;Does not boast~2~1 Corinthians 13:4;Not proud~2~1 Corinthians 13:4;Keeps no record of wrongs~2~1 Corinthians 13:5;Not rude~3~1 Corinthians 13:5;Not self-seeking~3~1 Corinthians 13:5;Not easily angered~3~1 Corinthians 13:5;Rejoices with the truth~3~1 Corinthians 13:6;Always protects~3~1 Corinthians 13:7;Always trusts~3~1 Corinthians 13:7;Always hopes~3~1 Corinthians 13:7;Always perseveres~3~1 Corinthians 13:7
B^1 Corinthians^Name a spiritual gift from 1 Corinthians 12^Paul compares the church to one body with many parts, each gift needed (1 Corinthians 12:12–27).^Speaking in tongues|Tongues~1~1 Corinthians 12:10;Prophecy~1~1 Corinthians 12:10;Healing|Gifts of healing~1~1 Corinthians 12:9;Faith~2~1 Corinthians 12:9;Wisdom|Word of wisdom~2~1 Corinthians 12:8;Knowledge|Word of knowledge~2~1 Corinthians 12:8;Miracles~2~1 Corinthians 12:10;Interpretation of tongues~2~1 Corinthians 12:10;Distinguishing between spirits|Discernment~3~1 Corinthians 12:10;Teaching~3~1 Corinthians 12:28;Apostles~4~1 Corinthians 12:28;Helping|Helps~4~1 Corinthians 12:28;Administration|Guidance~4~1 Corinthians 12:28
B^1 Corinthians^Name a person or group mentioned in 1 Corinthians^The Corinthians split into camps: “I follow Paul”, “I follow Apollos”, “I follow Cephas”, “I follow Christ” (1 Corinthians 1:12).^Paul~1~1 Corinthians 1:1;Apollos~1~1 Corinthians 1:12;Christ~1~1 Corinthians 1:12;Cephas|Peter~2~1 Corinthians 1:12;Chloe~3~1 Corinthians 1:11;Stephanas~3~1 Corinthians 1:16;Sosthenes~3~1 Corinthians 1:1;Timothy~3~1 Corinthians 4:17;Crispus~4~1 Corinthians 1:14;Gaius~4~1 Corinthians 1:14;Barnabas~4~1 Corinthians 9:6;Aquila~4~1 Corinthians 16:19;Priscilla|Prisca~4~1 Corinthians 16:19;James~4~1 Corinthians 15:7;Fortunatus~5~1 Corinthians 16:17;Achaicus~5~1 Corinthians 16:17
B^2 Corinthians^Name a famous phrase from 2 Corinthians^“If anyone is in Christ, he is a new creation; the old has gone, the new has come” (2 Corinthians 5:17).^New creation~1~2 Corinthians 5:17;My grace is sufficient for you~1~2 Corinthians 12:9;Thorn in the flesh~1~2 Corinthians 12:7;Treasure in jars of clay|Jars of clay~1~2 Corinthians 4:7;God loves a cheerful giver~1~2 Corinthians 9:7;We walk by faith, not by sight~1~2 Corinthians 5:7;Ministry of reconciliation~2~2 Corinthians 5:18;Ambassadors for Christ~2~2 Corinthians 5:20;Power made perfect in weakness~2~2 Corinthians 12:9;From glory to glory~2~2 Corinthians 3:18;Do not be unequally yoked~2~2 Corinthians 6:14;He became poor so you might become rich~2~2 Corinthians 8:9;He who knew no sin became sin~2~2 Corinthians 5:21;Light and momentary troubles~3~2 Corinthians 4:17;Aroma of Christ|Fragrance of Christ~3~2 Corinthians 2:15;Third heaven~3~2 Corinthians 12:2;Whoever sows sparingly~3~2 Corinthians 9:6;Letter written on our hearts~4~2 Corinthians 3:2–3;Let down in a basket~4~2 Corinthians 11:33;Super-apostles~4~2 Corinthians 11:5
B^2 Corinthians^Name a hardship Paul lists in 2 Corinthians 11^Paul received 39 lashes five times, was beaten with rods three times and shipwrecked three times (2 Corinthians 11:24–25).^Shipwrecked~1~2 Corinthians 11:25;Beaten with rods|Beaten~1~2 Corinthians 11:25;Stoned~1~2 Corinthians 11:25;Lashes|Flogged~1~2 Corinthians 11:24;Imprisoned|Prison~2~2 Corinthians 11:23;Hunger~2~2 Corinthians 11:27;A night and a day in the open sea~3~2 Corinthians 11:25;Thirst~3~2 Corinthians 11:27;Cold~3~2 Corinthians 11:27;Sleepless nights~3~2 Corinthians 11:27;Danger from robbers~3~2 Corinthians 11:26;Danger from rivers~4~2 Corinthians 11:26;Let down in a basket~4~2 Corinthians 11:33;Danger from false brothers~5~2 Corinthians 11:26;Nakedness|Exposure~5~2 Corinthians 11:27;Concern for all the churches~5~2 Corinthians 11:28
B^Galatians^Name a fruit of the Spirit^Galatians 5:22–23 lists nine qualities — and calls them one fruit, not many.^Love~1~Galatians 5:22;Joy~1~Galatians 5:22;Peace~1~Galatians 5:22;Patience|Longsuffering~1~Galatians 5:22;Kindness~2~Galatians 5:22;Goodness~2~Galatians 5:22;Faithfulness~2~Galatians 5:22;Self-control~2~Galatians 5:23;Gentleness~3~Galatians 5:23
B^Galatians^Name a person in Galatians^Paul opposed Peter to his face at Antioch for drawing back from eating with Gentiles (Galatians 2:11–12).^Abraham~1~Galatians 3:6;Peter|Cephas~1~Galatians 2:11;James~2~Galatians 1:19;John~2~Galatians 2:9;Barnabas~2~Galatians 2:1;Titus~3~Galatians 2:1;Hagar~3~Galatians 4:24;Sarah~3~Galatians 4:22;Isaac~3~Galatians 4:28;Ishmael~4~Galatians 4:29
B^Galatians^Name a “work of the flesh” from Galatians 5^Paul sets the works of the flesh (5:19–21) against the fruit of the Spirit (5:22–23).^Sexual immorality~1~Galatians 5:19;Idolatry~1~Galatians 5:20;Drunkenness~1~Galatians 5:21;Impurity~2~Galatians 5:19;Witchcraft|Sorcery~2~Galatians 5:20;Hatred~2~Galatians 5:20;Jealousy~2~Galatians 5:20;Fits of rage|Anger~2~Galatians 5:20;Envy~2~Galatians 5:21;Debauchery|Sensuality~3~Galatians 5:19;Discord|Strife~3~Galatians 5:20;Selfish ambition~3~Galatians 5:20;Orgies|Revelling~3~Galatians 5:21;Dissensions~4~Galatians 5:20;Factions|Heresies~4~Galatians 5:20
B^Ephesians^Name a piece of the armour of God^Of the six pieces in Ephesians 6, only the sword of the Spirit — the word of God — is a weapon for attack.^Belt of truth~1~Ephesians 6:14;Breastplate of righteousness~1~Ephesians 6:14;Feet fitted with the gospel of peace|Shoes of peace~1~Ephesians 6:15;Shield of faith~1~Ephesians 6:16;Helmet of salvation~1~Ephesians 6:17;Sword of the Spirit~1~Ephesians 6:17;Prayer~3~Ephesians 6:18
B^Ephesians^Name a famous phrase from Ephesians^“For it is by grace you have been saved, through faith — and this is not from yourselves, it is the gift of God” (Ephesians 2:8).^Saved by grace through faith~1~Ephesians 2:8;Not by works~2~Ephesians 2:9;We are his workmanship|His masterpiece~2~Ephesians 2:10;Seated with Christ in the heavenly places~2~Ephesians 2:6;Do not let the sun go down on your anger~2~Ephesians 4:26;One Lord, one faith, one baptism~2~Ephesians 4:5;Speaking the truth in love~2~Ephesians 4:15;Exceedingly abundantly above all we ask~2~Ephesians 3:20;Be filled with the Spirit~3~Ephesians 5:18;Psalms, hymns and spiritual songs~3~Ephesians 5:19;Husbands, love your wives~3~Ephesians 5:25;Children, obey your parents~3~Ephesians 6:1;Sealed with the Holy Spirit~3~Ephesians 1:13;Breadth and length and height and depth~3~Ephesians 3:18;Chosen before the foundation of the world~3~Ephesians 1:4;Do not grieve the Holy Spirit~3~Ephesians 4:30;Dividing wall of hostility~4~Ephesians 2:14
B^Ephesians^Name a ministry gift from Ephesians 4:11^These five roles are given “to equip the saints for the work of ministry” (Ephesians 4:12).^Apostles~1~Ephesians 4:11;Prophets~1~Ephesians 4:11;Evangelists~1~Ephesians 4:11;Pastors|Shepherds~1~Ephesians 4:11;Teachers~2~Ephesians 4:11
B^Philippians^Name a famous phrase from Philippians^Written from prison, Philippians is full of joy — Paul uses “joy” and “rejoice” over a dozen times in four chapters.^I can do all things through Christ who strengthens me~1~Philippians 4:13;To live is Christ, to die is gain~1~Philippians 1:21;Rejoice in the Lord always~1~Philippians 4:4;Do not be anxious about anything~1~Philippians 4:6;The peace of God which surpasses all understanding~1~Philippians 4:7;He who began a good work in you~1~Philippians 1:6;Every knee shall bow~2~Philippians 2:10;Press on toward the goal~2~Philippians 3:14;Whatever is true, think about these things~2~Philippians 4:8;I have learned to be content~2~Philippians 4:11;My God will supply all your needs~2~Philippians 4:19;Have the mind of Christ~3~Philippians 2:5;He emptied himself|Made himself nothing~3~Philippians 2:7;Our citizenship is in heaven~3~Philippians 3:20;Shine like stars~3~Philippians 2:15;Work out your salvation~3~Philippians 2:12;Count everything as loss~3~Philippians 3:8
B^Philippians^Name something Philippians 4:8 says to think about^“Whatever is true, whatever is noble, whatever is right, whatever is pure, whatever is lovely…” (Philippians 4:8).^True~1~Philippians 4:8;Pure~1~Philippians 4:8;Noble|Honest|Honourable~2~Philippians 4:8;Right|Just~2~Philippians 4:8;Lovely~2~Philippians 4:8;Admirable|Of good report~3~Philippians 4:8;Excellent|Virtue~3~Philippians 4:8;Praiseworthy~3~Philippians 4:8
B^Philippians^Name a person in Philippians^Paul begged Euodia and Syntyche to “agree with each other in the Lord” (Philippians 4:2).^Paul~1~Philippians 1:1;Timothy~1~Philippians 1:1;Epaphroditus~2~Philippians 2:25;Euodia~3~Philippians 4:2;Syntyche~3~Philippians 4:2;Clement~4~Philippians 4:3;Caesar's household~5~Philippians 4:22
B^Colossians^Name a famous phrase from Colossians^“Christ in you, the hope of glory” (Colossians 1:27).^Christ in you, the hope of glory~1~Colossians 1:27;Set your minds on things above~1~Colossians 3:2;Whatever you do, work at it with all your heart~1~Colossians 3:23;Image of the invisible God~2~Colossians 1:15;Firstborn over all creation~2~Colossians 1:15;In him all things hold together~2~Colossians 1:17;Let the peace of Christ rule in your hearts~2~Colossians 3:15;Clothe yourselves with compassion~2~Colossians 3:12;Let your speech be seasoned with salt~3~Colossians 4:6;Hidden with Christ in God~3~Colossians 3:3;Rooted and built up in him~3~Colossians 2:7;The fullness of deity dwells bodily~3~Colossians 2:9;Bear with each other and forgive~3~Colossians 3:13;Put on love~3~Colossians 3:14;Disarmed the powers~4~Colossians 2:15
B^Colossians^Name a person in Colossians^Paul calls Luke “the beloved physician” (Colossians 4:14).^Paul~1~Colossians 1:1;Timothy~2~Colossians 1:1;Epaphras~2~Colossians 1:7;Onesimus~2~Colossians 4:9;Luke~2~Colossians 4:14;Tychicus~3~Colossians 4:7;Mark~3~Colossians 4:10;Aristarchus~4~Colossians 4:10;Demas~4~Colossians 4:14;Barnabas~4~Colossians 4:10;Archippus~4~Colossians 4:17;Nympha~5~Colossians 4:15;Justus|Jesus called Justus~5~Colossians 4:11
B^1 Thessalonians^Name a famous phrase from 1 Thessalonians^“Pray without ceasing” is two words in Greek — one of the shortest verses in the Bible (1 Thessalonians 5:17).^Pray without ceasing~1~1 Thessalonians 5:17;Rejoice always~1~1 Thessalonians 5:16;Give thanks in all circumstances~1~1 Thessalonians 5:18;Caught up in the clouds|Rapture~1~1 Thessalonians 4:17;Like a thief in the night~1~1 Thessalonians 5:2;Do not quench the Spirit~2~1 Thessalonians 5:19;The dead in Christ will rise first~2~1 Thessalonians 4:16;The trumpet of God~2~1 Thessalonians 4:16;Encourage one another~2~1 Thessalonians 5:11;Lead a quiet life~3~1 Thessalonians 4:11;Helmet of the hope of salvation~3~1 Thessalonians 5:8;Test everything~3~1 Thessalonians 5:21;Faith, love and hope~3~1 Thessalonians 1:3;Do not grieve like those who have no hope~3~1 Thessalonians 4:13;Do not despise prophecies~4~1 Thessalonians 5:20
B^1 Thessalonians^Name a person or place in 1 Thessalonians^Paul, Silas and Timothy had been forced out of Thessalonica after only a short stay (Acts 17:1–10).^Paul~1~1 Thessalonians 1:1;Timothy~1~1 Thessalonians 3:2;Thessalonica~1~1 Thessalonians 1:1;Silas|Silvanus~2~1 Thessalonians 1:1;Macedonia~2~1 Thessalonians 1:7;Achaia~3~1 Thessalonians 1:7;Athens~3~1 Thessalonians 3:1;Philippi~3~1 Thessalonians 2:2;Satan~4~1 Thessalonians 2:18
B^2 Thessalonians^Name a phrase or theme from 2 Thessalonians^Paul signs this letter in his own handwriting as a mark that it's genuine (2 Thessalonians 3:17).^If anyone will not work, neither shall he eat~1~2 Thessalonians 3:10;Man of lawlessness|Man of sin~1~2 Thessalonians 2:3;Day of the Lord~2~2 Thessalonians 2:2;Do not grow weary in doing good~2~2 Thessalonians 3:13;Idle|Disorderly~2~2 Thessalonians 3:6;Hold to the traditions~3~2 Thessalonians 2:15;The restrainer~3~2 Thessalonians 2:6–7;Lord of peace~3~2 Thessalonians 3:16;The Lord is faithful~3~2 Thessalonians 3:3;Paul's own handwriting~3~2 Thessalonians 3:17;Flaming fire~4~2 Thessalonians 1:7
B^1 Timothy^Name a famous phrase from 1 Timothy^Paul calls himself the “chief of sinners” — and says that's why God's mercy to him is an example (1 Timothy 1:15–16).^The love of money is a root of all kinds of evil~1~1 Timothy 6:10;Fight the good fight of faith~1~1 Timothy 6:12;Let no one despise your youth~1~1 Timothy 4:12;Godliness with contentment is great gain~1~1 Timothy 6:6;Chief of sinners~2~1 Timothy 1:15;One mediator between God and men~2~1 Timothy 2:5;A little wine for your stomach~2~1 Timothy 5:23;Bodily exercise profits little~2~1 Timothy 4:8;We brought nothing into the world~3~1 Timothy 6:7;Pillar and foundation of the truth~3~1 Timothy 3:15;The mystery of godliness~3~1 Timothy 3:16;Pray for kings and all in authority~3~1 Timothy 2:1–2;Widows~4~1 Timothy 5:3
B^1 Timothy^Name a qualification for an overseer in 1 Timothy 3^An overseer “must not be a recent convert” — or he may become conceited (1 Timothy 3:6).^Above reproach~1~1 Timothy 3:2;Husband of one wife~1~1 Timothy 3:2;Able to teach~1~1 Timothy 3:2;Temperate|Sober-minded~2~1 Timothy 3:2;Self-controlled~2~1 Timothy 3:2;Hospitable~2~1 Timothy 3:2;Not a drunkard~2~1 Timothy 3:3;Not violent~2~1 Timothy 3:3;Not a lover of money~2~1 Timothy 3:3;Manages his household well~2~1 Timothy 3:4;Respectable~3~1 Timothy 3:2;Gentle~3~1 Timothy 3:3;Not quarrelsome~3~1 Timothy 3:3;Not a recent convert~3~1 Timothy 3:6;Good reputation with outsiders~4~1 Timothy 3:7
B^2 Timothy^Name a famous phrase from 2 Timothy^2 Timothy is probably Paul's last letter: “I have fought the good fight, I have finished the race” (4:7).^All Scripture is God-breathed~1~2 Timothy 3:16;God has not given us a spirit of fear~1~2 Timothy 1:7;I have fought the good fight~1~2 Timothy 4:7;I have finished the race~1~2 Timothy 4:7;I have kept the faith~1~2 Timothy 4:7;Rightly dividing the word|Study to show yourself approved~2~2 Timothy 2:15;Fan into flame the gift~2~2 Timothy 1:6;Sincere faith of Lois and Eunice~2~2 Timothy 1:5;A good soldier of Christ Jesus~2~2 Timothy 2:3;Crown of righteousness~2~2 Timothy 4:8;Be ready in season and out of season~3~2 Timothy 4:2;Itching ears~3~2 Timothy 4:3;A form of godliness~3~2 Timothy 3:5;If we are faithless, he remains faithful~3~2 Timothy 2:13;Bring the cloak and the parchments~4~2 Timothy 4:13
B^2 Timothy^Name a person in 2 Timothy^“Only Luke is with me,” Paul writes from prison (2 Timothy 4:11).^Timothy~1~2 Timothy 1:2;Paul~1~2 Timothy 1:1;Lois~2~2 Timothy 1:5;Eunice~2~2 Timothy 1:5;Luke~2~2 Timothy 4:11;Demas~3~2 Timothy 4:10;Mark~3~2 Timothy 4:11;Alexander the metalworker|Alexander~3~2 Timothy 4:14;Titus~3~2 Timothy 4:10;Onesiphorus~4~2 Timothy 1:16;Hymenaeus~4~2 Timothy 2:17;Tychicus~4~2 Timothy 4:12;Priscilla~4~2 Timothy 4:19;Aquila~4~2 Timothy 4:19;Phygelus~5~2 Timothy 1:15;Hermogenes~5~2 Timothy 1:15;Philetus~5~2 Timothy 2:17;Crescens~5~2 Timothy 4:10;Carpus~5~2 Timothy 4:13;Erastus~5~2 Timothy 4:20;Trophimus~5~2 Timothy 4:20;Jannes~5~2 Timothy 3:8;Jambres~5~2 Timothy 3:8;Eubulus~6~2 Timothy 4:21;Pudens~6~2 Timothy 4:21;Linus~6~2 Timothy 4:21;Claudia~6~2 Timothy 4:21
B^Titus^Name a person or place in Titus^Paul quotes a Cretan poet: “Cretans are always liars” (Titus 1:12).^Titus~1~Titus 1:4;Paul~1~Titus 1:1;Crete~1~Titus 1:5;Cretans~2~Titus 1:12;Nicopolis~3~Titus 3:12;Tychicus~3~Titus 3:12;Apollos~3~Titus 3:13;Artemas~4~Titus 3:12;Zenas~4~Titus 3:13
B^Titus^Name a phrase or theme from Titus^Paul left Titus in Crete to appoint elders in every town (Titus 1:5).^The grace of God has appeared~1~Titus 2:11;Blessed hope~2~Titus 2:13;Washing of regeneration~2~Titus 3:5;Not by works of righteousness~2~Titus 3:5;Sound doctrine~2~Titus 2:1;Appoint elders in every town~2~Titus 1:5;To the pure, all things are pure~3~Titus 1:15;Older women teach the younger~3~Titus 2:3–4;Avoid foolish controversies~3~Titus 3:9;Zealous for good works~3~Titus 2:14
B^Philemon^Name a person in Philemon^Onesimus means “useful”; Paul puns that he was once useless but is now useful (Philemon 1:11).^Philemon~1~Philemon 1:1;Onesimus~1~Philemon 1:10;Paul~1~Philemon 1:1;Timothy~2~Philemon 1:1;Apphia~3~Philemon 1:2;Archippus~3~Philemon 1:2;Epaphras~3~Philemon 1:23;Mark~4~Philemon 1:24;Aristarchus~4~Philemon 1:24;Demas~4~Philemon 1:24;Luke~4~Philemon 1:24
B^Philemon^Name a theme or phrase from Philemon^“If he has wronged you or owes you anything, charge it to me” (Philemon 1:18).^Runaway slave~1~Philemon 1:15–16;Forgiveness~1~Philemon 1:17;Love~2~Philemon 1:9;A beloved brother|Brother in Christ~2~Philemon 1:16;Charge it to my account~2~Philemon 1:18;Prisoner of Christ Jesus~3~Philemon 1:1;Prepare a guest room~3~Philemon 1:22;Useful|Useless~3~Philemon 1:11;Refresh my heart~4~Philemon 1:20;You will do even more than I ask~4~Philemon 1:21
B^Hebrews^Name someone in the Hebrews 11 “hall of faith”^Rahab and Sarah are the two women named in Hebrews 11.^Noah~1~Hebrews 11:7;Abraham~1~Hebrews 11:8;Moses~1~Hebrews 11:24;Abel~1~Hebrews 11:4;Enoch~2~Hebrews 11:5;Sarah~2~Hebrews 11:11;Isaac~2~Hebrews 11:20;Jacob~2~Hebrews 11:21;Joseph~2~Hebrews 11:22;Rahab~2~Hebrews 11:31;David~2~Hebrews 11:32;Gideon~3~Hebrews 11:32;Samson~3~Hebrews 11:32;Samuel~3~Hebrews 11:32;Barak~4~Hebrews 11:32;Jephthah~4~Hebrews 11:32;Moses' parents~5~Hebrews 11:23
B^Hebrews^Name a famous phrase from Hebrews^“Jesus Christ is the same yesterday and today and forever” (Hebrews 13:8).^Faith is the substance of things hoped for~1~Hebrews 11:1;Great cloud of witnesses~1~Hebrews 12:1;Author and finisher of our faith~1~Hebrews 12:2;The word of God is living and active~1~Hebrews 4:12;Throne of grace~1~Hebrews 4:16;Great high priest|High priest~1~Hebrews 4:14;The same yesterday, today and forever~1~Hebrews 13:8;Without faith it is impossible to please God~1~Hebrews 11:6;Melchizedek~2~Hebrews 7:1;I will never leave you nor forsake you~2~Hebrews 13:5;Entertaining angels unawares~2~Hebrews 13:2;Anchor of the soul~2~Hebrews 6:19;Do not forsake meeting together~2~Hebrews 10:25;Run with endurance~2~Hebrews 12:1;Better covenant~3~Hebrews 7:22;Sabbath rest~3~Hebrews 4:9;Without the shedding of blood there is no forgiveness~3~Hebrews 9:22;The Lord disciplines those he loves~3~Hebrews 12:6;Mediator of a new covenant~3~Hebrews 9:15;Mount Zion~4~Hebrews 12:22
B^James^Name a famous phrase from James^James calls the tongue a small fire that can set a whole forest ablaze (James 3:5–6).^Faith without works is dead~1~James 2:26;Count it all joy~1~James 1:2;Quick to listen, slow to speak~1~James 1:19;Doers of the word, not hearers only~1~James 1:22;Taming the tongue|The tongue is a fire~1~James 3:8;Draw near to God and he will draw near to you~1~James 4:8;Resist the devil and he will flee~1~James 4:7;Ask God for wisdom~2~James 1:5;The prayer of a righteous person~2~James 5:16;Every good and perfect gift~2~James 1:17;Life is a mist|Vapour~2~James 4:14;Visit orphans and widows|Pure religion~2~James 1:27;Show no favouritism~3~James 2:1;Anoint the sick with oil~3~James 5:14;Humble yourselves~3~James 4:10;Double-minded~3~James 1:8;Crown of life~3~James 1:12;Elijah prayed~4~James 5:17
B^James^Name a picture James uses to make a point^The doubter is “like a wave of the sea, blown and tossed by the wind” (James 1:6).^Wave of the sea~1~James 1:6;Fire|Spark~1~James 3:6;Mirror~2~James 1:23;Bit in a horse's mouth|Horse's bit~2~James 3:3;Ship's rudder|Rudder~2~James 3:4;Mist|Vapour~2~James 4:14;Wildflower that fades~3~James 1:10;Farmer waiting for rain~3~James 5:7;Body without the spirit~3~James 2:26;Spring of fresh and salt water~4~James 3:11;Fig tree and olives~4~James 3:12;Moth-eaten clothes~4~James 5:2;Corroded gold and silver|Rust~4~James 5:3;Taming wild animals~4~James 3:7
B^James^Name a person James uses as an example^James points to Elijah as “a human being even as we are” whose prayer stopped and started the rain (James 5:17–18).^Abraham~1~James 2:21;Elijah~1~James 5:17;Rahab~2~James 2:25;Job~2~James 5:11;Isaac~4~James 2:21
B^1 Peter^Name a famous phrase from 1 Peter^“Cast all your anxiety on him because he cares for you” (1 Peter 5:7).^Cast all your anxiety on him~1~1 Peter 5:7;Royal priesthood~1~1 Peter 2:9;The devil prowls like a roaring lion~1~1 Peter 5:8;Chosen people|Chosen generation~2~1 Peter 2:9;Living stones~2~1 Peter 2:5;By his wounds you have been healed~2~1 Peter 2:24;Always be ready to give a reason for the hope~2~1 Peter 3:15;Love covers a multitude of sins~2~1 Peter 4:8;Be holy, for I am holy~2~1 Peter 1:16;Fiery trial~3~1 Peter 4:12;Gentle and quiet spirit~3~1 Peter 3:4;Redeemed not with silver or gold~3~1 Peter 1:18–19;Humble yourselves under God's mighty hand~3~1 Peter 5:6;Born again to a living hope~3~1 Peter 1:3;Shepherd and Overseer of your souls~4~1 Peter 2:25;Strangers and exiles|Sojourners~4~1 Peter 2:11
B^1 Peter^Name a person or place in 1 Peter^Peter writes from “Babylon”, widely read as a code name for Rome (1 Peter 5:13).^Peter~1~1 Peter 1:1;Silas|Silvanus~2~1 Peter 5:12;Mark~2~1 Peter 5:13;Noah~2~1 Peter 3:20;Sarah~3~1 Peter 3:6;Abraham~3~1 Peter 3:6;Babylon~3~1 Peter 5:13;Pontus~4~1 Peter 1:1;Galatia~4~1 Peter 1:1;Cappadocia~4~1 Peter 1:1;Asia~4~1 Peter 1:1;Bithynia~4~1 Peter 1:1
B^2 Peter^Name a phrase or person in 2 Peter^“With the Lord a day is like a thousand years, and a thousand years are like a day” (2 Peter 3:8).^A day is like a thousand years~1~2 Peter 3:8;Not wanting anyone to perish~1~2 Peter 3:9;Partakers of the divine nature~2~2 Peter 1:4;Scoffers in the last days~2~2 Peter 3:3;Holy men spoke as they were moved by the Holy Spirit~2~2 Peter 1:21;New heavens and a new earth~2~2 Peter 3:13;The day of the Lord will come like a thief~2~2 Peter 3:10;Grow in grace~2~2 Peter 3:18;A dog returns to its vomit~3~2 Peter 2:22;Paul's letters are hard to understand~3~2 Peter 3:15–16;Noah~3~2 Peter 2:5;Lot~3~2 Peter 2:7;Balaam~3~2 Peter 2:15;The holy mountain|Transfiguration~3~2 Peter 1:18;Morning star~4~2 Peter 1:19
B^2 Peter^Name a quality Peter says to add to your faith^2 Peter 1:5–7 builds a ladder from faith up to love.^Virtue|Goodness~1~2 Peter 1:5;Knowledge~1~2 Peter 1:5;Self-control|Temperance~1~2 Peter 1:6;Love~1~2 Peter 1:7;Perseverance|Patience~2~2 Peter 1:6;Godliness~2~2 Peter 1:6;Brotherly kindness|Mutual affection~2~2 Peter 1:7
B^1 John^Name a famous phrase from 1 John^“God is love” appears twice in 1 John 4 (verses 8 and 16).^God is love~1~1 John 4:8;God is light~1~1 John 1:5;If we confess our sins, he is faithful and just to forgive~1~1 John 1:9;Perfect love casts out fear~1~1 John 4:18;Greater is he that is in you~1~1 John 4:4;We love because he first loved us~1~1 John 4:19;Little children~2~1 John 2:1;Antichrist~2~1 John 2:18;Test the spirits~2~1 John 4:1;Do not love the world~2~1 John 2:15;The lust of the flesh, the lust of the eyes, the pride of life~2~1 John 2:16;Walk in the light~2~1 John 1:7;Children of God~2~1 John 3:1;Advocate with the Father~3~1 John 2:1;Propitiation|Atoning sacrifice~3~1 John 2:2;Whoever has the Son has life~3~1 John 5:12;Keep yourselves from idols~4~1 John 5:21;The water and the blood~4~1 John 5:6
B^2 John^Name a word or phrase from 2 John^2 John is the shortest book in the Bible by verse count: 13 verses.^The elect lady|The chosen lady~1~2 John 1:1;Walking in the truth|Truth~1~2 John 1:4;Love one another~1~2 John 1:5;The elder~2~2 John 1:1;Antichrist|Deceiver~2~2 John 1:7;Do not receive him into your house~3~2 John 1:10;Paper and ink~3~2 John 1:12;Face to face~3~2 John 1:12;Children~3~2 John 1:1
B^3 John^Name a person in 3 John^Diotrephes, “who loves to be first”, refused to welcome John's messengers (3 John 1:9).^Gaius~1~3 John 1:1;Diotrephes~1~3 John 1:9;John|The elder~1~3 John 1:1;Demetrius~2~3 John 1:12
B^3 John^Name a phrase from 3 John^John prays that Gaius may prosper and be in health, just as his soul prospers (3 John 1:2).^Prosper and be in health~1~3 John 1:2;No greater joy than to hear my children walk in truth~1~3 John 1:4;Beloved|Dear friend~2~3 John 1:2;Imitate what is good~2~3 John 1:11;Fellow workers for the truth~3~3 John 1:8;Pen and ink~3~3 John 1:13;The friends greet you~4~3 John 1:14
B^Jude^Name a person or example in Jude^Jude quotes a prophecy of Enoch, “the seventh from Adam” (Jude 1:14).^Michael|Archangel Michael~1~Jude 1:9;Enoch~1~Jude 1:14;Sodom and Gomorrah~1~Jude 1:7;Moses~2~Jude 1:9;Cain~2~Jude 1:11;Balaam~2~Jude 1:11;Korah~2~Jude 1:11;Jude|Judas~2~Jude 1:1;James~2~Jude 1:1;The devil~3~Jude 1:9;Fallen angels~3~Jude 1:6;Adam~4~Jude 1:14
B^Jude^Name a phrase from Jude^Jude ends with one of the Bible's best-loved doxologies: “To him who is able to keep you from stumbling…” (Jude 1:24).^Contend for the faith~1~Jude 1:3;Able to keep you from falling~1~Jude 1:24;Clouds without water~2~Jude 1:12;Build yourselves up in your most holy faith~2~Jude 1:20;Pray in the Holy Spirit~2~Jude 1:20;Present you faultless~2~Jude 1:24;Wandering stars~3~Jude 1:13;Keep yourselves in God's love~3~Jude 1:21;Snatch others from the fire~3~Jude 1:23;Wild waves of the sea~4~Jude 1:13;Autumn trees without fruit~4~Jude 1:12;Hidden reefs at your love feasts~5~Jude 1:12
B^Revelation^Name one of the seven churches in Revelation^Laodicea was rebuked for being lukewarm — “neither hot nor cold” (Revelation 3:16).^Ephesus~1~Revelation 2:1;Philadelphia~1~Revelation 3:7;Laodicea~1~Revelation 3:14;Smyrna~2~Revelation 2:8;Pergamum|Pergamos~2~Revelation 2:12;Thyatira~2~Revelation 2:18;Sardis~3~Revelation 3:1
B^Revelation^Name something from John's visions in Revelation^Each of the New Jerusalem's twelve gates is made of a single pearl (Revelation 21:21).^Four horsemen~1~Revelation 6:1–8;Seven seals~1~Revelation 5:1;Mark of the beast|The beast|666~1~Revelation 13:16–17;New Jerusalem~1~Revelation 21:2;The Lamb~1~Revelation 5:6;Seven trumpets~2~Revelation 8:2;Seven bowls~2~Revelation 16:1;Dragon~2~Revelation 12:3;Lake of fire~2~Revelation 20:14;Book of life~2~Revelation 20:12;Throne~2~Revelation 4:2;Twenty-four elders~2~Revelation 4:4;Four living creatures~2~Revelation 4:6;River of life|Tree of life~2~Revelation 22:1;Armageddon~2~Revelation 16:16;Thousand years|Millennium~2~Revelation 20:4;Rider on a white horse~2~Revelation 19:11;Pearly gates~2~Revelation 21:21;Streets of gold~2~Revelation 21:21;144,000~2~Revelation 7:4;Alpha and Omega~2~Revelation 1:8;Woman clothed with the sun~3~Revelation 12:1;Babylon the great~3~Revelation 17:5;Sea of glass~3~Revelation 4:6;Two witnesses~3~Revelation 11:3;Marriage supper of the Lamb~3~Revelation 19:9;Little scroll~4~Revelation 10:9–10;Locusts from the abyss~4~Revelation 9:3
B^Revelation^Name a precious stone or material in the New Jerusalem^The New Jerusalem's walls rest on twelve foundations, each a different precious stone (Revelation 21:19–20).^Gold~1~Revelation 21:18;Pearl~1~Revelation 21:21;Jasper~1~Revelation 21:19;Sapphire~1~Revelation 21:19;Emerald~1~Revelation 21:19;Topaz~2~Revelation 21:20;Amethyst~2~Revelation 21:20;Chalcedony~3~Revelation 21:19;Sardonyx|Onyx~3~Revelation 21:20;Carnelian|Sardius~3~Revelation 21:20;Chrysolite~4~Revelation 21:20;Beryl~4~Revelation 21:20;Chrysoprase~4~Revelation 21:20;Jacinth~4~Revelation 21:20
B^Revelation^Name a title of Jesus in Revelation^“I am the Alpha and the Omega, the First and the Last, the Beginning and the End” (Revelation 22:13).^The Lamb~1~Revelation 5:6;Alpha and Omega~1~Revelation 22:13;Lion of the tribe of Judah~1~Revelation 5:5;King of kings~1~Revelation 19:16;Lord of lords~1~Revelation 19:16;Faithful and True~2~Revelation 19:11;Word of God~2~Revelation 19:13;Bright and Morning Star|Morning star~2~Revelation 22:16;First and the Last~2~Revelation 1:17;The Beginning and the End~2~Revelation 22:13;Root of David~3~Revelation 5:5;Faithful witness~3~Revelation 1:5;Firstborn from the dead~3~Revelation 1:5;The Amen~3~Revelation 3:14;Son of Man~3~Revelation 1:13;Ruler of the kings of the earth~4~Revelation 1:5;The Holy One~4~Revelation 3:7
B@2026-11-26^Matthew^Name a person in Matthew's account of Jesus' death and resurrection (Matthew 26–28)^In Matthew 27:19 Pilate's wife sent him a warning about Jesus after suffering “many things this day in a dream” (KJV).^Judas Iscariot|Judas~1~Matthew 26:14;Pontius Pilate|Pilate~1~Matthew 27:2;Peter|Simon Peter~1~Matthew 26:69;Barabbas~2~Matthew 27:16;Caiaphas|Caiaphas the high priest~2~Matthew 26:57;Mary Magdalene~2~Matthew 27:56;Simon of Cyrene~2~Matthew 27:32;Joseph of Arimathaea|Joseph of Arimathea~2~Matthew 27:57;Pilate's wife|Wife of Pilate~3~Matthew 27:19;The centurion|Centurion~3~Matthew 27:54;The sons of Zebedee|Sons of Zebedee|James and John~3~Matthew 26:37;The angel of the Lord|Angel~3~Matthew 28:2;Simon the leper~4~Matthew 26:6;The woman with the alabaster box|Woman with the alabaster box|Woman with the alabaster jar~4~Matthew 26:7;The damsel|Damsel|Servant girl|Maid~4~Matthew 26:69;Mary the mother of James and Joses|The other Mary~4~Matthew 27:56;Servant of the high priest|Malchus~5~Matthew 26:51;Mother of Zebedee's children|Mother of James and John|Mother of the sons of Zebedee~5~Matthew 27:56;Elias|Elijah~5~Matthew 27:47;Jeremy the prophet|Jeremy|Jeremiah~6~Matthew 27:9

// ===== WHOLE BIBLE (mixed mode only) =====
B^*^Name a book of the Bible^The Protestant Bible has 66 books: 39 in the Old Testament and 27 in the New.^Genesis~1~Genesis 1:1;Exodus~1~Exodus 1:1;Psalms~1~Psalm 1:1;Proverbs~1~Proverbs 1:1;Matthew~1~Matthew 1:1;Mark~1~Mark 1:1;Luke~1~Luke 1:1;John~1~John 1:1;Acts~1~Acts 1:1;Romans~1~Romans 1:1;Revelation~1~Revelation 1:1;Leviticus~2~Leviticus 1:1;Numbers~2~Numbers 1:1;Deuteronomy~2~Deuteronomy 1:1;Joshua~2~Joshua 1:1;Judges~2~Judges 1:1;Ruth~2~Ruth 1:1;Esther~2~Esther 1:1;Job~2~Job 1:1;Isaiah~2~Isaiah 1:1;Daniel~2~Daniel 1:1;Jonah~2~Jonah 1:1;1 Corinthians|First Corinthians|Corinthians~2~1 Corinthians 1:1;Galatians~2~Galatians 1:1;Ephesians~2~Ephesians 1:1;Hebrews~2~Hebrews 1:1;James~2~James 1:1;1 Samuel|First Samuel|Samuel~3~1 Samuel 1:1;2 Samuel|Second Samuel~3~2 Samuel 1:1;1 Kings|First Kings|Kings~3~1 Kings 1:1;2 Kings|Second Kings~3~2 Kings 1:1;Nehemiah~3~Nehemiah 1:1;Ecclesiastes~3~Ecclesiastes 1:1;Song of Songs|Song of Solomon~3~Song of Songs 1:1;Jeremiah~3~Jeremiah 1:1;Ezekiel~3~Ezekiel 1:1;2 Corinthians|Second Corinthians~3~2 Corinthians 1:1;Philippians~3~Philippians 1:1;Colossians~3~Colossians 1:1;1 Peter|First Peter|Peter~3~1 Peter 1:1;1 John|First John~3~1 John 1:1;1 Chronicles|First Chronicles|Chronicles~4~1 Chronicles 1:1;2 Chronicles|Second Chronicles~4~2 Chronicles 1:1;Ezra~4~Ezra 1:1;Lamentations~4~Lamentations 1:1;Hosea~4~Hosea 1:1;Joel~4~Joel 1:1;Amos~4~Amos 1:1;Micah~4~Micah 1:1;Zechariah~4~Zechariah 1:1;Malachi~4~Malachi 1:1;1 Thessalonians|First Thessalonians|Thessalonians~4~1 Thessalonians 1:1;1 Timothy|First Timothy|Timothy~4~1 Timothy 1:1;2 Timothy|Second Timothy~4~2 Timothy 1:1;Titus~4~Titus 1:1;2 Peter|Second Peter~4~2 Peter 1:1;Jude~4~Jude 1:1;2 Thessalonians|Second Thessalonians~5~2 Thessalonians 1:1;Philemon~5~Philemon 1:1;2 John|Second John~5~2 John 1:1;3 John|Third John~5~3 John 1:1;Obadiah~5~Obadiah 1:1;Nahum~5~Nahum 1:1;Habakkuk~5~Habakkuk 1:1;Zephaniah~5~Zephaniah 1:1;Haggai~5~Haggai 1:1
B^*^Name a book of the Bible with only one chapter^Obadiah is the shortest Old Testament book; 2 John is the shortest in the New Testament by verse count.^Obadiah~1~Obadiah 1:1;Philemon~1~Philemon 1:1;Jude~1~Jude 1:1;2 John|Second John~2~2 John 1:1;3 John|Third John~2~3 John 1:1
B^*^Name one of the twelve tribes of Israel^Levi received no territory of its own; Joseph's share was split between his sons Ephraim and Manasseh.^Judah~1~Genesis 49:8;Benjamin~1~Genesis 49:27;Levi~1~Genesis 49:5;Reuben~2~Genesis 49:3;Simeon~2~Genesis 49:5;Dan~2~Genesis 49:16;Ephraim~2~Genesis 48:20;Manasseh~2~Genesis 48:20;Joseph~2~Genesis 49:22;Gad~3~Genesis 49:19;Asher~3~Genesis 49:20;Naphtali~3~Genesis 49:21;Issachar~3~Genesis 49:14;Zebulun~3~Genesis 49:13
B^*^Name a prophet in the Bible^Huldah, a prophetess, was consulted when the Book of the Law was found in King Josiah's day (2 Kings 22:14).^Isaiah~1~Isaiah 1:1;Jeremiah~1~Jeremiah 1:5;Elijah~1~1 Kings 17:1;Moses~1~Deuteronomy 34:10;Daniel~1~Matthew 24:15;Jonah~1~2 Kings 14:25;Elisha~2~1 Kings 19:16;Ezekiel~2~Ezekiel 1:3;Samuel~2~1 Samuel 3:20;John the Baptist~2~Matthew 11:9;Nathan~3~2 Samuel 7:2;Hosea~3~Hosea 1:1;Amos~3~Amos 7:14;Micah~3~Micah 1:1;Joel~3~Joel 1:1;Habakkuk~3~Habakkuk 1:1;Malachi~3~Malachi 1:1;Zechariah~3~Zechariah 1:1;Deborah~3~Judges 4:4;Haggai~4~Haggai 1:1;Obadiah~4~Obadiah 1:1;Nahum~4~Nahum 1:1;Zephaniah~4~Zephaniah 1:1;Miriam~4~Exodus 15:20;Balaam~4~2 Peter 2:16;Huldah~5~2 Kings 22:14;Anna~5~Luke 2:36;Agabus~5~Acts 21:10;Gad~5~1 Samuel 22:5;Ahijah~5~1 Kings 11:29;Micaiah~5~1 Kings 22:8;Iddo~6~2 Chronicles 13:22;Jehu son of Hanani~6~1 Kings 16:1;Shemaiah~6~1 Kings 12:22;Oded~6~2 Chronicles 28:9;Uriah~6~Jeremiah 26:20
B^*^Name a woman in the Bible^Deborah was both a prophet and a judge of Israel (Judges 4:4).^Mary~1~Luke 1:27;Eve~1~Genesis 3:20;Ruth~1~Ruth 1:4;Esther~1~Esther 2:7;Sarah~1~Genesis 17:15;Rebekah~2~Genesis 24:15;Rachel~2~Genesis 29:6;Leah~2~Genesis 29:16;Miriam~2~Exodus 15:20;Deborah~2~Judges 4:4;Hannah~2~1 Samuel 1:2;Naomi~2~Ruth 1:2;Delilah~2~Judges 16:4;Jezebel~2~1 Kings 16:31;Bathsheba~2~2 Samuel 11:3;Martha~2~Luke 10:38;Mary Magdalene~2~Luke 8:2;Elizabeth~2~Luke 1:5;Rahab~2~Joshua 2:1;Hagar~3~Genesis 16:1;Abigail~3~1 Samuel 25:3;Lydia~3~Acts 16:14;Priscilla~3~Acts 18:2;Dorcas|Tabitha~3~Acts 9:36;Jael~3~Judges 4:17;Tamar~3~Genesis 38:6;Michal~3~1 Samuel 18:20;Dinah~3~Genesis 30:21;Zipporah~3~Exodus 2:21;Vashti~3~Esther 1:9;Orpah~3~Ruth 1:4;Anna~4~Luke 2:36;Phoebe~4~Romans 16:1;Huldah~4~2 Kings 22:14;Jochebed~4~Exodus 6:20;Lois~4~2 Timothy 1:5;Eunice~4~2 Timothy 1:5;Sapphira~4~Acts 5:1;Salome~4~Mark 15:40;Gomer~4~Hosea 1:3;Rhoda~4~Acts 12:13;Athaliah~4~2 Kings 11:1;Joanna~4~Luke 8:3;Herodias~4~Mark 6:17;Shiphrah~5~Exodus 1:15;Puah~5~Exodus 1:15;Mahlah~5~Numbers 27:1;Milcah~5~Genesis 11:29;Keturah~5~Genesis 25:1;Zilpah~5~Genesis 29:24;Bilhah~5~Genesis 29:29;Peninnah~5~1 Samuel 1:2;Abishag~5~1 Kings 1:3;Junia~5~Romans 16:7;Euodia~5~Philippians 4:2;Syntyche~5~Philippians 4:2;Chloe~5~1 Corinthians 1:11;Damaris~5~Acts 17:34;Drusilla~5~Acts 24:24;Bernice~5~Acts 25:13;Susanna~5~Luke 8:3;Rizpah~5~2 Samuel 21:10;Asenath~5~Genesis 41:45;Noa~6~Numbers 27:1;Hoglah~6~Numbers 27:1;Tirzah~6~Numbers 27:1;Claudia~6~2 Timothy 4:21;Apphia~6~Philemon 1:2;Achsah~6~Joshua 15:16;Elisheba~6~Exodus 6:23;Jehosheba~6~2 Kings 11:2;Zeruiah~6~2 Samuel 2:18;Tryphena~6~Romans 16:12;Persis~6~Romans 16:12
B^*^Name a mountain in the Bible^Mount Hermon, at over 2,800 m, is the highest mountain in the region; some think the Transfiguration happened there.^Mount Sinai|Sinai~1~Exodus 19:20;Mount Ararat|Ararat~1~Genesis 8:4;Mount Zion|Zion~1~Psalm 48:2;Mount of Olives~1~Matthew 24:3;Mount Carmel|Carmel~2~1 Kings 18:19;Mount Moriah|Moriah~2~Genesis 22:2;Mount Nebo|Nebo~2~Deuteronomy 34:1;Horeb~2~Exodus 3:1;Calvary|Golgotha~2~Luke 23:33;Mount Hermon|Hermon~3~Psalm 133:3;Mount Tabor|Tabor~3~Judges 4:6;Mount Gerizim|Gerizim~3~Deuteronomy 11:29;Mount Gilboa|Gilboa~4~1 Samuel 31:1;Mount Ebal|Ebal~4~Deuteronomy 11:29;Pisgah~4~Deuteronomy 34:1;Mount Seir|Seir~4~Genesis 36:8;Mount Hor|Hor~5~Numbers 20:22;Lebanon~5~Deuteronomy 3:25;Gilead~5~Genesis 31:21;Bashan~5~Psalm 68:15
B^*^Name a river, sea or body of water in the Bible^Naaman thought the rivers of Damascus — the Abana and the Pharpar — were better than the Jordan (2 Kings 5:12).^Jordan River|Jordan~1~Joshua 3:17;Red Sea~1~Exodus 15:4;Sea of Galilee~1~Matthew 4:18;Nile~1~Exodus 7:20;Euphrates~2~Genesis 2:14;Dead Sea|Salt Sea~2~Genesis 14:3;Tigris|Hiddekel~3~Genesis 2:14;Mediterranean|Great Sea~3~Numbers 34:6;Pool of Siloam~3~John 9:7;Pool of Bethesda~3~John 5:2;Jabbok~4~Genesis 32:22;Kishon~4~Judges 4:7;Gihon~4~Genesis 2:13;Kidron~4~John 18:1;Sea of Tiberias~4~John 21:1;Lake Gennesaret~4~Luke 5:1;Pishon|Pison~5~Genesis 2:11;Kebar~5~Ezekiel 1:1;Abana~5~2 Kings 5:12;Pharpar~5~2 Kings 5:12;Arnon~5~Numbers 21:13
B^*^Name a food mentioned in the Bible^Jacob's sons took pistachios and almonds as a gift to Joseph in Egypt (Genesis 43:11).^Bread~1~Matthew 6:11;Manna~1~Exodus 16:31;Fish~1~John 21:9;Honey~1~Exodus 3:8;Wine~1~John 2:9;Milk~2~Exodus 3:8;Figs~2~Numbers 13:23;Grapes~2~Numbers 13:23;Olives~2~Deuteronomy 8:8;Lentil stew|Lentils~2~Genesis 25:34;Locusts~2~Matthew 3:4;Lamb~2~Exodus 12:3;Pomegranates~3~Numbers 13:23;Barley~3~Deuteronomy 8:8;Wheat~3~Deuteronomy 8:8;Quail~3~Exodus 16:13;Unleavened bread~3~Exodus 12:8;Fatted calf~3~Luke 15:23;Cucumbers~4~Numbers 11:5;Melons~4~Numbers 11:5;Onions~4~Numbers 11:5;Garlic~4~Numbers 11:5;Almonds~4~Genesis 43:11;Raisins~4~1 Samuel 25:18;Cheese~4~1 Samuel 17:18;Curds|Butter~4~Genesis 18:8;Salt~4~Matthew 5:13;Bitter herbs~4~Exodus 12:8;Leeks~5~Numbers 11:5;Dates~5~2 Samuel 6:19;Beans~5~2 Samuel 17:28;Eggs~5~Luke 11:12;Venison|Wild game~5~Genesis 27:3;Pistachios~6~Genesis 43:11;Partridge~6~1 Samuel 26:20
B^*^Name a musical instrument in the Bible^The ram's horn trumpet — the shofar — sounded as Jericho's walls fell (Joshua 6:20).^Harp~1~1 Samuel 16:23;Trumpet~1~Joshua 6:4;Lyre~2~Psalm 33:2;Cymbals~2~Psalm 150:5;Tambourine|Timbrel~2~Exodus 15:20;Ram's horn|Shofar~2~Joshua 6:4;Flute|Pipe~2~Daniel 3:5;Horn~3~Daniel 3:5;Psaltery~4~Psalm 33:2;Bells~4~Exodus 28:33;Strings~4~Psalm 150:4;Sackbut~5~Daniel 3:5;Dulcimer~5~Daniel 3:5;Zither~5~Daniel 3:5
B^*^Name a king of Israel or Judah^Athaliah was the only queen to rule Judah in her own right (2 Kings 11).^Saul~1~1 Samuel 10:1;David~1~2 Samuel 5:3;Solomon~1~1 Kings 1:39;Ahab~1~1 Kings 16:29;Hezekiah~2~2 Kings 18:1;Josiah~2~2 Kings 22:1;Rehoboam~3~1 Kings 14:21;Jeroboam~3~1 Kings 12:20;Jehu~3~2 Kings 9:13;Jehoshaphat~3~1 Kings 22:41;Uzziah~3~2 Chronicles 26:1;Asa~3~1 Kings 15:9;Manasseh~3~2 Kings 21:1;Zedekiah~3~2 Kings 24:17;Joash~3~2 Kings 11:21;Omri~4~1 Kings 16:23;Ahaz~4~2 Kings 16:1;Jotham~4~2 Kings 15:32;Amaziah~4~2 Kings 14:1;Jehoiakim~4~2 Kings 23:36;Jehoiachin~4~2 Kings 24:8;Ahaziah~4~2 Kings 8:25;Jehoram~4~2 Kings 8:16;Abijah~4~2 Chronicles 13:1;Baasha~4~1 Kings 15:33;Hoshea~4~2 Kings 17:1;Zimri~4~1 Kings 16:15;Ish-bosheth~4~2 Samuel 2:10;Athaliah~4~2 Kings 11:3;Pekah~5~2 Kings 15:27;Menahem~5~2 Kings 15:17;Zechariah~5~2 Kings 15:8;Shallum~5~2 Kings 15:13;Jehoahaz~5~2 Kings 23:31;Nadab~5~1 Kings 15:25;Elah~5~1 Kings 16:8;Amon~5~2 Kings 21:19;Pekahiah~6~2 Kings 15:23
B^*^Name a foreign ruler in the Bible^Candace, queen of the Ethiopians, is named in Acts 8:27 — her treasurer met Philip.^Pharaoh~1~Exodus 5:2;Nebuchadnezzar~1~Daniel 1:1;Herod~1~Matthew 2:1;Pontius Pilate|Pilate~1~Matthew 27:2;Cyrus~2~Ezra 1:1;Caesar Augustus|Augustus~2~Luke 2:1;Darius~2~Daniel 6:1;Xerxes|Ahasuerus~2~Esther 1:1;Queen of Sheba~2~1 Kings 10:1;Belshazzar~3~Daniel 5:1;Artaxerxes~3~Nehemiah 2:1;Hiram~3~1 Kings 5:1;Sennacherib~3~2 Kings 18:13;Agrippa~3~Acts 25:13;Felix~4~Acts 23:24;Festus~4~Acts 24:27;Tiberius~4~Luke 3:1;Claudius~4~Acts 11:28;Balak~4~Numbers 22:2;Og~4~Numbers 21:33;Eglon~4~Judges 3:12;Abimelech~4~Genesis 20:2;Ben-Hadad~4~1 Kings 20:1;Sisera~4~Judges 4:2;Agag~4~1 Samuel 15:8;Melchizedek~4~Genesis 14:18;Sihon~5~Numbers 21:21;Hazael~5~2 Kings 8:15;Tiglath-Pileser~5~2 Kings 15:29;Shalmaneser~5~2 Kings 17:3;Necho~5~2 Kings 23:29;Candace~5~Acts 8:27;Jabin~5~Judges 4:2;Achish~5~1 Samuel 21:10
B^*^Name a pair of siblings in the Bible^Moses, Aaron and Miriam were all children of Amram and Jochebed (Numbers 26:59).^Cain and Abel~1~Genesis 4:2;Jacob and Esau~1~Genesis 25:25–26;Moses and Aaron~1~Exodus 4:14;Mary and Martha~1~Luke 10:38–39;Peter and Andrew~1~Matthew 4:18;James and John~1~Matthew 4:21;Moses and Miriam~2~Numbers 26:59;Rachel and Leah~2~Genesis 29:16;Joseph and Benjamin~2~Genesis 43:29;Martha and Lazarus|Mary and Lazarus~2~John 11:1;Isaac and Ishmael~3~Genesis 25:9;Ephraim and Manasseh~3~Genesis 41:51–52;Aaron and Miriam~3~Exodus 15:20;Amnon and Tamar~4~2 Samuel 13:1;Absalom and Tamar~4~2 Samuel 13:1;Hophni and Phinehas~4~1 Samuel 1:3;Perez and Zerah~5~Genesis 38:29–30;Er and Onan~6~Genesis 38:3–4
B^*^Name a tree or plant in the Bible^Noah's ark was made of “gopher wood” — no one knows for sure what tree that was (Genesis 6:14).^Fig~1~Genesis 3:7;Olive~1~Genesis 8:11;Vine|Grapevine~1~John 15:1;Tree of life~1~Genesis 2:9;Tree of the knowledge of good and evil~1~Genesis 2:17;Cedar~2~1 Kings 5:6;Mustard seed~2~Matthew 13:31;Pomegranate~2~Exodus 28:33;Lily~2~Matthew 6:28;Palm~2~John 12:13;Almond~3~Numbers 17:8;Acacia|Shittim~3~Exodus 25:10;Hyssop~3~Exodus 12:22;Sycamore~3~Luke 19:4;Oak~3~Genesis 35:8;Thorns~3~Genesis 3:18;Wheat~3~John 12:24;Barley~3~Ruth 1:22;Rose of Sharon~3~Song of Songs 2:1;Willow~4~Psalm 137:2;Myrtle~4~Isaiah 55:13;Broom tree|Juniper~4~1 Kings 19:4;Apple~4~Song of Songs 2:3;Flax~4~Joshua 2:6;Reed~4~Matthew 11:7;Gopher wood~4~Genesis 6:14;Tamarisk~5~Genesis 21:33;Cypress~5~Isaiah 41:19;Terebinth~5~Isaiah 6:13;Mandrake~5~Genesis 30:14;Bramble~5~Judges 9:14;Gourd~5~Jonah 4:6
B^*^Name an angel or spiritual being named in the Bible^Gabriel and Michael are the only two good angels named in the Protestant Bible.^Gabriel~1~Luke 1:19;Michael~1~Jude 1:9;Satan|The devil~1~Job 1:6;Lucifer~2~Isaiah 14:12;Seraphim~2~Isaiah 6:2;Cherubim~2~Genesis 3:24;Beelzebub|Beelzebul~3~Matthew 12:24;Legion~4~Mark 5:9;Abaddon|Apollyon~4~Revelation 9:11

// ===== BIBLE CHARACTERS =====
C^Jesus^Name a miracle of Jesus^John says that if everything Jesus did were written down, the world could not hold the books (John 21:25).^Water into wine~1~John 2:1–11~His first sign, at a wedding in Cana;Feeding the 5,000|Feeding the 5000|5000|Feeding the five thousand|Loaves and fishes~1~John 6:1–14~The only miracle besides the resurrection told in all four Gospels;Walking on water~1~Matthew 14:25~Peter briefly walked on the water to him too;Raising Lazarus~1~John 11:43–44~Lazarus had been dead four days;Calming the storm~1~Mark 4:39~He had been asleep on a cushion in the stern;Healing the blind|Blind man~1~John 9:1–7~He sent the man born blind to wash in the Pool of Siloam;Healing ten lepers|Ten lepers~2~Luke 17:11–19~Only one came back to thank him, and he was a Samaritan;Healing the paralytic~2~Mark 2:3–12~Four friends lowered the man through the roof;Raising Jairus's daughter~2~Mark 5:41–42~He said “Talitha koum” — little girl, get up;Woman with the issue of blood~2~Mark 5:25–34~She had been bleeding for twelve years;Legion|Demons sent into pigs~2~Mark 5:1–20~The demons were sent into a herd of about 2,000 pigs;Healing the centurion's servant~2~Matthew 8:5–13~Jesus said he had not found such great faith in Israel;Miraculous catch of fish|Catch of fish~2~Luke 5:4–7~The nets began to break and Peter fell at his knees;Healing blind Bartimaeus~2~Mark 10:46–52~Bartimaeus threw off his cloak and came to Jesus;The Resurrection~2~Matthew 28:5–6~He rose on the third day, just as he said;Feeding the 4,000|Feeding the 4000|4000~3~Mark 8:1–9~Seven loaves fed the crowd, with seven basketfuls left;Coin in the fish's mouth~3~Matthew 17:27~The coin paid the temple tax for Jesus and Peter;Raising the widow's son at Nain~3~Luke 7:11–15~Jesus touched the coffin and stopped the funeral;Healing Malchus's ear~3~Luke 22:50–51~His last healing before the cross;Cursing the fig tree~3~Mark 11:12–14~By the next morning it had withered from the roots;Healing Peter's mother-in-law~3~Mark 1:30–31~The fever left her and she began to serve them;Healing the man at the pool of Bethesda~3~John 5:1–9~The man had been ill for 38 years;Healing the man with the withered hand~3~Mark 3:1–5~He healed it on the Sabbath, in a synagogue;Healing the deaf and mute man~4~Mark 7:32–35~Jesus said “Ephphatha” — be opened;Healing the official's son~4~John 4:46–54~He healed the boy at a distance, with a word spoken in Cana;Healing the woman bent over~4~Luke 13:10–13~She had been bent over for eighteen years;Syrophoenician woman's daughter~4~Mark 7:25–30~“Even the dogs eat the children's crumbs,” she answered;Healing the boy with seizures~4~Mark 9:17–27~His father cried, “I believe, help my unbelief”;Healing the man with dropsy~5~Luke 14:1–4~He healed the man on the Sabbath at a Pharisee's house
C^Jesus^Name a parable of Jesus^Mark says Jesus “did not say anything to them without using a parable” (Mark 4:34).^Prodigal son~1~Luke 15:11–32~The father ran to meet his returning son;Good Samaritan~1~Luke 10:30–37~Told to answer the question “Who is my neighbour?”;Sower~1~Matthew 13:3–9~Seed fell on the path, rocks, thorns and good soil;Lost sheep~1~Luke 15:4–7~The shepherd leaves the ninety-nine to find the one;Talents~1~Matthew 25:14–30~“Well done, good and faithful servant”;Mustard seed~1~Matthew 13:31–32~The smallest seed grows into a tree where birds nest;Wise and foolish builders~2~Matthew 7:24–27~It closes the Sermon on the Mount;Ten virgins~2~Matthew 25:1–13~Five brought extra oil and five did not;Lost coin~2~Luke 15:8–10~She lit a lamp and swept the house until she found it;Pearl of great price~2~Matthew 13:45–46~The merchant sold everything he had to buy it;Hidden treasure~3~Matthew 13:44~The man sold all he had to buy the field;Rich fool~3~Luke 12:16–21~“This very night your life will be demanded from you”;Wheat and tares|Wheat and weeds~3~Matthew 13:24–30~Both grow together until the harvest;Unforgiving servant~3~Matthew 18:23–35~Told after Peter asked how many times to forgive;Workers in the vineyard~3~Matthew 20:1–16~The last workers hired were paid the same as the first;Persistent widow~3~Luke 18:1–8~Told so that people would always pray and not give up;Pharisee and the tax collector~3~Luke 18:9–14~“God, have mercy on me, a sinner”;Rich man and Lazarus~3~Luke 16:19–31~Lazarus is the only parable character Jesus names;Sheep and goats~3~Matthew 25:31–46~“Whatever you did for the least of these, you did for me”;Wedding feast|Great banquet~3~Matthew 22:1–14~One guest came without wedding clothes;Yeast|Leaven~3~Matthew 13:33~A little yeast works through the whole batch of dough;Wicked tenants~4~Mark 12:1–12~The tenants killed the owner's son;Barren fig tree~4~Luke 13:6–9~The gardener asked for one more year;Two sons~4~Matthew 21:28–32~One son said no but went, the other said yes but didn't;Shrewd manager~4~Luke 16:1–8~It ends with “You cannot serve both God and money”;Friend at midnight~4~Luke 11:5–8~The friend's shameless persistence gets him the bread;Lamp under a basket|Lamp~4~Matthew 5:15~A lamp belongs on a stand, giving light to everyone;New wine in old wineskins~4~Mark 2:22~New wine bursts old wineskins;Growing seed~5~Mark 4:26–29~Found only in Mark — the seed grows while the farmer sleeps;Net~5~Matthew 13:47–50~The good fish are kept and the bad thrown away;Two debtors~5~Luke 7:41–43~Told at the house of Simon the Pharisee;Minas~5~Luke 19:11–27~Each servant was given one mina to put to work;Faithful servant~5~Matthew 24:45–51~The master returns when least expected;Tower builder~5~Luke 14:28–30~Count the cost before you build;Unworthy servants~6~Luke 17:7–10~“We have only done our duty”;Strong man~6~Mark 3:27~First tie up the strong man, then plunder his house
C^Jesus^Name a title or name of Jesus^“Immanuel” means “God with us” (Matthew 1:23).^Jesus|Yeshua~1~Matthew 1:21~The name means “the LORD saves”;Christ|Messiah~1~Matthew 16:16~Greek for Messiah, “the anointed one”;Lamb of God~1~John 1:29~John the Baptist's words when he saw Jesus coming;Son of God~1~Mark 1:1~The opening line of Mark's Gospel;Son of Man~1~Mark 10:45~Jesus' favourite way of speaking about himself;Lord~1~Philippians 2:11~Every tongue will confess it;Saviour|Savior~1~Luke 2:11~Announced by the angel to the shepherds;King of kings~1~Revelation 19:16~Written on his robe and on his thigh;Prince of Peace~1~Isaiah 9:6~One of four names in Isaiah's prophecy;Immanuel|Emmanuel~1~Matthew 1:23~It means “God with us”;Good Shepherd~2~John 10:11~He lays down his life for the sheep;Alpha and Omega~2~Revelation 22:13~The first and last letters of the Greek alphabet;Light of the world~2~John 8:12~Said at the Feast of Tabernacles;Bread of life~2~John 6:35~Said the day after feeding the 5,000;The Word|Logos~2~John 1:1~“In the beginning was the Word”;Lion of Judah~2~Revelation 5:5~The one worthy to open the scroll;Rabbi|Teacher~2~John 1:38~It means “teacher”;Son of David~2~Matthew 9:27~The cry of two blind men;Wonderful Counsellor~2~Isaiah 9:6~From Isaiah's “unto us a child is born”;Mighty God~2~Isaiah 9:6~From Isaiah's “unto us a child is born”;Lord of lords~2~Revelation 19:16~Paired with King of kings;I Am~2~John 8:58~“Before Abraham was, I am” echoes God's name to Moses;Redeemer~2~Job 19:25~“I know that my Redeemer lives”;Bright Morning Star~3~Revelation 22:16~Jesus' own words near the end of the Bible;Cornerstone~3~Ephesians 2:20~The stone the whole building rests on;Everlasting Father~3~Isaiah 9:6~From Isaiah's “unto us a child is born”;High Priest~3~Hebrews 4:14~He has gone through the heavens;Bridegroom~3~Mark 2:19~Why his disciples did not fast while he was with them;Jesus of Nazareth|Nazarene~3~John 19:19~Written on the sign above the cross;True Vine~3~John 15:1~“I am the vine, you are the branches”;Resurrection and the life~3~John 11:25~Said to Martha before raising Lazarus;Friend of sinners~3~Matthew 11:19~Meant as an insult by his critics;Mediator~4~1 Timothy 2:5~One mediator between God and mankind;Advocate~4~1 John 2:1~He speaks to the Father in our defence;Last Adam~4~1 Corinthians 15:45~Paul contrasts him with the first Adam;Author and finisher of our faith~4~Hebrews 12:2~We fix our eyes on him;Rabboni~4~John 20:16~Mary Magdalene's word at the empty tomb;Root of Jesse~4~Isaiah 11:10~Jesse was David's father;Servant~4~Matthew 12:18~Matthew quotes Isaiah's servant song about him;Holy One of God~4~Mark 1:24~Said by an unclean spirit in Capernaum;Dayspring~5~Luke 1:78~Zechariah's song calls him the rising sun from on high;The Amen~5~Revelation 3:14~His title in the letter to Laodicea;Author of life~5~Acts 3:15~Peter's words after healing the lame man;Firstborn of all creation~5~Colossians 1:15~He is the image of the invisible God;Branch~5~Zechariah 6:12~“The man whose name is the Branch”
C^Jesus^Name a place Jesus went during his life^Jesus grew up in Nazareth but made Capernaum his base in Galilee (Matthew 4:13).^Bethlehem~1~Luke 2:4–7~He was born in David's town;Nazareth~1~Luke 2:51~He grew up here and was called a Nazarene;Jerusalem~1~Luke 19:41~He wept over the city;Galilee~1~Mark 1:14~He began preaching here;Sea of Galilee~1~Matthew 4:18~He called his first fishermen on its shore;Gethsemane|Garden of Gethsemane~1~Matthew 26:36~He prayed here the night before the cross;Golgotha|Calvary~1~John 19:17~The name means “place of the skull”;Capernaum~2~Matthew 4:13~His base during the Galilean ministry;Cana~2~John 2:1~Site of his first sign;Bethany~2~John 12:1~Home of Mary, Martha and Lazarus;Egypt~2~Matthew 2:14~His family fled here when he was a baby;Jordan River~2~Matthew 3:13~He was baptised here by John;Samaria~2~John 4:4~He met the woman at the well here;Mount of Olives~2~Luke 22:39~He often went there to pray;Jericho~2~Luke 19:1~He met Zacchaeus here;Temple~2~Luke 2:46~He was found there at age twelve;Wilderness|Desert~2~Matthew 4:1~He fasted forty days and was tempted;Bethsaida~3~Mark 8:22~He healed a blind man here in two stages;Caesarea Philippi~3~Matthew 16:13~Peter confessed him as the Christ here;Emmaus~3~Luke 24:13~He was recognised in the breaking of bread;Tyre~4~Mark 7:24~He met the Syrophoenician woman in this region;Sidon~4~Mark 7:31~He passed through on his way back to Galilee;Decapolis~4~Mark 7:31~The “Ten Cities” region east of the Jordan;Gadara|Gerasa~4~Matthew 8:28~He freed two demon-possessed men here;Nain~4~Luke 7:11~He raised a widow's only son;Sychar~4~John 4:5~The town near Jacob's well;Bethphage~4~Matthew 21:1~He sent for the donkey from here;Chorazin~5~Matthew 11:21~He warned it for not repenting after his miracles
C^Jesus^Name one of Jesus' sayings from the cross^“It is finished” is a single word in Greek: tetelestai (John 19:30).^It is finished~1~John 19:30~One word in Greek, tetelestai;Father, forgive them~1~Luke 23:34~Prayed for the people crucifying him;My God, my God, why have you forsaken me~1~Matthew 27:46~He was quoting Psalm 22:1;Today you will be with me in paradise~1~Luke 23:43~Said to the repentant thief;Father, into your hands I commit my spirit~2~Luke 23:46~His last words, quoting Psalm 31:5;I thirst|I am thirsty~2~John 19:28~Said to fulfil Scripture;Woman, behold your son~2~John 19:26~He entrusted his mother to the beloved disciple
C^Jesus^Name someone Jesus met or spoke with in the Gospels^Nicodemus came at night; the woman at the well came at noon (John 3:2; 4:6).^Peter~1~Matthew 4:18–19~Called from his nets to fish for people;Nicodemus~1~John 3:1–3~Came at night and heard “you must be born again”;Zacchaeus~1~Luke 19:5~Called down from a sycamore tree;Woman at the well|Samaritan woman~1~John 4:7~The longest one-on-one conversation recorded with Jesus;Mary Magdalene~1~John 20:16~The first to see him risen;Pilate~1~John 18:38~He asked “What is truth?”;Lazarus~1~John 11:43~Called out of the tomb after four days;John the Baptist~1~Matthew 3:13–15~He baptised Jesus in the Jordan;Judas~1~Matthew 26:49~He betrayed Jesus with a kiss;Bartimaeus~2~Mark 10:51~“Rabbi, I want to see”;Martha~2~Luke 10:41~“You are worried and upset about many things”;Mary of Bethany~2~Luke 10:39~She sat at his feet listening;Herod~2~Luke 23:8–9~He hoped for a miracle, but Jesus stayed silent;Caiaphas~2~Matthew 26:63~The high priest who put Jesus under oath at his trial;Thomas~2~John 20:27–28~“My Lord and my God!”;Jairus~2~Mark 5:22~A synagogue leader whose daughter Jesus raised;Rich young ruler~2~Mark 10:21~Jesus looked at him and loved him;Centurion~2~Matthew 8:8~“Just say the word, and my servant will be healed”;Thief on the cross~2~Luke 23:42–43~Promised paradise that same day;Satan|The devil~2~Matthew 4:1–11~Tempted Jesus three times in the wilderness;Woman caught in adultery~2~John 8:10–11~“Neither do I condemn you”;Syrophoenician woman~3~Mark 7:28~Her answer about the crumbs won his praise;Legion~3~Mark 5:9~“My name is Legion, for we are many”;Nathanael~3~John 1:47~“An Israelite in whom there is no deceit”;Simon of Cyrene~3~Mark 15:21~Forced to carry the cross;Moses~3~Matthew 17:3~Appeared with Jesus at the transfiguration;Elijah~3~Matthew 17:3~Appeared with Jesus at the transfiguration;Simeon~3~Luke 2:28~Took the baby Jesus in his arms in the temple;Simon the Pharisee~4~Luke 7:40~Hosted the meal where a woman anointed Jesus' feet;Malchus~4~John 18:10~Peter cut off his ear;Annas~4~John 18:13~Questioned Jesus first, before Caiaphas;Cleopas~4~Luke 24:18~One of the two on the road to Emmaus;Anna~4~Luke 2:36–38~An elderly prophetess who spoke about the child
C^Abraham^Name a person in Abraham's story^Abraham was first called Abram, “exalted father”; God renamed him Abraham, “father of many” (Genesis 17:5).^Sarah|Sarai~1~Genesis 17:15~His wife and half-sister, renamed from Sarai;Isaac~1~Genesis 21:5~Born when Abraham was 100;Lot~1~Genesis 12:5~His nephew, who travelled with him from Haran;Hagar~1~Genesis 16:3~Sarah's Egyptian servant, mother of Ishmael;Ishmael~1~Genesis 16:15–16~His firstborn son, born when Abraham was 86;Melchizedek~2~Genesis 14:18–20~King of Salem, who blessed Abraham and received a tenth;Terah~3~Genesis 11:31~His father, who set out with him from Ur;Abimelech~3~Genesis 20:2~King of Gerar, told that Sarah was Abraham's sister;Eliezer~3~Genesis 15:2~His servant from Damascus, once his heir;Pharaoh~3~Genesis 12:15~Took Sarai into his palace during a famine;Rebekah~3~Genesis 24:15~The wife his servant found for Isaac;Keturah~4~Genesis 25:1~The wife he married after Sarah died;Nahor~4~Genesis 11:26~His brother;Haran~5~Genesis 11:27–28~His brother, Lot's father, who died in Ur;Milcah~5~Genesis 11:29~Wife of his brother Nahor;Ephron~5~Genesis 23:10–16~The Hittite who sold him the cave of Machpelah;Laban~5~Genesis 24:29~Rebekah's brother, who welcomed Abraham's servant;Bethuel~5~Genesis 24:50~Rebekah's father and Abraham's nephew
C^Abraham^Name an event from Abraham's life^Abraham was 100 and Sarah 90 when Isaac was born (Genesis 17:17; 21:5).^Leaving home for Canaan|Call of Abram~1~Genesis 12:1–5~He left Haran at age 75;Sacrifice of Isaac|Binding of Isaac~1~Genesis 22:1–14~God provided a ram on Mount Moriah;Birth of Isaac~1~Genesis 21:1–5~Abraham was 100 years old;Ram caught in the thicket~2~Genesis 22:13~Offered in place of Isaac;Three visitors at Mamre~2~Genesis 18:1–10~He ran to welcome them and served a meal;Counting the stars~2~Genesis 15:5–6~He believed God, and it was credited to him as righteousness;Name changed to Abraham~2~Genesis 17:5~Abram, “exalted father”, became Abraham, “father of many”;Sarah laughs~2~Genesis 18:12~Isaac's name means “he laughs”;Pleading for Sodom~2~Genesis 18:23–32~He asked God to spare the city for as few as ten righteous people;Rescuing Lot~3~Genesis 14:14–16~He led 318 trained men to the rescue;Meeting Melchizedek|Tithe to Melchizedek~3~Genesis 14:18–20~He gave him a tenth of everything;Hagar and Ishmael sent away~3~Genesis 21:14–17~God heard the boy crying in the desert;Circumcision~3~Genesis 17:24~He was circumcised at 99;Calling Sarah his sister~3~Genesis 12:13~He did it twice, in Egypt and later in Gerar;Covenant between the pieces~4~Genesis 15:9–17~A smoking firepot and blazing torch passed between the halves;Buying the cave of Machpelah~4~Genesis 23:16~He paid 400 shekels of silver;Finding a wife for Isaac~4~Genesis 24:2–4~He sent his servant back to his own relatives
C^Abraham^Name a promise God made to Abraham^“Abram believed the Lord, and he credited it to him as righteousness” (Genesis 15:6).^Descendants like the stars|Many descendants~1~Genesis 15:5~“Look up at the sky and count the stars”;The land of Canaan|Promised land~1~Genesis 12:7~Promised at Shechem, his first stop in Canaan;A son|Isaac~1~Genesis 18:10~Sarah would have a son within a year;A great nation~1~Genesis 12:2~Part of God's first call to him;Descendants like the sand~2~Genesis 22:17~Repeated after he offered Isaac;Bless those who bless you~2~Genesis 12:3~Part of God's first call to him;All nations blessed through you~2~Genesis 12:3~Paul calls this the gospel announced in advance (Galatians 3:8);A great name~2~Genesis 12:2~Part of God's first call to him;Father of many nations~2~Genesis 17:5~The meaning of his new name;Everlasting covenant~3~Genesis 17:7~A covenant for his descendants after him;Kings will come from you~4~Genesis 17:6~Given alongside his new name;I will be your God~4~Genesis 17:8~Spoken when he was 99
C^Abraham^Name a place on Abraham's journey^Abraham set out from Ur of the Chaldeans, stopped at Haran, then went to Canaan “not knowing where he was going” (Hebrews 11:8).^Ur~1~Genesis 11:31~His home city in Mesopotamia;Haran~1~Genesis 12:4~He left here at 75;Canaan~1~Genesis 12:5~The land God promised to his descendants;Mount Moriah|Moriah~1~Genesis 22:2~Where he was asked to offer Isaac;Egypt~2~Genesis 12:10~He went there during a famine;Hebron~2~Genesis 13:18~He settled by the great trees of Mamre near here;Sodom~2~Genesis 18:22~He pleaded with God over it;Bethel~3~Genesis 12:8~He built an altar between Bethel and Ai;Mamre~3~Genesis 18:1~Where three visitors came to his tent;Shechem~3~Genesis 12:6~His first stop in Canaan;Beersheba~3~Genesis 21:33~He planted a tamarisk tree there;Gerar~4~Genesis 20:1~Where King Abimelech took Sarah;Negev~4~Genesis 12:9~He travelled on through it;Ai~4~Genesis 12:8~He camped between Bethel and Ai;Salem~4~Genesis 14:18~Melchizedek's city;Machpelah~4~Genesis 25:9~He was buried there beside Sarah;Dan~5~Genesis 14:14~He chased Lot's captors this far north;Damascus~5~Genesis 15:2~Home of his servant Eliezer;Hobah~6~Genesis 14:15~North of Damascus, where he routed the kings
C^Joseph^Name a person in Joseph's story^Joseph was 17 when sold by his brothers and 30 when he entered Pharaoh's service (Genesis 37:2; 41:46).^Jacob~1~Genesis 37:3~Loved Joseph more than his other sons;Benjamin~1~Genesis 43:29~Joseph's only full brother;Potiphar~1~Genesis 39:1~Captain of the guard who bought Joseph;Pharaoh~1~Genesis 41:41~Put Joseph in charge of all Egypt;Reuben~2~Genesis 37:21–22~Tried to rescue Joseph from the other brothers;Judah~2~Genesis 37:26–27~Suggested selling him, later offered himself in Benjamin's place;Potiphar's wife~2~Genesis 39:7–20~Falsely accused Joseph;Rachel~2~Genesis 30:22–24~His mother, who named him;Cupbearer~2~Genesis 40:23~Forgot Joseph for two whole years;Baker~2~Genesis 40:16–22~Joseph's interpretation for him came true;Asenath~3~Genesis 41:45~His Egyptian wife;Manasseh~3~Genesis 41:51~His firstborn — “God has made me forget my trouble”;Ephraim~3~Genesis 41:52~His second son — “God has made me fruitful”;Simeon~3~Genesis 42:24~Kept in prison as a hostage;Ishmaelite traders|Midianite traders~3~Genesis 37:28~Bought Joseph for twenty shekels of silver;Leah~4~Genesis 29:32~Mother of six of his brothers;Levi~5~Genesis 29:34~One of the brothers, ancestor of Moses and Aaron;Dan~5~Genesis 30:6~A brother born to Rachel's servant Bilhah
C^Joseph^Name an object from Joseph's story^Joseph's brothers sold him for twenty shekels of silver (Genesis 37:28).^Coat of many colours|Coat of many colors|Robe~1~Genesis 37:3~A gift from his father that stirred jealousy;Dreams~1~Genesis 37:5~His brothers hated him even more for them;Pit|Cistern~1~Genesis 37:24~It was empty, with no water in it;Silver cup~2~Genesis 44:2~Planted in Benjamin's sack;Twenty pieces of silver|Silver~2~Genesis 37:28~His price as a slave;Grain~2~Genesis 41:49~He stored so much he stopped counting;Sheaves of grain~2~Genesis 37:7~His brothers' sheaves bowed down to his;Sun, moon and eleven stars|Stars~2~Genesis 37:9–10~Even Jacob questioned this dream;Seven fat cows and seven thin cows|Cows~2~Genesis 41:2–4~Pharaoh's first dream;Seven ears of grain~3~Genesis 41:5–7~Pharaoh's second dream;Signet ring~3~Genesis 41:42~Pharaoh's own ring, given to Joseph;Goat's blood~3~Genesis 37:31~Used to fake his death;Sacks~3~Genesis 42:25~Joseph had them filled with grain;Money in the sacks~3~Genesis 42:27–28~It frightened the brothers on the way home;Grapevine~4~Genesis 40:9–10~The cupbearer's dream;Baskets of bread~4~Genesis 40:16–17~The baker's dream;Gold chain~4~Genesis 41:42~Placed around his neck by Pharaoh;Chariot~4~Genesis 41:43~People shouted “Make way!” before him;Linen robes~4~Genesis 41:42~Pharaoh dressed him in fine linen
C^Joseph^Name an event from Joseph's life^“You intended to harm me, but God intended it for good” (Genesis 50:20).^Sold into slavery~1~Genesis 37:28~Sold for twenty shekels of silver;Thrown into the pit~1~Genesis 37:24~His brothers stripped his robe first;Interpreting dreams~1~Genesis 40:8~“Do not interpretations belong to God?”;Prison~1~Genesis 39:20–22~The warden put him in charge of the prisoners;Ruling Egypt|Second in command of Egypt~1~Genesis 41:46~He was thirty years old;Falsely accused by Potiphar's wife~2~Genesis 39:12–20~He left his cloak in her hand and ran;Seven years of plenty and famine~2~Genesis 41:29–30~Seven good years followed by seven of famine;Brothers bow down~2~Genesis 42:6~His boyhood dream came true;Reveals himself to his brothers~2~Genesis 45:1–3~He wept so loudly the Egyptians heard;Reunited with Jacob~2~Genesis 46:29~He wept on his father's neck a long time;You meant it for evil, God meant it for good~2~Genesis 50:20~His words to his brothers after Jacob died;Silver cup in Benjamin's sack~3~Genesis 44:12~Found in Benjamin's sack, the youngest;Family moves to Goshen~3~Genesis 47:6~Pharaoh gave them the best of the land;Joseph's bones carried out of Egypt~4~Exodus 13:19~Moses kept Joseph's request;Weeping~4~Genesis 45:2~He weeps several times in his story;Named Zaphenath-Paneah~5~Genesis 41:45~The name Pharaoh gave him
C^Moses^Name an event from Moses' life^Moses lived 120 years — 40 in Egypt, 40 in Midian and 40 in the wilderness (Acts 7:23, 30; Deuteronomy 34:7).^Burning bush~1~Exodus 3:2~The bush burned but was not consumed;Parting of the Red Sea~1~Exodus 14:21~A strong east wind blew all night;Ten plagues~1~Exodus 7–12~Each plague targeted Egypt's confidence in its gods;Ten Commandments~1~Exodus 20:1–17~Written on stone by the finger of God;Baby in a basket on the Nile~1~Exodus 2:3~Coated with tar and pitch;Golden calf~1~Exodus 32:19–20~He burned it and ground it to powder;Striking the rock~2~Numbers 20:11~This cost him entry to the Promised Land;Bronze serpent~2~Numbers 21:9~Jesus compared his own lifting up to it;Manna~2~Exodus 16:15~The name means “What is it?”;Staff turned into a snake~2~Exodus 4:3~A sign to convince Israel;Passover~2~Exodus 12:21~The blood on the doorframes spared the firstborn;Killing the Egyptian~3~Exodus 2:12~He hid the body in the sand;Fleeing to Midian~3~Exodus 2:15~He stayed there forty years;Face shining~3~Exodus 34:29~He didn't know his face was radiant;Hands held up in battle~3~Exodus 17:11–12~Aaron and Hur held his hands up;Viewing the Promised Land from Nebo~3~Deuteronomy 34:1~He was 120 and his eyes were not weak;Breaking the tablets~3~Exodus 32:19~He broke them at the foot of the mountain;Not entering the Promised Land~3~Numbers 20:12~Because he struck the rock instead of speaking to it;Marrying Zipporah~4~Exodus 2:21~Jethro gave her to him in Midian;Jethro's advice~4~Exodus 18:17–24~Share the load by appointing judges;Hidden in the cleft of the rock~4~Exodus 33:22~God covered him with his hand as his glory passed
C^Moses^Name a person in Moses' story^Moses' Hebrew mother Jochebed was paid to nurse him by Pharaoh's daughter (Exodus 2:9).^Aaron~1~Exodus 4:14~His older brother and spokesman;Miriam~1~Exodus 15:20~His sister, who led the women in song;Pharaoh~1~Exodus 5:2~“Who is the LORD, that I should obey him?”;Zipporah~2~Exodus 2:21~His wife, a daughter of Jethro;Jethro~2~Exodus 18:1~His father-in-law, a priest of Midian;Joshua~2~Numbers 27:18–23~His assistant and successor;Pharaoh's daughter~2~Exodus 2:10~She named him Moses;Jochebed~3~Exodus 6:20~His mother, who hid him for three months;Korah~3~Numbers 16:1–3~Led a rebellion against him;Caleb~3~Numbers 13:30~The spy who urged Israel to take the land;Amram~4~Exodus 6:20~His father;Gershom~4~Exodus 2:22~His son, named because Moses was a foreigner;Hur~4~Exodus 17:12~Held up his hands with Aaron;Eleazar~4~Numbers 20:28~Aaron's son, who became high priest;Eliezer~5~Exodus 18:4~His second son;Dathan~5~Numbers 16:1~Rebelled with Korah;Abiram~5~Numbers 16:1~Rebelled with Korah;Nadab~5~Leviticus 10:1–2~Aaron's son, who offered unauthorised fire;Abihu~5~Leviticus 10:1–2~Aaron's son, who died alongside Nadab;Bezalel~5~Exodus 31:2–3~Filled with the Spirit to build the tabernacle;Phinehas~5~Numbers 25:7–11~Aaron's grandson, zealous for God
C^Moses^Name an object or sign in Moses' story^God's sign to Moses: a staff that became a snake and a hand that turned leprous and back (Exodus 4:2–7).^Staff|Rod~1~Exodus 4:2~God asked, “What is that in your hand?”;Tablets of stone~1~Exodus 31:18~Inscribed by the finger of God;Burning bush~1~Exodus 3:2~Where God first called him;Basket~2~Exodus 2:3~His mother made it of papyrus;Bronze serpent~2~Numbers 21:8–9~Anyone bitten could look at it and live;Ark of the Covenant~2~Exodus 25:10~Made of acacia wood overlaid with gold;Manna~2~Exodus 16:31~It tasted like wafers made with honey;Pillar of cloud~2~Exodus 13:21~Led Israel by day;Pillar of fire~2~Exodus 13:21~Gave Israel light by night;Golden calf~2~Exodus 32:4~Aaron made it while Moses was on the mountain;Tabernacle~2~Exodus 40:34~The glory of the LORD filled it;Blood on the doorposts~2~Exodus 12:7~The sign for the angel of death to pass over;Veil~3~Exodus 34:33~He covered his shining face;Sandals~3~Exodus 3:5~He was standing on holy ground;Leprous hand~3~Exodus 4:6~A sign that turned leprous and back again
C^Esther^Name a person in Esther's story^Esther's Hebrew name was Hadassah, meaning “myrtle” (Esther 2:7).^Mordecai~1~Esther 2:7~Her cousin, who raised her;Haman~1~Esther 3:5–6~Plotted to destroy all the Jews;Xerxes|Ahasuerus~1~Esther 2:17~The king who made her queen;Vashti~2~Esther 1:12~The queen who refused the king's summons;Hegai~3~Esther 2:9~The eunuch over the women, who favoured her;Zeresh~3~Esther 5:14~Haman's wife, who suggested the gallows;Hathach~4~Esther 4:5~Carried messages between Esther and Mordecai;Abihail~5~Esther 2:15~Her father;Harbona~5~Esther 7:9~Pointed out Haman's gallows to the king;Bigthana~5~Esther 2:21~Plotted to kill the king;Teresh~5~Esther 2:21~Plotted with Bigthana
C^Esther^Name an event from Esther's story^“If I perish, I perish” — Esther's resolve before going uninvited to the king (Esther 4:16).^Becomes queen~1~Esther 2:17~Chosen from young women across the empire;For such a time as this~1~Esther 4:14~Mordecai's challenge to her;Goes to the king uninvited~1~Esther 5:1–2~Approaching the king unsummoned could mean death;Saves the Jews~1~Esther 8:11~The Jews were allowed to defend themselves;Purim~1~Esther 9:26~Named after the pur, the lot Haman cast;Three-day fast~2~Esther 4:16~She asked all the Jews in Susa to fast with her;King holds out the sceptre~2~Esther 5:2~He spared her by holding it out;Two banquets~2~Esther 5:4–8~She invited the king and Haman twice;Exposes Haman~2~Esther 7:6~“An adversary and enemy — this vile Haman”;Haman hanged~2~Esther 7:10~On the gallows he had built for Mordecai;If I perish, I perish~2~Esther 4:16~Her words before going to the king;Twelve months of beauty treatments~3~Esther 2:12~Six months with oil of myrrh, six with perfumes;Mordecai honoured~3~Esther 6:11~Haman had to lead his horse through the city;Second edict~4~Esther 8:11~Written in the king's name and sealed with his ring
C^Esther^Name a place or object in Esther's story^King Xerxes ruled 127 provinces “from India to Cush” (Esther 1:1).^Susa|Shushan~1~Esther 1:2~The citadel where the story takes place;Persia~1~Esther 1:3~Xerxes ruled the Persian empire;Gallows~1~Esther 5:14~Fifty cubits high;Sceptre|Scepter~1~Esther 5:2~Held out to spare her life;Palace|Citadel~2~Esther 1:5~The king held a seven-day banquet in its garden;Signet ring~2~Esther 3:10, Esther 8:2~Given first to Haman, then to Mordecai;Royal crown~2~Esther 2:17~The king set it on her head;Banquet~2~Esther 5:4~She used banquets to reveal Haman's plot;Lots|Pur~2~Esther 3:7~Cast to choose the day of destruction;King's gate~3~Esther 2:21~Where Mordecai sat and overheard a plot;Royal robes~3~Esther 5:1~She wore them to go before the king;Horse~3~Esther 6:8~Haman expected to ride it himself;Book of records|Chronicles~3~Esther 6:1~Read to the king on a sleepless night;Media~4~Esther 1:3~Persia and Media ruled together;127 provinces~4~Esther 1:1~The empire's size under Xerxes;India~5~Esther 1:1~The empire's eastern edge;Cush~5~Esther 1:1~The empire's southern edge
C^David^Name an event from David's life^David was 30 when he became king and reigned for 40 years (2 Samuel 5:4).^Killing Goliath~1~1 Samuel 17:49–50~One stone from his sling;Anointed by Samuel~1~1 Samuel 16:13~The youngest of Jesse's sons;Playing the harp for Saul~1~1 Samuel 16:23~His music brought Saul relief;Friendship with Jonathan~1~1 Samuel 18:1–3~Jonathan loved him as himself;David and Bathsheba~1~2 Samuel 11:2–4~He saw her from the palace roof;Writing psalms~1~2 Samuel 23:1~He is called Israel's singer of songs;Dancing before the ark~2~2 Samuel 6:14~He danced with all his might in a linen ephod;Sparing Saul's life~2~1 Samuel 24:4–7~He cut off a corner of Saul's robe;Becoming king~2~2 Samuel 5:3–4~King at thirty, he reigned forty years;Capturing Jerusalem~2~2 Samuel 5:7~The fortress of Zion became the City of David;Killing a lion and a bear~2~1 Samuel 17:34–36~His proof to Saul that he could face Goliath;Absalom's rebellion~2~2 Samuel 15:13–14~He fled Jerusalem from his own son;Hiding in caves~3~1 Samuel 22:1~He hid in the cave of Adullam;Nathan's rebuke~3~2 Samuel 12:7~“You are the man!”;Kindness to Mephibosheth~3~2 Samuel 9:7~For Jonathan's sake;Bringing the ark to Jerusalem~3~2 Samuel 6:12–15~With shouts and the sound of trumpets;Pretending to be insane~4~1 Samuel 21:13~He did it in front of the king of Gath;Eating the consecrated bread~4~1 Samuel 21:6~Jesus cited it (Mark 2:25-26);The census~4~2 Samuel 24:10~His conscience struck him afterwards;Meeting Abigail~4~1 Samuel 25:32–33~She stopped him from taking revenge on Nabal
C^David^Name a person in David's story^David's great-grandmother was Ruth the Moabite (Ruth 4:17).^Goliath~1~1 Samuel 17:4~Six cubits and a span tall;Saul~1~1 Samuel 16:21~First loved David, later tried to kill him;Jonathan~1~1 Samuel 18:3~Made a covenant with David;Bathsheba~1~2 Samuel 12:24~Became his wife and the mother of Solomon;Solomon~1~1 Kings 1:30~His chosen successor;Absalom~2~2 Samuel 15:10~His son who rebelled;Nathan~2~2 Samuel 12:1–7~Confronted him with a parable about a lamb;Samuel~2~1 Samuel 16:13~Anointed him with oil;Jesse~2~1 Samuel 16:10–11~His father;Michal~2~1 Samuel 18:27~Saul's daughter and his first wife;Uriah~2~2 Samuel 11:15~Sent to the front line to die;Abigail~3~1 Samuel 25:42~Became his wife after Nabal died;Joab~3~2 Samuel 8:16~Commander of his army;Mephibosheth~3~2 Samuel 9:13~Jonathan's son, who ate at the king's table;Amnon~3~2 Samuel 13:1~His firstborn son;Tamar~4~2 Samuel 13:1~His daughter;Abner~4~2 Samuel 3:12~Saul's commander who came over to David;Abishai~4~1 Samuel 26:7–9~Wanted to kill Saul as he slept;Eliab~4~1 Samuel 17:28~His eldest brother, who scolded him;Nabal~4~1 Samuel 25:10~Insulted David's men;Benaiah~4~2 Samuel 23:20~Killed a lion in a pit on a snowy day;Adonijah~4~1 Kings 1:5~Tried to seize the throne;Ruth~4~Ruth 4:17~His great-grandmother;Ahimelech~5~1 Samuel 21:1–6~The priest who gave him the consecrated bread;Achish~5~1 Samuel 27:6~King of Gath who gave him Ziklag;Hushai~5~2 Samuel 15:37~His friend who foiled Absalom's plans;Ahithophel~5~2 Samuel 16:23~His counsellor who joined Absalom;Gad~5~1 Samuel 22:5~His prophet;Zadok~5~2 Samuel 15:24~A priest who stayed loyal;Ish-bosheth~5~2 Samuel 2:10~Saul's son, a rival king for two years;Boaz~5~Ruth 4:21–22~His great-grandfather;Obed~5~Ruth 4:17~His grandfather;Abiathar~5~1 Samuel 22:20~Escaped Saul's massacre of the priests;Shimei~5~2 Samuel 16:5–7~Cursed him and threw stones;Asahel~5~2 Samuel 2:18~His nephew, as fast as a gazelle
C^David^Name a place in David's story^David fled to the cave of Adullam, where about 400 outcasts gathered around him (1 Samuel 22:1–2).^Bethlehem~1~1 Samuel 16:1~His hometown;Jerusalem|City of David~1~2 Samuel 5:6–7~He took it from the Jebusites;Hebron~2~2 Samuel 5:5~He reigned there seven and a half years;Valley of Elah~2~1 Samuel 17:2~Where he faced Goliath;Zion~2~2 Samuel 5:7~The fortress that became the City of David;Cave of Adullam~3~1 Samuel 22:1–2~About 400 men gathered to him there;Ziklag~3~1 Samuel 27:6~Given to him by the king of Gath;Gath~3~1 Samuel 21:10~Goliath's hometown;En Gedi~3~1 Samuel 24:1–4~Where he spared Saul in a cave;Philistia~3~1 Samuel 27:1~He hid among the Philistines from Saul;Nob~4~1 Samuel 21:1~Where he ate the consecrated bread;Gibeah~4~1 Samuel 10:26~Saul's hometown;Ramah~4~1 Samuel 19:18~He fled to Samuel there;Mahanaim~5~2 Samuel 17:24~He fled there from Absalom;Keilah~5~1 Samuel 23:5~He rescued it from the Philistines;Wilderness of Ziph~5~1 Samuel 23:14~He hid there while Saul searched for him;Moab~5~1 Samuel 22:3–4~He left his parents there for safety
C^Daniel^Name an event from Daniel's life^Daniel served from Nebuchadnezzar's reign into the first year of Cyrus — the whole exile (Daniel 1:21).^Lions' den~1~Daniel 6:16–22~Thrown in for praying to God;Interpreting Nebuchadnezzar's dreams~1~Daniel 2:31–45~He saw the dream itself in a night vision;Writing on the wall~1~Daniel 5:25–28~Mene, Mene, Tekel, Parsin;Refusing the king's food~1~Daniel 1:8~He asked for vegetables and water instead;Praying three times a day~2~Daniel 6:10~Toward Jerusalem, with his windows open;Friends in the fiery furnace~2~Daniel 3:20–27~Not even the smell of fire was on them;Taken into exile~2~Daniel 1:1–6~Taken to Babylon as a young man;Angel shuts the lions' mouths~2~Daniel 6:22~God sent his angel to protect him;Vision of four beasts~3~Daniel 7:3~Like a lion, a bear, a leopard and a terrifying fourth beast;Gabriel visits~3~Daniel 9:21~He came while Daniel was still praying;Made ruler over Babylon~3~Daniel 2:48~Made ruler over the whole province of Babylon;Renamed Belteshazzar~3~Daniel 1:7~His Babylonian name;Seventy weeks~4~Daniel 9:24~A prophecy of seventy “sevens”;Prayer of confession~4~Daniel 9:4–19~He confessed Israel's sin as his own;Fasting for 21 days~4~Daniel 10:2–3~An angel was delayed 21 days by the prince of Persia
C^Daniel^Name a person in Daniel's story^Darius's officials tricked him into a decree they knew Daniel would break (Daniel 6:6–9).^Shadrach~1~Daniel 1:7~Hananiah's Babylonian name;Meshach~1~Daniel 1:7~Mishael's Babylonian name;Abednego~1~Daniel 1:7~Azariah's Babylonian name;Nebuchadnezzar~1~Daniel 4:34~Praised God after his madness ended;Darius~1~Daniel 6:26~Decreed that everyone must fear Daniel's God;Belshazzar~2~Daniel 5:30~Killed the same night the writing appeared;Gabriel~2~Daniel 8:16~Explained Daniel's visions;Cyrus~3~Daniel 6:28~Daniel prospered during his reign;Michael~3~Daniel 12:1~The great prince who protects Daniel's people;Ancient of Days~3~Daniel 7:9~Hair white like wool, his throne flaming with fire;Ashpenaz~4~Daniel 1:3~The chief official who trained the young exiles;Arioch~5~Daniel 2:24~The commander ordered to execute the wise men;Jehoiakim~5~Daniel 1:1–2~King of Judah when Daniel was taken to Babylon;The queen mother~5~Daniel 5:10–12~Remembered Daniel and recommended him to Belshazzar
C^Daniel^Name an object or image from Daniel's story^Daniel prayed with his windows open toward Jerusalem, three times a day (Daniel 6:10).^Lions~1~Daniel 6:16~Daniel was thrown in for praying;Fiery furnace~1~Daniel 3:19~Heated seven times hotter than usual;Hand writing on the wall~1~Daniel 5:5~Fingers appeared during Belshazzar's feast;Statue~2~Daniel 2:31–33~A head of gold down to feet of iron and clay;Vegetables|Pulse~2~Daniel 1:12~Part of a ten-day test;Golden image~2~Daniel 3:1~Sixty cubits high;Mene Mene Tekel Parsin~2~Daniel 5:25~Numbered, weighed, divided;Water~3~Daniel 1:12~They asked for water instead of the king's wine;Window toward Jerusalem~3~Daniel 6:10~He prayed facing Jerusalem;Four beasts~3~Daniel 7:3~Like a lion, a bear, a leopard and a terrifying fourth beast;Signet ring|Seal~4~Daniel 6:17~The king sealed the stone over the den with it;Purple robe and gold chain~4~Daniel 5:29~Belshazzar's reward for reading the writing;Tree in Nebuchadnezzar's dream~4~Daniel 4:10–14~Cut down, leaving only the stump;Stone cut without hands~4~Daniel 2:34–35~It became a mountain that filled the earth;Ram and goat~4~Daniel 8:3–8~Gabriel said they stood for Media-Persia and Greece;Sealed scroll~5~Daniel 12:4~Sealed until the time of the end
C^Peter^Name an event from Peter's life^Peter's shadow was thought to heal; the sick were laid in the streets as he passed (Acts 5:15).^Walking on water~1~Matthew 14:29–31~He began to sink when he saw the wind;Denying Jesus three times~1~Luke 22:54–62~Three denials before the rooster crowed;Rooster crowing~1~Matthew 26:75~He went outside and wept bitterly;Called to be a fisher of men~1~Matthew 4:18–19~Called with his brother Andrew;Preaching at Pentecost~1~Acts 2:41~About 3,000 were baptised that day;Cutting off Malchus's ear~2~John 18:10~John's Gospel names him as the one with the sword;Confessing Jesus as the Christ~2~Matthew 16:16–18~Jesus called him the rock;Restored by Jesus|Feed my sheep~2~John 21:15–17~Asked three times, “Do you love me?”;Transfiguration~2~Matthew 17:1–4~He offered to build three shelters;Healing the lame man~2~Acts 3:6–8~“In the name of Jesus Christ of Nazareth, walk”;Freed from prison by an angel~2~Acts 12:7–10~The iron gate opened by itself;Miraculous catch of fish~2~Luke 5:4–8~“Go away from me, Lord, I am a sinful man!”;Vision of the sheet~3~Acts 10:9–16~Seen three times on a rooftop in Joppa;Visiting Cornelius~3~Acts 10:34–35~The first Gentile household to receive the Spirit;Raising Dorcas~3~Acts 9:40~“Tabitha, get up”;Running to the empty tomb~3~John 20:3–6~John outran him, but Peter went in first;Jesus washes his feet~3~John 13:6–9~“Not just my feet but my hands and my head as well!”;Ananias and Sapphira~3~Acts 5:3–5~They lied about the price of their land;Writing two letters~3~1 Peter 1:1~The New Testament keeps two letters under his name;Shadow healing~4~Acts 5:15~People hoped his shadow would fall on the sick;Coin in the fish's mouth~4~Matthew 17:27~He found the coin in the first fish he caught
C^Peter^Name a person in Peter's story^Peter's original name was Simon; Jesus called him Cephas, Aramaic for “rock” (John 1:42).^Simon~1~Matthew 16:17~His birth name, Simon son of Jonah;Andrew~1~John 1:40–42~His brother, who brought him to Jesus;John~1~Acts 3:1~His partner in the early Jerusalem ministry;Jesus~1~John 1:42~Renamed him Cephas, the rock;James~2~Mark 5:37~With John, in Jesus' inner circle alongside Peter;Cephas~2~John 1:42~Aramaic for “rock”;Cornelius~2~Acts 10:25–26~Fell at Peter's feet, but Peter lifted him up;Malchus~3~John 18:10~Peter cut off his ear;Ananias~3~Acts 5:3–5~Died after Peter exposed his lie;Sapphira~3~Acts 5:9–10~Died after repeating her husband's lie;Dorcas|Tabitha~3~Acts 9:40~Raised by Peter in Joppa;Rhoda~3~Acts 12:13–14~So excited she forgot to open the door;Peter's mother-in-law~3~Mark 1:30–31~She shows Peter was married;Paul~3~Galatians 2:11~Opposed him to his face in Antioch;Simon the tanner~4~Acts 9:43~Peter stayed with him in Joppa;Jonah|John (his father)~4~Matthew 16:17~His father (Simon bar-Jonah);Mark~4~1 Peter 5:13~Peter calls him “my son”;Herod~4~Acts 12:3–4~Arrested him during the Passover festival;Aeneas~5~Acts 9:34~Bedridden eight years before Peter healed him;Silas~5~1 Peter 5:12~Helped him write his first letter
C^Peter^Name something Peter said^“Silver and gold I do not have, but what I do have I give you” — to the lame man at the temple gate (Acts 3:6).^You are the Christ, the Son of the living God~1~Matthew 16:16~Jesus replied that this was revealed by the Father;I do not know the man~1~Matthew 26:72~His second denial, made with an oath;Silver and gold I do not have~1~Acts 3:6~Said to the lame man at the Beautiful Gate;Lord, save me~2~Matthew 14:30~As he began to sink;Lord, to whom shall we go~2~John 6:68~“You have the words of eternal life”;Depart from me, for I am a sinful man~2~Luke 5:8~After the huge catch of fish;Lord, you know that I love you~2~John 21:17~Hurt that Jesus asked a third time;Even if all fall away, I will not~2~Matthew 26:33~Said the night before he denied Jesus;Repent and be baptised~2~Acts 2:38~His answer at Pentecost to “What shall we do?”;Let us build three shelters~3~Matthew 17:4~At the transfiguration;Not just my feet but my hands and my head~3~John 13:9~When Jesus washed his feet;We must obey God rather than men~3~Acts 5:29~To the Sanhedrin;God shows no partiality~4~Acts 10:34~At the house of Cornelius
C^Paul^Name an event from Paul's life^Paul was a Roman citizen from birth and earned his living making tents (Acts 22:28; 18:3).^Road to Damascus~1~Acts 9:3–6~A light from heaven flashed around him;Shipwreck~1~Acts 27:41–44~All 276 on board reached land safely;Singing in prison with Silas~1~Acts 16:25–26~At midnight, then an earthquake opened the doors;Missionary journeys~1~Acts 13:2–4~First sent out from Antioch with Barnabas;Writing letters~1~2 Peter 3:15–16~Thirteen New Testament letters bear his name;Blinded~2~Acts 9:8–9~Three days without sight, food or drink;Stoned at Lystra~2~Acts 14:19–20~Left for dead, he got up and went back into the city;Persecuting Christians~2~Acts 8:3~He dragged believers off to prison;Holding coats at Stephen's stoning~2~Acts 7:58~The witnesses laid their coats at his feet;Snake bite on Malta~2~Acts 28:3–6~He shook the viper off into the fire unharmed;Thorn in the flesh~2~2 Corinthians 12:7–9~“My grace is sufficient for you”;Sight restored by Ananias~2~Acts 9:17–18~Something like scales fell from his eyes;Let down in a basket~3~Acts 9:25~Lowered through an opening in the Damascus wall;Sermon at Mars Hill~3~Acts 17:22–23~He began with an altar “to an unknown god”;Arrested in Jerusalem~3~Acts 21:30–33~Seized in the temple and rescued by Roman soldiers;Appealing to Caesar~3~Acts 25:11~As a Roman citizen, he appealed to Caesar;Raising Eutychus~3~Acts 20:9–12~The young man fell asleep during a long sermon;Making tents~3~Acts 18:3~He worked alongside Priscilla and Aquila;House arrest in Rome~3~Acts 28:30–31~Two whole years in his own rented house;Riot in Ephesus~4~Acts 19:23–29~Silversmiths feared for their idol trade;Split with Barnabas~4~Acts 15:39–40~They disagreed over taking Mark;Council of Jerusalem~4~Acts 15:2~Sent to Jerusalem over whether Gentiles must be circumcised;Circumcising Timothy~5~Acts 16:3~Timothy's father was Greek
C^Paul^Name one of Paul's companions or co-workers^Paul's teacher was Gamaliel, a respected Pharisee (Acts 22:3).^Barnabas~1~Acts 9:27~Vouched for Paul to the apostles;Silas~1~Acts 15:40~Chose him for the second journey;Timothy~1~Acts 16:1–3~Joined Paul at Lystra;Luke~1~Colossians 4:14~The beloved physician;Titus~2~2 Corinthians 8:23~“My partner and co-worker”;Mark~2~Acts 12:25~Left them partway, later “useful” again (2 Timothy 4:11);Priscilla~2~Acts 18:2–3~Tentmakers who worked with Paul;Aquila~2~Acts 18:2–3~Tentmakers who worked with Paul;Apollos~3~1 Corinthians 3:6~“I planted, Apollos watered”;Onesimus~3~Philemon 1:10~The runaway who became like a son to Paul;Epaphroditus~3~Philippians 2:25~Nearly died while serving Paul;Tychicus~3~Ephesians 6:21~Carried Paul's letters;Lydia~3~Acts 16:14–15~Hosted Paul in Philippi;Phoebe~3~Romans 16:1~A deacon who carried the letter to Rome;Ananias~3~Acts 9:17~Laid hands on Paul to restore his sight;Gamaliel~3~Acts 22:3~Paul's teacher;Philemon~3~Philemon 1:1~The church met in his house;Aristarchus~4~Colossians 4:10~A fellow prisoner;Demas~4~2 Timothy 4:10~Deserted him, loving this world;Epaphras~4~Colossians 4:12~Always wrestling in prayer for the Colossians;Trophimus~5~Acts 21:29~Seen with Paul, sparking a riot;Erastus~5~Romans 16:23~The city's director of public works;Gaius~5~Romans 16:23~Paul's host in Corinth;Onesiphorus~5~2 Timothy 1:16~Was not ashamed of Paul's chains;Jason~5~Acts 17:5–7~Dragged before the city officials for hosting Paul;Crispus~5~Acts 18:8~The synagogue leader who believed;Sosthenes~5~1 Corinthians 1:1~Co-sender of 1 Corinthians;Stephanas~5~1 Corinthians 16:15~His household were the first converts in Achaia;Sopater~6~Acts 20:4~From Berea;Secundus~6~Acts 20:4~From Thessalonica
C^Paul^Name a letter Paul wrote^Thirteen New Testament letters carry Paul's name, from Romans to Philemon.^Romans~1~Romans 1:1~Written to a church he had not yet visited;1 Corinthians|First Corinthians|Corinthians~1~1 Corinthians 1:1~Includes the great love chapter, 13;Galatians~1~Galatians 1:1~Contains the fruit of the Spirit;Ephesians~1~Ephesians 1:1~Written from prison;Philippians~1~Philippians 1:1~A letter full of joy, written from chains;2 Corinthians|Second Corinthians~2~2 Corinthians 1:1~His most personal letter;Colossians~2~Colossians 1:1~Christ, the image of the invisible God;1 Thessalonians|First Thessalonians|Thessalonians~2~1 Thessalonians 1:1~Probably one of his earliest letters;1 Timothy|First Timothy|Timothy~2~1 Timothy 1:1~To his “true son in the faith”;2 Thessalonians|Second Thessalonians~3~2 Thessalonians 1:1~Corrects confusion about the day of the Lord;2 Timothy|Second Timothy~3~2 Timothy 1:1~Probably his last letter;Titus~3~Titus 1:1~Titus was left to organise the church in Crete;Philemon~3~Philemon 1:1~A plea for the runaway slave Onesimus
C^Paul^Name a place Paul went^Paul spent his last recorded years under house arrest in Rome, welcoming all who came (Acts 28:30–31).^Tarsus~1~Acts 22:3~His birthplace;Damascus~1~Acts 9:3~He met Jesus on the road there;Jerusalem~1~Acts 22:3~He trained under Gamaliel there;Rome~1~Acts 28:16~He lived there under guard;Antioch~2~Acts 11:25–26~Believers were first called Christians there;Corinth~2~Acts 18:11~He stayed a year and a half;Ephesus~2~Acts 19:10~He taught there for two years;Philippi~2~Acts 16:12~Lydia believed there;Athens~2~Acts 17:16~Distressed by the city's idols;Malta~2~Acts 28:1~Shipwrecked there;Thessalonica~3~Acts 17:1~He taught there for three Sabbaths;Berea~3~Acts 17:11~They checked the Scriptures daily;Lystra~3~Acts 14:8–10~He healed a man lame from birth;Cyprus~3~Acts 13:4~Barnabas's home island;Macedonia~3~Acts 16:9~A vision of a man calling for help;Derbe~4~Acts 14:20~He went there after being stoned;Iconium~4~Acts 14:1~Many Jews and Greeks believed;Troas~4~Acts 16:8–9~Where he saw the Macedonian vision;Caesarea~4~Acts 23:33~He was held there two years;Crete~4~Acts 27:7~His ship sailed along its coast;Arabia~4~Galatians 1:17~He went there after his conversion;Galatia~4~Acts 16:6~He passed through on his travels;Miletus~5~Acts 20:17–18~He said farewell to the Ephesian elders there;Colossae~5~Colossians 1:2~He wrote to the church there, though he may never have visited
C^Mary of Bethany^Name something from Mary of Bethany's story^Jesus said what Mary did would be told wherever the gospel is preached (Mark 14:9; John 12:3).^Sitting at Jesus' feet~1~Luke 10:39~She listened while Martha worked;Anointing Jesus with perfume|Nard~1~John 12:3~Pure nard, worth about a year's wages;Wiping his feet with her hair~1~John 12:3~She wiped his feet with her hair;Lazarus raised~1~John 11:43–44~Her brother came out after four days;Mary has chosen the better part~2~Luke 10:42~“It will not be taken away from her”;Alabaster jar~2~Mark 14:3~She broke the jar and poured it out;Jesus wept~2~John 11:35~Jesus wept when he saw her weeping;Martha distracted with serving~2~Luke 10:40~Martha asked Jesus to make Mary help;Lord, if you had been here~3~John 11:32~She fell at his feet when she said it;Judas objects to the cost~3~John 12:4–5~He said the perfume could have been sold for the poor;The house filled with fragrance~3~John 12:3~The fragrance filled the whole house;Dinner at Bethany~3~John 12:2~Given in Jesus' honour after Lazarus was raised;Perfume worth a year's wages|300 denarii~4~John 12:5~Three hundred denarii;She did it for my burial~4~John 12:7~Jesus defended her;Six days before Passover~5~John 12:1~The dinner took place six days before Passover
C^Mary of Bethany^Name a person connected to Mary of Bethany^“Jesus loved Martha and her sister and Lazarus” (John 11:5).^Martha~1~Luke 10:38–40~Her sister, busy serving;Lazarus~1~John 11:1–2~Her brother, whom Jesus raised;Jesus~1~John 11:5~Jesus loved Martha, her sister and Lazarus;Judas Iscariot~2~John 12:4–6~He objected to the cost of her perfume;The disciples~3~Matthew 26:8~Some were indignant at the “waste”;Simon the leper~4~Mark 14:3~Mark places the anointing at his house;The mourners~4~John 11:31~Followed her when she went to Jesus;Chief priests~5~John 12:10~They planned to kill Lazarus too
C^Mary of Bethany^Name a place or object in Mary of Bethany's story^Pure nard came from the Himalayas — the jar Mary broke was worth about a year's wages (John 12:5).^Bethany~1~John 11:1~Her village, near Jerusalem;Jesus' feet~1~John 12:3~She poured the perfume on them;Nard|Spikenard|Perfume~1~John 12:3~Pure, expensive perfume;Alabaster jar|Jar~2~Mark 14:3~She broke it to pour the perfume;Her hair~2~John 12:3~She used it to wipe his feet;Lazarus' tomb~3~John 11:38~A cave with a stone across it;Jerusalem~3~John 11:18~Bethany was less than two miles away;Martha's home~3~Luke 10:38~Martha opened her home to Jesus;The village~4~Luke 10:38~Jesus came to a village where Martha welcomed him;Mount of Olives~5~Mark 11:1~Bethany lay at the Mount of Olives
C^Solomon^Name an event from Solomon's life^At Gibeon, God told Solomon to ask for anything — and he asked for wisdom (1 Kings 3:5–9).^Asking God for wisdom~1~1 Kings 3:9~He asked for a discerning heart;Two mothers and the baby~1~1 Kings 3:16–28~He offered to divide the baby to find the real mother;Building the temple~1~1 Kings 6:1~Begun 480 years after the Exodus;Queen of Sheba's visit~1~1 Kings 10:1–10~She came to test him with hard questions;Becoming king~2~1 Kings 1:39~Anointed by Zadok at Gihon;Prayer at the temple dedication~2~1 Kings 8:22–23~He spread out his hands toward heaven;Marrying many wives~2~1 Kings 11:3~His wives turned his heart away;Writing proverbs~2~1 Kings 4:32~He spoke 3,000 proverbs;Building his palace~3~1 Kings 7:1~It took thirteen years;Turning to other gods~3~1 Kings 11:4~In his old age;Glory fills the temple~3~2 Chronicles 7:1~Fire came down and the glory filled the temple;Dream at Gibeon~3~1 Kings 3:5~God said, “Ask for whatever you want me to give you”;Kingdom divided after him~3~1 Kings 12:16–19~Under his son Rehoboam;Executing Adonijah~4~1 Kings 2:25~After Adonijah asked for Abishag;Ships from Tarshish~4~1 Kings 10:22~They returned every three years
C^Solomon^Name something Solomon was famous for^Solomon spoke 3,000 proverbs and wrote 1,005 songs (1 Kings 4:32).^Wisdom~1~1 Kings 4:29–31~Wiser than anyone else;Wealth|Riches~1~1 Kings 10:23~Greater in riches than all the kings of the earth;The temple~1~1 Kings 6:38~Seven years to build;Proverbs~1~1 Kings 4:32~3,000 proverbs;Judgement|Justice~2~1 Kings 3:28~All Israel held him in awe;Gold~2~1 Kings 10:14~666 talents of gold a year;700 wives and 300 concubines|Wives~2~1 Kings 11:3~They led him astray;Songs~3~1 Kings 4:32~He wrote 1,005 songs;Horses and chariots~3~1 Kings 10:26~Fourteen hundred chariots;Ivory throne~3~1 Kings 10:18~Overlaid with fine gold;Peace~3~1 Kings 4:24–25~Everyone under their own vine and fig tree;Knowledge of plants and animals~4~1 Kings 4:33~From cedars to hyssop, animals to fish;Ships~4~1 Kings 9:26~A fleet built at Ezion Geber;Apes and peacocks~4~1 Kings 10:22~Brought by the ships of Tarshish;Cedar~4~1 Kings 5:6~From Lebanon, supplied by Hiram
C^Solomon^Name a person in Solomon's story^Solomon was Bathsheba's son; through the prophet Nathan, God named him Jedidiah, “loved by the Lord” (2 Samuel 12:24–25).^David~1~1 Kings 2:1–2~His father's charge: “Be strong, act like a man”;Bathsheba~1~1 Kings 1:11–17~His mother, who secured his throne;Queen of Sheba~1~1 Kings 10:1~Tested him with hard questions;Hiram~2~1 Kings 5:1~Supplied cedar for the temple;Nathan~2~2 Samuel 12:24–25~Named him Jedidiah, “loved by the LORD”;Adonijah~2~1 Kings 1:5~His brother who tried to take the throne;Rehoboam~2~1 Kings 11:43~His son and successor;Pharaoh's daughter~3~1 Kings 3:1~A political marriage alliance with Egypt;Jeroboam~3~1 Kings 11:26~His official who rebelled;Zadok~3~1 Kings 1:39~The priest who anointed him;Benaiah~3~1 Kings 2:35~His army commander;Joab~3~1 Kings 2:28–34~Executed at the altar;Shimei~4~1 Kings 2:46~Executed for leaving Jerusalem;Abiathar~4~1 Kings 2:26–27~Removed from the priesthood;Abishag~4~1 Kings 2:17~Adonijah's request for her cost him his life;Naamah~5~1 Kings 14:21~Rehoboam's mother, an Ammonite;Hadad~5~1 Kings 11:14~An Edomite adversary;Rezon~5~1 Kings 11:23~An adversary who ruled in Damascus;Ahijah~5~1 Kings 11:29–31~Tore his cloak into twelve pieces
C^Solomon^Name a book of the Bible linked to Solomon^Psalms 72 and 127 carry Solomon's name in their headings.^Proverbs~1~Proverbs 1:1~“The proverbs of Solomon son of David”;Ecclesiastes~1~Ecclesiastes 1:1~The Teacher, son of David, king in Jerusalem;Song of Songs|Song of Solomon~1~Song of Songs 1:1~“Solomon's Song of Songs”;1 Kings|Kings~2~1 Kings 11:41~Tells his reign;2 Chronicles|Chronicles~2~2 Chronicles 1:1~Begins with his reign;Psalms~3~Psalm 127~Psalms 72 and 127 carry his name
C^Nehemiah^Name an event from Nehemiah's life^Nehemiah was cupbearer to King Artaxerxes when he heard Jerusalem's walls lay in ruins (Nehemiah 1:11).^Rebuilding the walls~1~Nehemiah 6:15~Finished in 52 days;Asking King Artaxerxes for leave~1~Nehemiah 2:4–6~He prayed before answering the king;Hearing the walls were broken~2~Nehemiah 1:3~News from his brother Hanani;Weeping, fasting and praying~2~Nehemiah 1:4~He mourned for days;Workers holding swords~2~Nehemiah 4:17–18~Each worker carried a weapon;Opposed by Sanballat and Tobiah~2~Nehemiah 4:7–8~They plotted to fight against Jerusalem;Wall finished in 52 days~2~Nehemiah 6:15~The enemies realised God had done it;Inspecting the walls at night~3~Nehemiah 2:12–15~He rode out by night with a few men;I am doing a great work and cannot come down~3~Nehemiah 6:3~His reply to Sanballat's invitation;Ezra reads the Law~3~Nehemiah 8:3~From daybreak till noon;Cancelling debts~3~Nehemiah 5:10–12~He made the nobles return land and interest;Throwing Tobiah's furniture out~4~Nehemiah 13:8~Tobiah had moved into a temple storeroom;Sabbath reforms~4~Nehemiah 13:15–21~He stopped trade on the Sabbath;Remember me, O my God~4~Nehemiah 13:31~The last words of the book;Shutting the gates on the Sabbath~4~Nehemiah 13:19~He posted guards at the gates
C^Nehemiah^Name a person in Nehemiah's story^Nehemiah's brother Hanani brought the news about Jerusalem (Nehemiah 1:2).^Artaxerxes~1~Nehemiah 2:1~Nehemiah was his cupbearer;Ezra~1~Nehemiah 8:9~Read the Law with the Levites;Sanballat~1~Nehemiah 4:1~Mocked the builders;Tobiah~2~Nehemiah 4:3~Said a fox could break the wall;Geshem~3~Nehemiah 6:1–2~An Arab who opposed the work;Hanani~3~Nehemiah 1:2~Nehemiah's brother, who brought the news;Eliashib~4~Nehemiah 13:4–7~The priest who gave Tobiah a room;Shemaiah~4~Nehemiah 6:10–12~Hired to frighten Nehemiah;The queen~5~Nehemiah 2:6~She sat beside the king;Noadiah~5~Nehemiah 6:14~A prophetess who tried to intimidate him;Hananiah~5~Nehemiah 7:2~A man of integrity who feared God;Asaph~6~Nehemiah 2:8~Keeper of the king's forest
C^Nehemiah^Name something Nehemiah's builders used or carried^Half the men worked while half held spears; the builders wore swords at their sides (Nehemiah 4:16–18).^Swords~1~Nehemiah 4:18~Each builder wore a sword at his side;Spears~2~Nehemiah 4:13~Families were posted with spears;Trowels|Tools~2~Nehemiah 4:17~They worked with one hand and held a weapon in the other;Trumpet~2~Nehemiah 4:18~The trumpeter stayed beside Nehemiah;Stones~2~Nehemiah 4:2–3~Sanballat sneered at the burnt stones;Timber~3~Nehemiah 2:8~From the king's forest;Bows~3~Nehemiah 4:13~Families stood guard with bows;Letters from the king~3~Nehemiah 2:7–9~Safe passage from the king;Armour~4~Nehemiah 4:16~Half the men stood guard;Shields~4~Nehemiah 4:16~Half the men held them
C^Elijah^Name an event from Elijah's life^Elijah appeared with Moses at Jesus' transfiguration (Matthew 17:3).^Fire from heaven on Mount Carmel~1~1 Kings 18:38~The fire even licked up the water in the trench;Fed by ravens~1~1 Kings 17:6~Bread and meat, morning and evening;Taken up in a whirlwind~1~2 Kings 2:11~With chariots and horses of fire;Widow of Zarephath~1~1 Kings 17:9~Her flour and oil did not run out;Raising the widow's son~2~1 Kings 17:22~The first resurrection recorded in the Bible;Drought~2~1 Kings 17:1~No rain for three and a half years (James 5:17);Still small voice~2~1 Kings 19:12~A gentle whisper;Fleeing from Jezebel~2~1 Kings 19:2–3~He ran for his life after Carmel;Calling Elisha~2~1 Kings 19:19~He threw his cloak around him;Transfiguration~2~Matthew 17:3~He appeared with Moses;Running ahead of Ahab's chariot~3~1 Kings 18:46~The power of the LORD came on him;Hiding by the brook Cherith~3~1 Kings 17:3~He drank from the brook;Under the broom tree~3~1 Kings 19:4~He prayed that he might die;Parting the Jordan~3~2 Kings 2:8~He struck the water with his cloak;Cloud like a man's hand~3~1 Kings 18:44~The sign that rain was coming;Cave on Horeb~3~1 Kings 19:8–9~He travelled forty days to reach it;Fed by an angel~3~1 Kings 19:5–7~Bread baked on hot coals and a jar of water;Confronting Ahab over Naboth~4~1 Kings 21:17–19~“In the place where dogs licked up Naboth's blood”;Fire on the soldiers~4~2 Kings 1:10–12~Fire consumed two captains and their fifties
C^Elijah^Name a person in Elijah's story^Elijah's challenge on Carmel was against 450 prophets of Baal (1 Kings 18:19).^Ahab~1~1 Kings 18:17~He called Elijah the troubler of Israel;Jezebel~1~1 Kings 19:2~She swore to kill him;Elisha~1~1 Kings 19:19–21~His successor, called from ploughing;Baal~2~1 Kings 18:21~“If Baal is God, follow him”;Prophets of Baal~2~1 Kings 18:19~450 of them faced him on Carmel;Widow of Zarephath~2~1 Kings 17:9–16~She fed him with her last flour and oil;Obadiah~3~1 Kings 18:4~He had hidden 100 prophets in caves;Naboth~3~1 Kings 21:1–3~Ahab took his vineyard;Moses~3~Matthew 17:3~Appeared with Elijah at the transfiguration;Jesus~3~Matthew 17:3~Elijah appeared with him on the mountain;John the Baptist~3~Matthew 11:14~“He is the Elijah who was to come”;Ahaziah~4~2 Kings 1:2–4~Ahab's son, told he would die for consulting Baal-Zebub
C^Elijah^Name a place or object in Elijah's story^Elijah had the altar soaked with twelve jars of water before calling down fire (1 Kings 18:33–35).^Mount Carmel~1~1 Kings 18:19~Where he faced the prophets of Baal;Mantle|Cloak~1~2 Kings 2:13~Elisha picked it up when Elijah was taken;Chariot of fire~1~2 Kings 2:11~It separated him from Elisha;Whirlwind~1~2 Kings 2:11~He went up to heaven in it;Ravens~1~1 Kings 17:6~They fed him by the brook;Brook Cherith~2~1 Kings 17:3~He hid there during the drought;Zarephath~2~1 Kings 17:9~A town near Sidon;Jordan~2~2 Kings 2:8~He parted it with his cloak;Altar~2~1 Kings 18:30~He repaired the LORD's broken altar;Flour and oil~2~1 Kings 17:14~They did not run out until the rain came;Broom tree|Juniper~3~1 Kings 19:4~He sat under it and asked to die;Mount Horeb|Sinai~3~1 Kings 19:8~The mountain of God, forty days' journey away;Twelve stones~3~1 Kings 18:31~One for each tribe of Jacob;Jars of water~3~1 Kings 18:33–34~Four jars, poured three times;Bread and meat~3~1 Kings 17:6~Brought by ravens morning and evening;Cave~3~1 Kings 19:9~Where God asked, “What are you doing here, Elijah?”;Small cloud~3~1 Kings 18:44~As small as a man's hand;Bull~3~1 Kings 18:23~He cut it into pieces on the wood;Trench~4~1 Kings 18:32~He soaked the offering until it filled with water
C^Lois and Eunice^Name a person in the story of Lois and Eunice^Paul says Timothy's “sincere faith” lived first in his grandmother Lois and his mother Eunice (2 Timothy 1:5).^Timothy~1~2 Timothy 1:5~Lois's grandson and Eunice's son;Lois~1~2 Timothy 1:5~His grandmother, whose faith came first;Eunice~1~2 Timothy 1:5~His mother, a Jewish believer (Acts 16:1);Paul~1~2 Timothy 1:2~He called Timothy his dear son;Timothy's Greek father~3~Acts 16:1~Timothy's father was Greek;Silas~4~Acts 16:1–3~He was travelling with Paul when Timothy joined
C^Lois and Eunice^Name something Lois and Eunice passed down to Timothy^“From infancy you have known the Holy Scriptures, which are able to make you wise for salvation” (2 Timothy 3:15).^Faith|Sincere faith~1~2 Timothy 1:5~Sincere faith lived first in Lois and Eunice;Scriptures|Holy Scriptures~1~2 Timothy 3:15~He knew them from infancy;Knowledge of God~2~2 Timothy 3:15~Scripture made him wise for salvation;Teaching from childhood~2~2 Timothy 3:15~From infancy;Wisdom for salvation~3~2 Timothy 3:15~Through faith in Christ Jesus;Love~4~2 Timothy 1:13~Paul urges him to keep the faith and love he heard;Prayer~4~2 Timothy 1:3~Paul prayed for him night and day;Example~4~2 Timothy 3:14~He knew those from whom he had learned it
C^Lois and Eunice^Name a place connected to Timothy's family^Acts 16:1 introduces Timothy at Lystra — son of a Jewish believing mother and a Greek father.^Lystra~1~Acts 16:1~Where Paul met Timothy;Derbe~2~Acts 16:1~Paul came to Derbe and Lystra;Iconium~3~Acts 16:2~Believers there spoke well of Timothy;Ephesus~3~1 Timothy 1:3~Timothy was left to lead the church there;Galatia~4~Acts 16:6~Lystra lay in the Roman province of Galatia
C^Zacchaeus^Name something from Zacchaeus' story^“The Son of Man came to seek and to save the lost” — Jesus' last word on Zacchaeus (Luke 19:10).^Sycamore tree|Sycamore-fig|Tree~1~Luke 19:4~He ran ahead and climbed it;Short|Short in stature~1~Luke 19:3~He could not see over the crowd;Tax collector|Chief tax collector~1~Luke 19:2~A chief tax collector;Jericho~1~Luke 19:1~Jesus was passing through;Half his goods to the poor~1~Luke 19:8~He gave it away freely;Repay four times|Fourfold~1~Luke 19:8~Four times what the law usually required;Came to seek and save the lost~1~Luke 19:10~Jesus' last word on his story;Rich|Wealthy~2~Luke 19:2~He was wealthy;Crowd~2~Luke 19:3~It blocked his view;Today salvation has come to this house~2~Luke 19:9~Jesus' words to him;Dinner at his house~2~Luke 19:5~Jesus invited himself;Hurry and come down~2~Luke 19:5~Jesus called him by name;Grumbling crowd|Guest of a sinner~3~Luke 19:7~“He has gone to be the guest of a sinner”;Son of Abraham~3~Luke 19:9~Jesus restored his place in Israel;Welcomed him joyfully~4~Luke 19:6~He came down at once
C^Zacchaeus^Name a tax collector or “sinner” Jesus welcomed^Jesus was called “a friend of tax collectors and sinners” (Luke 7:34).^Zacchaeus~1~Luke 19:5~Jesus invited himself to his house;Matthew|Levi~1~Matthew 9:9~Called from his tax booth;Woman at the well|Samaritan woman~2~John 4:7~Jesus asked her for a drink;Woman caught in adultery~2~John 8:11~“Neither do I condemn you”;Mary Magdalene~2~Luke 8:2~Seven demons had gone out of her;Thief on the cross~2~Luke 23:43~Promised paradise that day;Sinful woman who anointed his feet~3~Luke 7:37–48~Her sins, which were many, were forgiven;Tax collector in the temple~3~Luke 18:13~He went home justified
C^Blind Bartimaeus^Name something from blind Bartimaeus' story^Mark alone names him: Bartimaeus means “son of Timaeus” (Mark 10:46). Matthew 20 tells of two blind men.^Jericho~1~Mark 10:46~Jesus was leaving the city;Cloak~1~Mark 10:50~He threw it aside and came to Jesus;Son of David, have mercy on me~1~Mark 10:47~He called Jesus by a Messianic title;Jesus stopped|Jesus stood still~1~Mark 10:49~Jesus stood still and called him;What do you want me to do for you~1~Mark 10:51~Jesus asked him directly;Your faith has healed you~1~Mark 10:52~Jesus' words as he healed him;Beggar~1~Mark 10:46~He sat by the roadside begging;Shouted all the more~2~Mark 10:48~The more they rebuked him, the louder he cried;The crowd told him to be quiet~2~Mark 10:48~Many rebuked him;Rabbi, I want to see|Rabboni~2~Mark 10:51~His request;Followed Jesus along the road~2~Mark 10:52~He followed Jesus straight away;Son of Timaeus|Timaeus~2~Mark 10:46~Bar-Timaeus means son of Timaeus;Take heart, he is calling you~3~Mark 10:49~The crowd's words once Jesus called him;Roadside~3~Mark 10:46~Where he sat begging
C^Blind Bartimaeus^Name a time Jesus healed someone of blindness^For the man born blind, Jesus made mud with saliva and sent him to wash in the pool of Siloam (John 9:6–7).^Bartimaeus~1~Mark 10:46–52~Healed outside Jericho;Man born blind~1~John 9:1–7~He washed in the Pool of Siloam;Two blind men~2~Matthew 9:27–30~“According to your faith let it be done to you”;Blind man at Bethsaida~2~Mark 8:22–25~Healed in two stages;Blind and mute man~4~Matthew 12:22~He could then both speak and see
C^Ruth^Name a person in Ruth's story^Ruth was a Moabite; she became great-grandmother of King David (Ruth 4:17).^Naomi~1~Ruth 1:16~Ruth would not leave her mother-in-law;Boaz~1~Ruth 2:1~A relative of Elimelech;Orpah~1~Ruth 1:14~She kissed Naomi and turned back;Obed~2~Ruth 4:17~Her son, grandfather of David;Elimelech~2~Ruth 1:2~Naomi's husband, who died in Moab;Mahlon~2~Ruth 4:10~Ruth's first husband;David~2~Ruth 4:22~Her great-grandson;Kilion|Chilion~3~Ruth 1:5~Orpah's husband;Jesse~3~Ruth 4:22~Her grandson;The closer redeemer~4~Ruth 3:12~He gave up his right to redeem;The reapers~5~Ruth 2:3~She gleaned behind them;The elders~5~Ruth 4:9~They witnessed Boaz's redemption
C^Ruth^Name an event from Ruth's story^“Where you go I will go, and where you stay I will stay. Your people will be my people and your God my God” (Ruth 1:16).^Where you go I will go~1~Ruth 1:16~“Your people will be my people and your God my God”;Gleaning in Boaz's field~1~Ruth 2:3~She happened to come to his field;Returning to Bethlehem~1~Ruth 1:22~They arrived at the start of the barley harvest;Boaz redeems her~1~Ruth 4:9–10~He bought Elimelech's land and took Ruth as his wife;Marrying Boaz~1~Ruth 4:13~The LORD enabled her to conceive;Lying at Boaz's feet on the threshing floor~2~Ruth 3:7–9~“Spread the corner of your garment over me”;Birth of Obed~2~Ruth 4:13–17~The women said Naomi had a son;Orpah turns back~2~Ruth 1:14~She went back to her people and gods;Her husband dies~2~Ruth 1:5~Naomi lost her husband and both sons;Boaz leaves extra grain~3~Ruth 2:16~He told his men to pull out stalks for her;Sandal exchanged at the gate~3~Ruth 4:7–8~The custom for sealing a transaction;Six measures of barley~4~Ruth 3:15~A gift for Naomi;Meal with Boaz~4~Ruth 2:14~Bread dipped in wine vinegar and roasted grain
C^Ruth^Name a descendant of Ruth^Ruth is one of four women named in Jesus' genealogy before Mary (Matthew 1:5).^Obed~1~Ruth 4:17~Her son;Jesse~1~Ruth 4:22~Her grandson;David~1~Ruth 4:22~Her great-grandson;Jesus~1~Matthew 1:5–16~Matthew names Ruth in Jesus' genealogy;Solomon~3~Matthew 1:6~Her great-great-grandson
C^Gideon^Name something from Gideon's story^Gideon was threshing wheat in a winepress, hiding from Midian, when the angel called him “mighty warrior” (Judges 6:11–12).^Fleece~1~Judges 6:37~He asked for the sign twice;300 men~1~Judges 7:7~God chose the 300 who lapped;Trumpets~1~Judges 7:16~One in every man's hand;Clay jars|Pitchers~1~Judges 7:16~With torches inside;Torches~1~Judges 7:16~Hidden in the jars until the shout;Angel of the Lord~1~Judges 6:12~Appeared under the oak at Ophrah;Midianites~1~Judges 6:1~They oppressed Israel for seven years;Mighty warrior|Mighty man of valour~1~Judges 6:12~How the angel greeted him;Winepress~2~Judges 6:11~He was threshing wheat there to hide it;Lapping water~2~Judges 7:5–6~Those who lapped like dogs were chosen;Altar of Baal~2~Judges 6:25–28~He tore it down at night;The sword of the Lord and of Gideon~2~Judges 7:20~The battle cry;Asherah pole~3~Judges 6:25~He cut it down;Barley loaf dream~3~Judges 7:13–14~A Midianite dreamed a loaf toppled their camp;Ephod~3~Judges 8:27~It became a snare to his family;Fire from the rock~3~Judges 6:21~It consumed the meat and bread;The Lord is peace|Jehovah Shalom~3~Judges 6:24~The name of the altar he built;Gold earrings~4~Judges 8:24–26~1,700 shekels of gold
C^Gideon^Name a person or group in Gideon's story^After Gideon tore down Baal's altar he was nicknamed Jerubbaal — “let Baal contend” (Judges 6:32).^Angel of the Lord~1~Judges 6:11~Found him threshing in a winepress;Midianites~1~Judges 6:6~They impoverished Israel;Jerubbaal~2~Judges 6:32~Gideon's other name, “let Baal contend”;Joash~2~Judges 6:11~His father, who defended him;Purah~3~Judges 7:10~His servant who went down to the camp with him;Oreb~3~Judges 7:25~A Midianite leader, killed at a rock;Zeeb~3~Judges 7:25~A Midianite leader, killed at a winepress;Abimelech~3~Judges 8:31~His son, who later killed his brothers;Zebah~4~Judges 8:21~A Midianite king he killed;Zalmunna~4~Judges 8:21~A Midianite king he killed;Jotham~4~Judges 9:5~His youngest son, the only one to escape;Amalekites~4~Judges 6:33~Allied with Midian;Ephraimites~4~Judges 8:1~They complained they had not been called;Men of Succoth~5~Judges 8:16~He punished them for refusing bread;Men of Penuel~5~Judges 8:17~He pulled down their tower
C^Gideon^Name a sign or test from Gideon's story^God cut Gideon's army from 32,000 to 300 so Israel couldn't boast in its own strength (Judges 7:2–7).^Wet fleece, dry ground~1~Judges 6:37–38~He wrung out a bowlful of water;Dry fleece, wet ground~1~Judges 6:39–40~He asked God not to be angry;Fire consumed the offering~2~Judges 6:21~Fire flared from the rock;Lapping water like dogs~2~Judges 7:5–7~Three hundred lapped;Army cut from 32,000 to 300~2~Judges 7:2–7~So Israel could not boast;Sending home the fearful~3~Judges 7:3~22,000 went home;Overheard dream~3~Judges 7:13–15~He worshipped when he heard it
C^The Woman Caught in Adultery^Name something from the story of the woman caught in adultery^The accusers left one by one, beginning with the oldest (John 8:9).^Let him who is without sin cast the first stone~1~John 8:7~Jesus' answer to her accusers;Neither do I condemn you~1~John 8:11~Jesus' words to her;Go and sin no more~1~John 8:11~His final word to her;Jesus wrote on the ground~1~John 8:6~The only time the Gospels say Jesus wrote;Pharisees|Scribes~1~John 8:3~They brought her to test Jesus;Stones~1~John 8:5~The law they quoted;Law of Moses~2~John 8:5~They asked what Moses commanded;Temple courts~2~John 8:2~Where Jesus was teaching;The oldest left first~2~John 8:9~They left one by one, the older ones first;Mount of Olives~3~John 8:1~Where Jesus spent the night before;Her accusers~3~John 8:10~“Where are they? Has no one condemned you?”;John 8~3~John 8:1–11~The passage is missing from the earliest manuscripts;Early in the morning~4~John 8:2~At dawn Jesus was in the temple courts
C^The Woman Caught in Adultery^Name someone Jesus showed undeserved grace to^“While we were still sinners, Christ died for us” (Romans 5:8).^Woman caught in adultery~1~John 8:11~“Neither do I condemn you”;Zacchaeus~1~Luke 19:9~“Today salvation has come to this house”;Thief on the cross~1~Luke 23:43~Paradise that very day;Woman at the well|Samaritan woman~1~John 4:10~Offered living water;Peter~2~John 21:17~Restored after his denials;Mary Magdalene~2~Luke 8:2~Freed from seven demons;Matthew~2~Matthew 9:9–13~Jesus ate with tax collectors at his house;Sinful woman who anointed his feet~3~Luke 7:47–48~Her many sins were forgiven;Malchus~3~Luke 22:51~Healed the ear of a man arresting him;Thomas~3~John 20:27~Shown his wounds after doubting;Bartimaeus~3~Mark 10:52~Healed after the crowd tried to hush him;A leper~3~Mark 1:41~Jesus touched him;Centurion~4~Matthew 8:13~A Gentile soldier whose servant was healed;Jairus~4~Mark 5:36~“Don't be afraid, just believe”
C^Daughters of Zelophehad^Name one of the daughters of Zelophehad^The five sisters are named in Numbers 26:33, 27:1 and 36:11 and Joshua 17:3.^Mahlah~1~Numbers 27:1~Listed first of the five sisters;Noa~1~Numbers 27:1~One of the five sisters who spoke to Moses together;Tirzah~1~Numbers 27:1~Shares her name with a city that later became Israel's capital;Hoglah~2~Numbers 27:1~Her inheritance is confirmed again in Joshua 17:3;Milcah~2~Numbers 27:1~Shares her name with Abraham's sister-in-law
C^Daughters of Zelophehad^Name something from the daughters of Zelophehad's story^God told Moses, “The daughters of Zelophehad speak right” (Numbers 27:7, KJV).^Inheritance~1~Numbers 27:7~God told Moses to give them their father's inheritance;Land~1~Joshua 17:4~They received land among their father's brothers;Moses~1~Numbers 27:5~He brought their case before the LORD;Zelophehad~1~Numbers 27:3~He died in the wilderness with no sons;God said they were right~1~Numbers 27:7~“What Zelophehad's daughters are saying is right”;Eleazar the priest~2~Numbers 27:2~They stood before him at the tent of meeting;Tribe of Manasseh~2~Numbers 27:1~They were from the clans of Manasseh;Married within their tribe~2~Numbers 36:10–12~They married their cousins on their father's side;A new law for daughters~2~Numbers 27:8~If a man dies without a son, his inheritance goes to his daughter;Entrance of the tent of meeting~3~Numbers 27:2~Where they made their case;Joshua~3~Joshua 17:4~They reminded Joshua of the LORD's command;Why should our father's name disappear~3~Numbers 27:4~Their argument to Moses;Numbers 27~3~Numbers 27:1–11~Where their story begins;Hepher~4~Numbers 27:1~Their great-grandfather;Wilderness~4~Numbers 27:3~Where their father died;Numbers 36~4~Numbers 36:1–12~Their family raised a follow-up question;Gilead~5~Numbers 27:1~Their great-great-grandfather
C@2026-11-25^Daughters of Zelophehad^Name a member of Zelophehad's family named in Numbers 27:1^Numbers 27:1 traces the five sisters back through Zelophehad, Hepher, Gilead, Makir (Machir) and Manasseh to Joseph.^Zelophehad~1~Numbers 27:1~Their father, who had no sons;Joseph~1~Numbers 27:1~The patriarch of their family line;Manasseh~1~Numbers 27:1~Joseph's son, their tribe's ancestor;Mahlah~2~Numbers 27:1~Listed first of the five sisters;Tirzah~2~Numbers 27:1~Shares her name with a later capital city;Noa|Noah~2~Numbers 27:1~One of the five sisters;Hoglah~3~Numbers 27:1~One of the five sisters;Milcah|Milkah~3~Numbers 27:1~Shares her name with Abraham's sister-in-law;Gilead~5~Numbers 27:1~Son of Makir;Hepher~5~Numbers 27:1~Their grandfather;Makir|Machir~6~Numbers 27:1~Son of Manasseh
C@2026-11-26^Joseph^Name a place in Joseph's story^Joseph's bones were carried up out of Egypt and buried at Shechem (Joshua 24:32).^Egypt|Land of Egypt~1~Genesis 37:28~The Ishmeelites who bought him carried him into Egypt;Canaan|Land of Canaan~1~Genesis 37:1~His father Jacob's home, where Joseph grew up;The pit|Pit|Well|Cistern~1~Genesis 37:24~His brothers threw him into an empty pit;Prison|The prison|Jail|Dungeon~1~Genesis 39:20~Potiphar put him in the king's prison;Potiphar's house|Potiphar's household~2~Genesis 39:1–2~Sold as a slave, he prospered in Potiphar's house;Goshen|Land of Goshen~2~Genesis 45:10~The land he invited his family to settle;Shechem~3~Genesis 37:12~His brothers were feeding the flock there when Jacob sent him;Dothan~3~Genesis 37:17~Where he found his brothers, who then sold him;Hebron|Vale of Hebron~3~Genesis 37:14~Jacob sent him out from the vale of Hebron;Gilead~4~Genesis 37:25~The Ishmeelite caravan that bought him came from Gilead;Beersheba|Beer-sheba~4~Genesis 46:1~Jacob offered sacrifices here on the way to Joseph;Machpelah|Cave of Machpelah~4~Genesis 50:13~Joseph and his brothers buried Jacob in this cave;On|Heliopolis~5~Genesis 41:45~His father-in-law Poti-pherah was priest of On;Rameses|Land of Rameses~5~Genesis 47:11~He gave his family land in Rameses, the best of Egypt;Atad|Threshingfloor of Atad~6~Genesis 50:10~He mourned his father there for seven days
C@2026-11-27^Moses^Name a place in Moses' story^Moses saw the promised land from the top of Pisgah but died in Moab (Deuteronomy 34:1–5).^Egypt|Land of Egypt~1~Exodus 2:23~Born there, he later led Israel out of it;Red Sea~1~Exodus 15:4~Pharaoh's army drowned there after Israel crossed;Mount Sinai|Sinai~1~Exodus 19:20~God came down on the mount and called Moses up;Midian|Land of Midian~2~Exodus 2:15~He fled there from Pharaoh;Horeb|Mount Horeb|Mountain of God~2~Exodus 3:1~He saw the burning bush there;Canaan|Land of Canaan|Promised land~2~Exodus 6:4~The land God promised, which Moses only saw;Mount Nebo|Nebo|Pisgah~2~Deuteronomy 34:1~He viewed the promised land from its top;Moab|Land of Moab~2~Deuteronomy 34:5~Where Moses died and was buried;Goshen|Land of Goshen~3~Exodus 9:26~The only place spared from the hail;Jordan|River Jordan|Jordan River~3~Deuteronomy 3:27~God told him he would not cross it;The river|Nile|River Nile~3~Exodus 2:3~His mother hid baby Moses in reeds there;Marah~3~Exodus 15:23~He made the bitter water sweet with a tree;Rephidim~4~Exodus 17:1~He struck the rock there for water;Massah|Meribah|Massah and Meribah~4~Exodus 17:7~He named the place where Israel tested God;Elim~4~Exodus 15:27~Israel camped by twelve wells and seventy palms;Wilderness of Sin|Desert of Sin~4~Exodus 16:1~Where God first sent manna;Kadesh~5~Numbers 20:1~Where Miriam died and he struck the rock;Mount Hor|Hor~5~Numbers 20:22~Where he saw Aaron die;Rameses|Raamses~5~Exodus 12:37~The Exodus journey set out from there;Succoth~5~Exodus 12:37~Israel's first stop after leaving Rameses

`;
