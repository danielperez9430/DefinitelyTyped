import TelegramBot = require("node-telegram-bot-api");

const MyTelegramBot = new TelegramBot("token", { webHook: { host: "myhost" } });

MyTelegramBot.startPolling({ restart: true });
MyTelegramBot.stopPolling();
MyTelegramBot.isPolling();
MyTelegramBot.openWebHook();
MyTelegramBot.closeWebHook();
MyTelegramBot.hasOpenWebHook();
MyTelegramBot.getMe();
MyTelegramBot.getMe().then((value: TelegramBot.User) => value.username);
MyTelegramBot.logOut();
MyTelegramBot.close();
MyTelegramBot.setWebHook("http://typescriptlang.org");
MyTelegramBot.setWebHook("http://typescriptlang.org", { max_connections: 100 });
MyTelegramBot.setWebHook(
    "http://typescriptlang.org",
    { max_connections: 100 },
    { filename: "filename", contentType: "application/octet-stream" },
);
MyTelegramBot.deleteWebHook();
MyTelegramBot.getWebHookInfo();
MyTelegramBot.getUpdates({ timeout: 10 });
MyTelegramBot.processUpdate({ update_id: 1 });
MyTelegramBot.sendMessage(1234, "test-text", { disable_web_page_preview: true, allow_sending_without_reply: true });
MyTelegramBot.sendMessage(1234, "test-ForceReply-placeholder", {
    reply_markup: {
        force_reply: true,
        input_field_placeholder: "Placeholder here",
    },
});
MyTelegramBot.sendMessage(1234, "test-ForceReply-no-placeholder", {
    reply_markup: {
        force_reply: true,
    },
});
MyTelegramBot.sendMessage(1234, "test-InlineKeyboardButton-CopyTextButton", {
    reply_markup: {
        inline_keyboard: [
            [
                {
                    text: `Copy Text`,
                    copy_text: {
                        text: "copy text",
                    },
                },
            ],
        ],
    },
});
MyTelegramBot.sendMessage(1234, "test-ReplyKeyboardMarkup-placeholder", {
    reply_markup: {
        keyboard: [
            [
                {
                    text: `Status: connected`,
                    request_location: true,
                },
                {
                    text: `Status: idle`,
                },
            ],
        ],
        is_persistent: true,
        input_field_placeholder: "text goes here",
    },
});
MyTelegramBot.sendMessage(1234, "test-ReplyKeyboardMarkup-no-placeholder", {
    reply_markup: {
        keyboard: [
            [
                {
                    text: `Status: connected`,
                    request_location: true,
                },
                {
                    text: `Status: idle`,
                },
            ],
        ],
    },
});
MyTelegramBot.sendMessage(1234, "test-text", { reply_parameters: { message_id: 4321 } });
MyTelegramBot.sendMessage(1234, "test-text", { disable_web_page_preview: true, allow_sending_without_reply: true });
const res: TelegramBot.InlineQueryResultArticle = {
    id: "1",
    type: "article",
    title: "Foo",
    input_message_content: {
        message_text: "Bar",
    },
};
MyTelegramBot.answerInlineQuery("queryId", [res, res, res], { is_personal: true });
MyTelegramBot.forwardMessage(1234, 5678, 90, { disable_notification: true });
MyTelegramBot.copyMessage(1234, 5678, 90, { disable_notification: true, allow_sending_without_reply: false });
MyTelegramBot.sendPhoto(1234, "photo/path");
MyTelegramBot.sendPhoto(1234, "photo/path", { caption: "Foo" });
MyTelegramBot.sendPhoto(1234, "photo/path", {
    caption: "Foo",
    caption_entities: [{ type: "bold", offset: 0, length: 2 }],
});
MyTelegramBot.sendPhoto(
    1234,
    "photo/path",
    { caption: "Foo", parse_mode: "HTML" },
    { filename: "filename", contentType: "application/octet-stream" },
);
// @ts-expect-error
MyTelegramBot.sendPhoto(1234, "photo/path", { filename: "filename", contentType: "application/octet-stream" });
MyTelegramBot.sendAudio(1234, "audio/path");
MyTelegramBot.sendAudio(1234, "audio/path", { caption: "Foo" });
MyTelegramBot.sendAudio(
    1234,
    "audio/path",
    { caption: "Foo", parse_mode: "Markdown" },
    { filename: "filename", contentType: "application/octet-stream" },
);
// @ts-expect-error
MyTelegramBot.sendAudio(1234, "audio/path", { filename: "filename", contentType: "application/octet-stream" });
MyTelegramBot.sendAudio(1234, "audio/path", {
    caption: "Foo",
    caption_entities: [{ type: "bold", offset: 0, length: 2 }],
});
MyTelegramBot.sendDocument(1234, "doc/path");
MyTelegramBot.sendDocument(1234, "doc/path", { caption: "Foo" });
MyTelegramBot.sendDocument(
    1234,
    "doc/path",
    { caption: "Foo", parse_mode: "HTML" },
    { filename: "filename", contentType: "application/octet-stream" },
);
MyTelegramBot.sendDocument(1234, "doc/path", {
    caption: "Foo",
    caption_entities: [{ type: "bold", offset: 0, length: 2 }],
});
// @ts-expect-error
MyTelegramBot.sendDocument(1234, "doc/path", { filename: "filename", contentType: "application/octet-stream" });
MyTelegramBot.sendPoll(1234, "question", ["answer1", "answer2"], { type: "regular" });
MyTelegramBot.sendSticker(1234, "sticker/path");
MyTelegramBot.sendSticker(1234, "sticker/path", { reply_to_message_id: 5678 });
MyTelegramBot.sendSticker(
    1234,
    "sticker/path",
    { reply_to_message_id: 5678 },
    { filename: "filename", contentType: "application/octet-stream" },
);
// @ts-expect-error
MyTelegramBot.sendSticker(1234, "sticker/path", { filename: "filename", contentType: "application/octet-stream" });
MyTelegramBot.sendVideo(1234, "video/path");
MyTelegramBot.sendVideo(1234, "video/path", { caption: "Foo" });
MyTelegramBot.sendVideo(
    1234,
    "video/path",
    { caption: "Foo", parse_mode: "MarkdownV2" },
    { filename: "filename", contentType: "application/octet-stream" },
);
MyTelegramBot.sendVideo(1234, "video/path", {
    caption: "Foo",
    caption_entities: [{ type: "bold", offset: 0, length: 2 }],
});
// @ts-expect-error
MyTelegramBot.sendVideo(1234, "video/path", { filename: "filename", contentType: "application/octet-stream" });
MyTelegramBot.sendVideoNote(1234, "video/path");
MyTelegramBot.sendVideoNote(1234, "video/path", { disable_notification: true });
MyTelegramBot.sendVideoNote(
    1234,
    "video/path",
    { disable_notification: true },
    { filename: "filename", contentType: "application/octet-stream" },
);
// @ts-expect-error
MyTelegramBot.sendVideoNote(1234, "video/path", { filename: "filename", contentType: "application/octet-stream" });
MyTelegramBot.sendVoice(1234, "voice/path");
MyTelegramBot.sendVoice(1234, "voice/path", { caption: "Foo" });
MyTelegramBot.sendVoice(
    1234,
    "voice/path",
    { caption: "Foo", parse_mode: "HTML" },
    { filename: "filename", contentType: "application/octet-stream" },
);
// @ts-expect-error
MyTelegramBot.sendVoice(1234, "voice/path", { filename: "filename", contentType: "application/octet-stream" });
MyTelegramBot.sendVoice(1234, "voice/path", {
    caption: "Foo",
    caption_entities: [{ type: "bold", offset: 0, length: 2 }],
});
MyTelegramBot.sendAnimation(1234, "animation/path", { caption: "Foo", duration: 100, width: 200, height: 300 });
MyTelegramBot.sendAnimation(1234, "animation/path", {
    caption: "Foo",
    caption_entities: [{ type: "bold", offset: 0, length: 2 }],
    duration: 100,
    width: 200,
    height: 300,
});
MyTelegramBot.sendChatAction(1234, "typing");
MyTelegramBot.banChatMember(1234, 5678);
MyTelegramBot.banChatMember(1234, 5678, {
    until_date: Date.now() + 60000,
    revoke_messages: true,
});
MyTelegramBot.unbanChatMember(1234, 5678);
MyTelegramBot.restrictChatMember(1234, 5678, {
    until_date: 12345,
    use_independent_chat_permissions: true,
    can_invite_users: true,
    can_add_web_page_previews: true,
    can_send_polls: false,
});
MyTelegramBot.restrictChatMember(1234, 5678, {
    until_date: 12345,
    use_independent_chat_permissions: true,
    permissions: "asfasdfsdfdasf",
});
MyTelegramBot.restrictChatMember(1234, 5678, {
    until_date: 12345,
    use_independent_chat_permissions: true,

    permissions: {
        can_add_web_page_previews: true,
    },
});
MyTelegramBot.promoteChatMember(1234, 5678, { can_change_info: true });
MyTelegramBot.exportChatInviteLink(1234);
MyTelegramBot.createChatInviteLink(1234, {
    name: "Foo",
    expire_date: 1234,
    member_limit: 1234,
    creates_join_request: true,
});
MyTelegramBot.editChatInviteLink(1234, "", {
    name: "Foo",
    expire_date: 1234,
    member_limit: 1234,
    creates_join_request: true,
});
MyTelegramBot.sendMediaGroup(1234, [
    {
        type: "photo",
        media: "My/File/ID",
        caption: "Media Group",
        caption_entities: [{ type: "custom_emoji", offset: 0, length: 2, custom_emoji_id: "test_emoji" }],
    },
]);
MyTelegramBot.revokeChatInviteLink(1234, "");
MyTelegramBot.approveChatJoinRequest(1234, 5678);
MyTelegramBot.approveChatJoinRequest(1234, 5678, {});
MyTelegramBot.declineChatJoinRequest(1234, 5678);
MyTelegramBot.declineChatJoinRequest(1234, 5678, {});
MyTelegramBot.setChatPhoto(1234, "My/File/ID", {}, { filename: "filename", contentType: "application/octet-stream" });
MyTelegramBot.deleteChatPhoto(1234);
MyTelegramBot.setChatTitle(1234, "Chat Title");
MyTelegramBot.setChatDescription(1234, "Chat Description");
MyTelegramBot.pinChatMessage(1234, 12);
MyTelegramBot.pinChatMessage(1234, 12, { disable_notification: false });
MyTelegramBot.unpinChatMessage(1234, { message_id: 12 });
MyTelegramBot.unpinAllChatMessages(1234);
MyTelegramBot.answerCallbackQuery("432832");
MyTelegramBot.answerCallbackQuery({ callback_query_id: "432832" });
MyTelegramBot.editMessageText("test-text", { disable_web_page_preview: true });
MyTelegramBot.editMessageCaption("My Witty Caption", {
    message_id: 1245,
    caption_entities: [{ type: "custom_emoji", offset: 0, length: 2, custom_emoji_id: "test_emoji" }],
});
MyTelegramBot.editMessageMedia(
    {
        media: "photo/path",
        type: "photo",
        caption: "this is a test",
        parse_mode: "HTML",
    },
    {
        chat_id: 1234,
        message_id: 9187231,
    },
);
MyTelegramBot.editMessageReplyMarkup(
    {
        inline_keyboard: [
            [
                {
                    text: "Foo",
                },
            ],
        ],
    },
    { message_id: 1244 },
);
MyTelegramBot.getUserProfilePhotos(5678, { limit: 10 });
MyTelegramBot.sendLocation(1234, 100, 200, {
    reply_to_message_id: 1234,
    live_period: 60,
    horizontal_accuracy: 10,
    heading: 10,
    proximity_alert_radius: 10,
});
MyTelegramBot.editMessageLiveLocation(100, 200, { message_id: 1245 });
MyTelegramBot.stopMessageLiveLocation({ message_id: 1245 });
MyTelegramBot.sendVenue(1234, 100, 200, "Venue Title", "123 Fake St.", { reply_to_message_id: 1234 });
MyTelegramBot.sendContact(1234, "345-555-0192", "John", { last_name: "Smith", vcard: "vcard_data" });
MyTelegramBot.getFile("My/File/ID");
MyTelegramBot.getFileLink("My/File/ID");
MyTelegramBot.getFileStream("My/File/ID");
MyTelegramBot.downloadFile("My/File/ID", "mydownloaddir/");
MyTelegramBot.onText(/regex/, (msg, match) => {});
MyTelegramBot.removeTextListener(/regex/);
MyTelegramBot.clearTextListeners();
MyTelegramBot.onReplyToMessage(1234, 5678, msg => {});
MyTelegramBot.removeReplyListener(5466);
MyTelegramBot.clearReplyListeners();
MyTelegramBot.getChat(1234);
MyTelegramBot.getChatAdministrators(1234);
MyTelegramBot.getChatMemberCount(1234);
MyTelegramBot.getChatMember(1234, 5678);
MyTelegramBot.leaveChat(1234);
MyTelegramBot.setChatStickerSet(1234, "sticker");
MyTelegramBot.deleteChatStickerSet(1234);
MyTelegramBot.sendGame(1234, "MygameName", { reply_to_message_id: 1234 });
MyTelegramBot.setGameScore(1234, 99, { message_id: 1234 });
MyTelegramBot.getGameHighScores(1234, { message_id: 1234 });
MyTelegramBot.deleteMessage(1234, 5678);
MyTelegramBot.sendInvoice(
    1234,
    "Invoice Title",
    "Invoice Description",
    "Invoice Payload",
    "Providertoken",
    "Currency",
    [
        {
            label: "$",
            amount: 1200,
        },
    ],
    { is_flexible: true, start_parameter: "start_parameter" },
);
MyTelegramBot.createInvoiceLink(
    "Invoice Title",
    "Invoice Description",
    "Invoice Payload",
    "Providertoken",
    "Currency",
    [
        {
            label: "$",
            amount: 1200,
        },
    ],
    {
        photo_url: "url",
        need_email: false,
        send_phone_number_to_provider: false,
        is_flexible: true,
        subscription_period: 2592000,
        max_tip_amount: 145,
        suggested_tip_amounts: [40, 75, 110, 145],
    },
);
MyTelegramBot.answerShippingQuery("shippingQueryId", true, {
    shipping_options: [
        {
            id: "1",
            title: "Foo",
            prices: [
                {
                    label: "$",
                    amount: 100,
                },
            ],
        },
    ],
});
MyTelegramBot.answerPreCheckoutQuery("preCheckoutQueryId", true, { error_message: "Bar" });
MyTelegramBot.addListener("message", (message: TelegramBot.Message, { type }) => {});
MyTelegramBot.addListener("callback_query", (query: TelegramBot.CallbackQuery) => {});
MyTelegramBot.addListener("inline_query", (query: TelegramBot.InlineQuery) => {});
MyTelegramBot.addListener("poll", (poll: TelegramBot.Poll) => {});
MyTelegramBot.addListener("poll_answer", (answer: TelegramBot.PollAnswer) => {});
MyTelegramBot.addListener("chat_member", (member: TelegramBot.ChatMemberUpdated) => {});
MyTelegramBot.addListener("my_chat_member", (member: TelegramBot.ChatMemberUpdated) => {});
MyTelegramBot.addListener("chosen_inline_result", (result: TelegramBot.ChosenInlineResult) => {});
MyTelegramBot.addListener("channel_post", (message: TelegramBot.Message) => {});
MyTelegramBot.addListener("shipping_query", (query: TelegramBot.ShippingQuery) => {});
MyTelegramBot.addListener("pre_checkout_query", (query: TelegramBot.PreCheckoutQuery) => {});
MyTelegramBot.addListener("polling_error", (error: Error) => {});
MyTelegramBot.on("ready", () => {}); // listening to the custom event
MyTelegramBot.on("message", (message: TelegramBot.Message, { type }) => {});
MyTelegramBot.on("callback_query", (query: TelegramBot.CallbackQuery) => {});
MyTelegramBot.on("inline_query", (query: TelegramBot.InlineQuery) => {});
MyTelegramBot.on("poll", (poll: TelegramBot.Poll) => {});
MyTelegramBot.on("poll_answer", (answer: TelegramBot.PollAnswer) => {});
MyTelegramBot.on("chat_member", (member: TelegramBot.ChatMemberUpdated) => {});
MyTelegramBot.on("my_chat_member", (member: TelegramBot.ChatMemberUpdated) => {});
MyTelegramBot.on("chosen_inline_result", (result: TelegramBot.ChosenInlineResult) => {});
MyTelegramBot.on("channel_post", (message: TelegramBot.Message) => {});
MyTelegramBot.on("shipping_query", (query: TelegramBot.ShippingQuery) => {});
MyTelegramBot.on("pre_checkout_query", (query: TelegramBot.PreCheckoutQuery) => {});
MyTelegramBot.on("polling_error", (error: Error) => {});
MyTelegramBot.on("chat_join_request", (query: TelegramBot.ChatJoinRequest) => {});
MyTelegramBot.once("message", (message: TelegramBot.Message, { type }) => {});
MyTelegramBot.once("callback_query", (query: TelegramBot.CallbackQuery) => {});
MyTelegramBot.once("inline_query", (query: TelegramBot.InlineQuery) => {});
MyTelegramBot.once("poll", (poll: TelegramBot.Poll) => {});
MyTelegramBot.once("poll_answer", (answer: TelegramBot.PollAnswer) => {});
MyTelegramBot.once("chat_member", (member: TelegramBot.ChatMemberUpdated) => {});
MyTelegramBot.once("my_chat_member", (member: TelegramBot.ChatMemberUpdated) => {});
MyTelegramBot.once("chosen_inline_result", (result: TelegramBot.ChosenInlineResult) => {});
MyTelegramBot.once("channel_post", (message: TelegramBot.Message) => {});
MyTelegramBot.once("shipping_query", (query: TelegramBot.ShippingQuery) => {});
MyTelegramBot.once("pre_checkout_query", (query: TelegramBot.PreCheckoutQuery) => {});
MyTelegramBot.once("polling_error", (error: Error) => {});
MyTelegramBot.prependListener("message", (message: TelegramBot.Message, { type }) => {});
MyTelegramBot.prependListener("callback_query", (query: TelegramBot.CallbackQuery) => {});
MyTelegramBot.prependListener("inline_query", (query: TelegramBot.InlineQuery) => {});
MyTelegramBot.prependListener("poll", (poll: TelegramBot.Poll) => {});
MyTelegramBot.prependListener("poll_answer", (answer: TelegramBot.PollAnswer) => {});
MyTelegramBot.prependListener("chat_member", (member: TelegramBot.ChatMemberUpdated) => {});
MyTelegramBot.prependListener("my_chat_member", (member: TelegramBot.ChatMemberUpdated) => {});
MyTelegramBot.prependListener("chosen_inline_result", (result: TelegramBot.ChosenInlineResult) => {});
MyTelegramBot.prependListener("channel_post", (message: TelegramBot.Message) => {});
MyTelegramBot.prependListener("shipping_query", (query: TelegramBot.ShippingQuery) => {});
MyTelegramBot.prependListener("pre_checkout_query", (query: TelegramBot.PreCheckoutQuery) => {});
MyTelegramBot.prependListener("polling_error", (error: Error) => {});
MyTelegramBot.prependOnceListener("message", (message: TelegramBot.Message, { type }) => {});
MyTelegramBot.prependOnceListener("callback_query", (query: TelegramBot.CallbackQuery) => {});
MyTelegramBot.prependOnceListener("inline_query", (query: TelegramBot.InlineQuery) => {});
MyTelegramBot.prependOnceListener("poll", (poll: TelegramBot.Poll) => {});
MyTelegramBot.prependOnceListener("poll_answer", (answer: TelegramBot.PollAnswer) => {});
MyTelegramBot.prependOnceListener("chat_member", (member: TelegramBot.ChatMemberUpdated) => {});
MyTelegramBot.prependOnceListener("my_chat_member", (member: TelegramBot.ChatMemberUpdated) => {});
MyTelegramBot.prependOnceListener("chosen_inline_result", (result: TelegramBot.ChosenInlineResult) => {});
MyTelegramBot.prependOnceListener("channel_post", (message: TelegramBot.Message) => {});
MyTelegramBot.prependOnceListener("shipping_query", (query: TelegramBot.ShippingQuery) => {});
MyTelegramBot.prependOnceListener("pre_checkout_query", (query: TelegramBot.PreCheckoutQuery) => {});
MyTelegramBot.prependOnceListener("polling_error", (error: Error) => {});
MyTelegramBot.removeListener("message", (message: TelegramBot.Message, { type }) => {});
MyTelegramBot.removeListener("callback_query", (query: TelegramBot.CallbackQuery) => {});
MyTelegramBot.removeListener("inline_query", (query: TelegramBot.InlineQuery) => {});
MyTelegramBot.removeListener("poll", (poll: TelegramBot.Poll) => {});
MyTelegramBot.removeListener("poll_answer", (answer: TelegramBot.PollAnswer) => {});
MyTelegramBot.removeListener("chat_member", (member: TelegramBot.ChatMemberUpdated) => {});
MyTelegramBot.removeListener("my_chat_member", (member: TelegramBot.ChatMemberUpdated) => {});
MyTelegramBot.removeListener("chosen_inline_result", (result: TelegramBot.ChosenInlineResult) => {});
MyTelegramBot.removeListener("channel_post", (message: TelegramBot.Message) => {});
MyTelegramBot.removeListener("shipping_query", (query: TelegramBot.ShippingQuery) => {});
MyTelegramBot.removeListener("pre_checkout_query", (query: TelegramBot.PreCheckoutQuery) => {});
MyTelegramBot.removeListener("polling_error", (error: Error) => {});
MyTelegramBot.off("message", (message: TelegramBot.Message, { type }) => {});
MyTelegramBot.off("callback_query", (query: TelegramBot.CallbackQuery) => {});
MyTelegramBot.off("inline_query", (query: TelegramBot.InlineQuery) => {});
MyTelegramBot.off("poll", (poll: TelegramBot.Poll) => {});
MyTelegramBot.off("poll_answer", (answer: TelegramBot.PollAnswer) => {});
MyTelegramBot.off("chat_member", (member: TelegramBot.ChatMemberUpdated) => {});
MyTelegramBot.off("my_chat_member", (member: TelegramBot.ChatMemberUpdated) => {});
MyTelegramBot.off("chosen_inline_result", (result: TelegramBot.ChosenInlineResult) => {});
MyTelegramBot.off("channel_post", (message: TelegramBot.Message) => {});
MyTelegramBot.off("shipping_query", (query: TelegramBot.ShippingQuery) => {});
MyTelegramBot.off("pre_checkout_query", (query: TelegramBot.PreCheckoutQuery) => {});
MyTelegramBot.off("polling_error", (error: Error) => {});
MyTelegramBot.removeAllListeners("message");
MyTelegramBot.removeAllListeners();
MyTelegramBot.listeners("message");
MyTelegramBot.rawListeners("message");
MyTelegramBot.listenerCount("message");
MyTelegramBot.emit("ready"); // emitting a custom event
MyTelegramBot.setChatPermissions(1234, {});
MyTelegramBot.sendDice(1234, { disable_notification: true });
MyTelegramBot.setChatAdministratorCustomTitle(1234, 5678, "some_custom_title");
MyTelegramBot.getMyCommands();
MyTelegramBot.setMyCommands([{ command: "command", description: "description" }]);
MyTelegramBot.setMyCommands([{ command: "command", description: "description" }], { language_code: "ru" });
MyTelegramBot.setMyCommands([{ command: "command", description: "description" }], {
    language_code: "ru",
    scope: { type: "default" },
});
MyTelegramBot.setMyCommands([{ command: "command", description: "description" }], {
    language_code: "ru",
    // @ts-expect-error
    scope: { type: "default", chat_id: 1234 },
});
MyTelegramBot.setMyName({ name: "My Bot" });
MyTelegramBot.setMyName({ name: "My Bot", language_code: "ru" });
MyTelegramBot.setMyName({});
MyTelegramBot.getMyName();
MyTelegramBot.getMyName({ language_code: "en" });
MyTelegramBot.getMyName({ language_code: "ru" });
MyTelegramBot.setMyDescription({ description: "My Bot Description" });
MyTelegramBot.setMyDescription({ description: "My Bot Description", language_code: "ru" });
MyTelegramBot.setMyDescription({});
MyTelegramBot.getMyDescription();
MyTelegramBot.getMyDescription({ language_code: "en" });
MyTelegramBot.getMyDescription({ language_code: "ru" });
MyTelegramBot.setMyShortDescription({ short_description: "Short Description" });
MyTelegramBot.setMyShortDescription({ short_description: "Short Description", language_code: "ru" });
MyTelegramBot.setMyShortDescription({});
MyTelegramBot.getMyShortDescription();
MyTelegramBot.getMyShortDescription({ language_code: "en" });
MyTelegramBot.getMyShortDescription({ language_code: "ru" });
MyTelegramBot.banChatSenderChat(1234, 1234);
MyTelegramBot.unbanChatSenderChat(1234, 1234);
MyTelegramBot.setChatMenuButton({
    chat_id: 1234,
    menu_button: { type: "web_app", text: "WebApp Menu", web_app: { url: "https://github.com" } },
});
MyTelegramBot.setChatMenuButton({
    chat_id: 1234,
    menu_button: { type: "default" },
});
MyTelegramBot.setChatMenuButton({
    chat_id: 1234,
    menu_button: { type: "commands" },
});
MyTelegramBot.setChatMenuButton({});
// @ts-expect-error
MyTelegramBot.setChatMenuButton({ menu_button: { type: "mainer" } });

MyTelegramBot.getChatMenuButton({ chat_id: 1234 });
MyTelegramBot.getChatMenuButton({});
MyTelegramBot.setMyDefaultAdministratorRights({});
MyTelegramBot.setMyDefaultAdministratorRights({ for_channels: true });
MyTelegramBot.setMyDefaultAdministratorRights({
    rights: {
        is_anonymous: true,
        can_manage_chat: true,
        can_delete_messages: false,
        can_manage_video_chats: true,
        can_restrict_members: true,
        can_promote_members: false,
        can_change_info: true,
        can_post_stories: true,
        can_edit_stories: true,
        can_delete_stories: true,
        can_invite_users: false,
        can_post_messages: false,
        can_pin_messages: true,
    },
});
MyTelegramBot.getMyDefaultAdministratorRights({});
MyTelegramBot.answerWebAppQuery("query_id", res);
MyTelegramBot.getStickerSet("custom-set-name");
MyTelegramBot.getCustomEmojiStickers(["123", "986"]);
MyTelegramBot.uploadStickerFile(1234, "my_png_sticker_file");
MyTelegramBot.createNewStickerSet(1234, "short_name", "my sticker set name", "my_png_sticker_file", "hello");
MyTelegramBot.addStickerToSet(1234, "custom_sticker", "sticker_path", "emoji", "png_sticker");
MyTelegramBot.setStickerPositionInSet("sticker_on_position_one", 2);
MyTelegramBot.deleteStickerFromSet("sticker_on_position_one");
MyTelegramBot.setStickerSetThumb(1234, "my_set_thumb", "thumb_file");
MyTelegramBot.setMessageReaction(1234, 1234, {
    reaction: [{ type: "emoji", emoji: "👍" }],
});
MyTelegramBot.sendMessage(1234, "test-InlineKeyboardButton", {
    reply_markup: {
        inline_keyboard: [
            [
                {
                    text: "Registration",
                    callback_data: "reg",
                    icon_custom_emoji_id: "5179278706941624825",
                    style: "primary",
                },
            ],
        ],
    },
});
MyTelegramBot.sendMessage(1234, "test-KeyboardButton", {
    reply_markup: {
        keyboard: [
            [
                {
                    text: "Button",
                    request_contact: false,
                    icon_custom_emoji_id: "5179278706941624825",
                    style: "success",
                },
            ],
        ],
    },
});

// Test new types from Bot API 7.x+

// User with is_premium
const userWithPremium: TelegramBot.User = {
    id: 123,
    is_bot: false,
    first_name: "John",
    is_premium: true,
    added_to_attachment_menu: true,
};

// Birthdate
const birthdate: TelegramBot.Birthdate = {
    day: 1,
    month: 1,
    year: 2000,
};

// Story
const story: TelegramBot.Story = {
    chat: { id: 1234, type: "private" },
    id: 1,
};

// MessageOrigin types
const originUser: TelegramBot.MessageOriginUser = {
    type: "user",
    date: 1234567890,
    sender_user: { id: 123, is_bot: false, first_name: "John" },
};
const originHidden: TelegramBot.MessageOriginHiddenUser = {
    type: "hidden_user",
    date: 1234567890,
    sender_user_name: "Hidden User",
};
const originChat: TelegramBot.MessageOriginChat = {
    type: "chat",
    date: 1234567890,
    sender_chat: { id: 1234, type: "group" },
    author_signature: "Admin",
};
const originChannel: TelegramBot.MessageOriginChannel = {
    type: "channel",
    date: 1234567890,
    chat: { id: 1234, type: "channel" },
    message_id: 42,
};
const messageOrigin: TelegramBot.MessageOrigin = originUser;

// TextQuote
const textQuote: TelegramBot.TextQuote = {
    text: "Quoted text",
    position: 0,
    is_manual: true,
};

// ChatBoost types
const chatBoostSource: TelegramBot.ChatBoostSource = {
    source: "premium",
    user: { id: 123, is_bot: false, first_name: "John" },
};
const chatBoost: TelegramBot.ChatBoost = {
    boost_id: "boost_123",
    add_date: 1234567890,
    expiration_date: 1234567890,
    source: chatBoostSource,
};

// Giveaway
const giveaway: TelegramBot.Giveaway = {
    chats: [{ id: 1234, type: "channel" }],
    winners_selection_date: 1234567890,
    winner_count: 5,
    only_new_members: true,
    prize_star_count: 100,
};

// ReactionTypePaid
const paidReaction: TelegramBot.ReactionTypePaid = {
    type: "paid",
};
const reactionTypes: TelegramBot.ReactionType[] = [
    { type: "emoji", emoji: "👍" },
    { type: "custom_emoji", custom_emoji_id: "123" },
    { type: "paid" },
];

// PaidMediaInfo
const paidMediaInfo: TelegramBot.PaidMediaInfo = {
    star_count: 100,
    paid_media: [
        { type: "preview", width: 100, height: 100 },
        { type: "photo", photo: [{ file_id: "abc", file_unique_id: "def", width: 100, height: 100 }] },
    ],
};

// RefundedPayment
const refundedPayment: TelegramBot.RefundedPayment = {
    currency: "XTR",
    total_amount: 100,
    invoice_payload: "payload",
    telegram_payment_charge_id: "charge_123",
};

// ChatFullInfo
const chatFullInfo: TelegramBot.ChatFullInfo = {
    id: 1234,
    type: "private",
    accent_color_id: 1,
    max_reaction_count: 3,
};

// InputMediaAnimation
const inputMediaAnim: TelegramBot.InputMediaAnimation = {
    type: "animation",
    media: "file_id",
    width: 320,
    height: 240,
};

// InputMediaAudio
const inputMediaAudio: TelegramBot.InputMediaAudio = {
    type: "audio",
    media: "file_id",
    performer: "Artist",
    title: "Song",
};

// InputMediaDocument
const inputMediaDoc: TelegramBot.InputMediaDocument = {
    type: "document",
    media: "file_id",
    disable_content_type_detection: true,
};

// BackgroundType
const bgFill: TelegramBot.BackgroundTypeFill = {
    type: "fill",
    fill: { type: "solid", color: 0xFFFFFF },
    dark_theme_dimming: 50,
};
const chatBackground: TelegramBot.ChatBackground = {
    type: bgFill,
};

// BusinessConnection
const businessConnection: TelegramBot.BusinessConnection = {
    id: "conn_123",
    user: { id: 123, is_bot: false, first_name: "John" },
    user_chat_id: 456,
    date: 1234567890,
    is_enabled: true,
};

// UsersShared
const usersShared: TelegramBot.UsersShared = {
    request_id: 1,
    users: [{ user_id: 123, first_name: "John" }],
};

// InlineQuery with chat_type
const inlineQueryWithType: TelegramBot.InlineQuery = {
    id: "query_123",
    from: { id: 123, is_bot: false, first_name: "John" },
    query: "search text",
    offset: "",
    chat_type: "private",
};

// KeyboardButtonRequestUsers
const requestUsers: TelegramBot.KeyboardButtonRequestUsers = {
    request_id: 1,
    user_is_bot: false,
    max_quantity: 5,
    request_name: true,
    request_photo: true,
};

// InputPollOption
const inputPollOption: TelegramBot.InputPollOption = {
    text: "Option 1",
    text_parse_mode: "HTML",
};

// InputSticker
const inputSticker: TelegramBot.InputSticker = {
    sticker: "file_id_or_url",
    format: "static",
    emoji_list: ["😀"],
};

// SuccessfulPayment with subscription fields
const successfulPayment: TelegramBot.SuccessfulPayment = {
    currency: "XTR",
    total_amount: 100,
    invoice_payload: "payload",
    telegram_payment_charge_id: "charge_123",
    provider_payment_charge_id: "provider_123",
    subscription_expiration_date: 1234567890,
    is_recurring: true,
    is_first_recurring: true,
};

// MessageEntityType blockquote
const blockquoteEntity: TelegramBot.MessageEntity = {
    type: "blockquote",
    offset: 0,
    length: 10,
};

// ChatAction choose_sticker
MyTelegramBot.sendChatAction(1234, "choose_sticker");

// PromoteChatMember with story permissions
MyTelegramBot.promoteChatMember(1234, 5678, {
    can_post_stories: true,
    can_edit_stories: true,
    can_delete_stories: true,
});

// AnswerInlineQuery with button
MyTelegramBot.answerInlineQuery("queryId", [], {
    button: { text: "Open", start_parameter: "start" },
});
