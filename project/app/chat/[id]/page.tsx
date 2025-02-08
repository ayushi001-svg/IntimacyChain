import ChatComponent from "./chat-component";

// List of expert IDs that will be pre-rendered
const experts = ["1", "2", "3"];

export function generateStaticParams() {
  return experts.map((id) => ({
    id: id,
  }));
}

export default function ChatPage({ params }: { params: { id: string } }) {
  return <ChatComponent params={params} />;
}