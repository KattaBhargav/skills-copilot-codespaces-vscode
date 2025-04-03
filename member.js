function skillsMember() {
  return {
    name: "member",
    description: "Get a member's skills",
    options: [
      {
        name: "member",
        type: 6,
        description: "The member to get the skills of",
        required: true,
      },
    ],
  };
}