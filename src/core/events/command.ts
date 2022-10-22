import EventListener from "@/structure/EventListener";

export default new EventListener("interactionCreate", (client, interaction) => {
  if (!interaction.isCommand()) return;
  const cmd = client.commands.get(interaction.commandName);
  if (cmd) {
    cmd.exec(client, interaction);
    client.debug(`Command ${cmd.name} executed`, "core.event.command");
  } else {
    interaction.reply({ content: "Unknown command", ephemeral: true });
    client.warn(`Unknown command ${interaction.commandName} executed`, "core.event.command");
  }
});
