<script lang="ts">
  import { goto } from '$app/navigation';
  import { Chat } from '$lib/schema';
  import { useAccount } from 'jazz-svelte';
  import { Group } from 'jazz-tools';

  const { me } = useAccount();

  $effect(() => {
    if (!me) return;
    const group = Group.create();
    group.addMember('everyone', 'writer');
    const chat = Chat.create([], group);
    goto(`/chat/${chat.id}`);
  });
</script>
