import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { createClient } from '@supabase/supabase-js';

// Variáveis de ambiente necessárias
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

// Inicializa o cliente Supabase
const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);

// Inicializa o Resend com sua API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        // Parse do corpo da requisição
        const requestBody = await request.json();
        console.log('Request Body:', requestBody);

        const { customerId, email } = requestBody;

        // Validação dos dados de entrada
        if (!customerId || !email) {
            return NextResponse.json(
                { error: 'Customer ID and email are required' },
                { status: 400 }
            );
        }

        // Buscar detalhes do cliente no Supabase
        const { data: customerData, error: customerError } = await supabase
            .from('customers')
            .select('company_name, next_payment_date, payment_status')
            .eq('id', customerId)
            .single();

        if (customerError || !customerData) {
            console.error('Erro ao buscar cliente:', customerError);
            return NextResponse.json(
                { error: 'Cliente não encontrado' },
                { status: 404 }
            );
        }

        // Envio de e-mail usando Resend
        const emailResponse = await resend.emails.send({
            from: 'suporte@transacional.suportebel.com.br', // Use seu domínio verificado
            to: email,
            subject: 'Lembrete de Pagamento',
            html: `
                <div style="font-family: 'Arial', sans-serif; max-width: 600px; margin: 0 auto; background-color: #f4f4f4; padding: 20px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                    <div style="background-color: #ffffff; padding: 30px; border-radius: 8px;">
                        <h1 style="color: #333; text-align: center; border-bottom: 2px solid #e0e0e0; padding-bottom: 15px; margin-bottom: 20px;">
                            Lembrete de Pagamento
                        </h1>
                        
                        <p style="color: #555; line-height: 1.6;">
                            Olá, <strong>${customerData.company_name}</strong>!
                        </p>

                        ${customerData.payment_status === 'up_to_date' 
                            ? `<div style="background-color: #e6f3e6; border-left: 4px solid #4CAF50; padding: 15px; margin: 20px 0; border-radius: 4px;">
                                <p style="color: #2E7D32; margin: 0;">
                                    Seu pagamento está em dia. Próximo vencimento: 
                                    <strong>${new Date(customerData.next_payment_date).toLocaleDateString()}</strong>
                                </p>
                            </div>`
                            : `<div style="background-color: #ffebee; border-left: 4px solid #F44336; padding: 15px; margin: 20px 0; border-radius: 4px;">
                                <p style="color: #D32F2F; margin: 0;">
                                    <strong>Alerta de Pagamento Pendente</strong><br>
                                    Identificamos que sua fatura está vencida desde 
                                    <strong>${new Date(customerData.next_payment_date).toLocaleDateString()}</strong>
                                </p>
                            </div>
                            
                            <div style="background-color: #f9f9f9; border: 1px solid #e0e0e0; padding: 15px; margin: 20px 0; border-radius: 4px;">
                                <h3 style="color: #333; margin-top: 0;">Importante:</h3>
                                <p style="color: #555;">
                                    Seu suporte encontra-se <strong style="color: #D32F2F;">BLOQUEADO</strong> até a regularização do pagamento. 
                                    Para desbloqueio, entre em contato com nosso setor financeiro.
                                </p>
                                <div style="background-color: #e6f3e6; border-left: 4px solid #4CAF50; padding: 10px; margin-top: 15px;">
                                    <p style="margin: 0; color: #2E7D32;">
                                        📞 Whatsapp Financeiro: 
                                        <a href="https://wa.me/559185595693" style="color: #4CAF50; text-decoration: none;">
                                            +55 (91) 8559-5693
                                        </a>
                                    </p>
                                </div>
                            </div>`
                        }

                        <p style="color: #777; margin-top: 20px; text-align: center;">
                            Em caso de dúvidas, entre em contato conosco.
                        </p>

                        <div style="text-align: center; margin-top: 20px; padding-top: 15px; border-top: 1px solid #e0e0e0;">
                            <p style="color: #999; font-size: 12px;">
                                © ${new Date().getFullYear()} Suporte Bel. Todos os direitos reservados.
                            </p>
                        </div>
                    </div>
                </div>
            `
        });

        // Verificação adicional para garantir que 'data' existe
        if (!emailResponse || !emailResponse.data) {
            console.error('Erro ao enviar e-mail:', emailResponse?.error);
            return NextResponse.json(
                { error: 'Erro ao enviar e-mail', details: emailResponse?.error },
                { status: 500 }
            );
        }

        return NextResponse.json({ 
            success: true, 
            messageId: emailResponse.data.id 
        });

    } catch (error) {
        console.error('Erro no envio de lembrete:', error);
        return NextResponse.json(
            { error: 'Erro ao processar lembrete', details: error },
            { status: 500 }
        );
    }
}
