<?php

namespace App\Controller;

use App\Entity\Chat;
use App\Entity\Message;

use App\Service\PrivateTopicHelper;
use App\Repository\ChatRepository;
use App\Repository\MessageRepository;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class ChatController extends AbstractController
{
    #[Route('/chat', name: 'chat')]
    public function index(): Response
    {
        return $this->render('chat/index.html.twig', [
            'controller_name' => 'ChatController',
        ]);
    }

    #[Route('/chat/{topic}', name: 'app_chat', methods: 'GET')]
    public function getChat(ChatRepository     $chatRepository,
                                Request            $request,
                                PrivateTopicHelper $topicHelper,
                                string             $topic): JsonResponse
    {
        $chats = $chatRepository->findChatByTopic($topic);
        $chat;
        if(!$chats) {
            $chat = new Chat();
            $chat->setTopic($topic);
            $chatRepository->save($chat, true);
        }

        $chats = $chatRepository->findAllMessageOfChat($topic);
        return $this->json([
            'chats' => $chats
        ], 200, [], ['groups' => 'main']);
    }

    #[Route('/set-message/{topic}', name: 'api_setmessage', methods: 'POST')]
    public function setMessage(ChatRepository       $chatRepository,
                                Request             $request,
                                MessageRepository   $messageRepository,
                                string              $topic): JsonResponse
    {
        $current_user = $this->getUser();
        $chats = $chatRepository->findChatByTopic($topic);
        $content = $request->request->get('content');
        
        dd("qdfghjk");
        try {
            $message = new Message();
            $message->setUser($current_user)
                ->setChat($chats)
                ->setDate(new \DateTime())
                ->setContent($content);

            $messageRepository->save($message, true);

            $chats = $chatRepository->findAllMessageOfChat($topic);
            return $this->json([
                'chats' => $chats
            ], 200, [], ['groups' => 'main']);
        } catch (\Exception $exception) {
            return $this->json([
                'status' => 0,
                'error' => $exception->getMessage()
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
