const messages = {
  data: [
    {
      nickName: 'user1',
      timeStamp: '21:12 04.03.2024',
      messageText: 'Hello!',
    },
    {
      nickName: 'user1',
      timeStamp: '21:12 04.03.2024',
      messageText: 'lalala',
    },
  ],
  users: new Set(['user1(default)']),

  addMessage(message) {
    this.data.push(message);
  },
};

module.exports = messages;
