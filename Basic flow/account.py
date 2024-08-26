

class Account():

    def __init__(self,balance,owner):

        self.owner = owner
        self.balance = balance

    def deposit(self, deposit_amount):

        self.balance += deposit_amount
        print('Amount deposited')

    def withdraw(self,withdraw_amount):

        if self.balance >=withdraw_amount:
            self.balance -= withdraw_amount
            print('Money Withdrawn')

    def send_money(self,amount_sent,obj):
        self.balance -= amount_sent
        obj.balance += amount_sent

    def __str__(self) -> str:
        return f'account owner is {self.owner} and balance is {self.balance}'

    
neel = Account(balance=1000,owner='neel')
madhur = Account(balance=100,owner='madhur')

print(neel.balance)
print(neel.owner)

neel.deposit(250)
print(neel.balance)

neel.withdraw(500)
print(neel.balance)


neel.send_money(100,madhur)
print(neel.balance)
print(madhur.balance)












