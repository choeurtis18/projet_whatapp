<?php

namespace App\Controller;

use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class UserController extends AbstractController
{
    #[Route('/user-list', name: 'user_list')]
    public function userList(UserRepository $userRepository)
    {
        $users = $userRepository->findAll();
        //$users = $userRepository->findAllButMe($this->getUser());

        return $this->json([
            'users' => $users
        ], 200, [], ['groups' => 'main']);
    }
}