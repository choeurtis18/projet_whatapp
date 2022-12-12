<?php

namespace App\Repository;

use App\Entity\Chat;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Chat|null find($id, $lockMode = null, $lockVersion = null)
 * @method Chat|null findOneBy(array $criteria, array $orderBy = null)
 * @method Chat[]    findAll()
 * @method Chat[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ChatRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Chat::class);
    }

    public function save(Chat $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function findChatByTopic($chatTopic) {
        $topic_tab = explode('.', $chatTopic);
        $newchatTopic = $topic_tab[1].'.'.$topic_tab[0];
        
        $return =  $this->createQueryBuilder('chat')
            ->andWhere('chat.topic = :val')
            ->setParameter('val', $chatTopic)
            ->getQuery()
            ->getOneOrNullResult();

        if($return == null) {
            $return =  $this->createQueryBuilder('chat')
                ->andWhere('chat.topic = :val')
                ->setParameter('val', $newchatTopic)
                ->getQuery()
                ->getOneOrNullResult();
        } 
        
        return $return;
    }

    public function findAllMessageOfChat($chatTopic)
    {
        $topic_tab = explode('.', $chatTopic);
        $newchatTopic = $topic_tab[1].'.'.$topic_tab[0];

        $return =  $this->createQueryBuilder('chat')
            ->andWhere('chat.topic = :val')
            ->setParameter('val', $chatTopic)
            ->innerJoin('chat.messages', 'messages')
            ->addSelect('messages')
            ->orderBy('messages.date', 'DESC')
            ->getQuery()
            ->getOneOrNullResult();

        if($return == null) {
            $return =  $this->createQueryBuilder('chat')
                ->andWhere('chat.topic = :val')
                ->setParameter('val', $newchatTopic)
                ->innerJoin('chat.messages', 'messages')
                ->addSelect('messages')
                ->orderBy('messages.date', 'DESC')
                ->getQuery()
                ->getOneOrNullResult();
        } 
        
        return $return;
    }

}
